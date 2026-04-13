export type BudgetRange =
  | "under-5k"
  | "5k-15k"
  | "15k-40k"
  | "40k-plus";

export type GoalType =
  | "reduce-waste"
  | "improve-tracking"
  | "scale-profitably"
  | "stabilize-performance";

export interface AuditRequest {
  firstName: string;
  lastName: string;
  email: string;
  website: string;
  budget: BudgetRange;
  goal: GoalType;
  concern: string;
  submittedAt: string;
}

interface BudgetOption {
  value: BudgetRange;
  label: string;
  monthlySpend: number;
}

interface GoalOption {
  value: GoalType;
  label: string;
  emphasis: "efficiency" | "tracking" | "growth" | "stability";
  headline: string;
}

export interface AuditPriority {
  title: string;
  status: "Priority" | "Watch" | "Stable";
  score: number;
  note: string;
}

export interface AuditSnapshot {
  firstName: string;
  websiteHost: string;
  websiteDisplay: string;
  budgetLabel: string;
  monthlySpend: number;
  goalLabel: string;
  goalHeadline: string;
  estimatedWaste: number;
  recoverableSpend: number;
  healthScore: number;
  responseWindow: string;
  priorities: AuditPriority[];
  chartData: Array<{
    label: string;
    focused: number;
    leakage: number;
  }>;
}

export const AUDIT_STORAGE_KEY = "paidscope.audit-request";

export const budgetOptions: BudgetOption[] = [
  { value: "under-5k", label: "Under $5k / month", monthlySpend: 3500 },
  { value: "5k-15k", label: "$5k to $15k / month", monthlySpend: 10000 },
  { value: "15k-40k", label: "$15k to $40k / month", monthlySpend: 25000 },
  { value: "40k-plus", label: "$40k+ / month", monthlySpend: 60000 },
];

export const goalOptions: GoalOption[] = [
  {
    value: "reduce-waste",
    label: "Reduce wasted spend",
    emphasis: "efficiency",
    headline: "Reviewing query waste, loose match types, and budget drift.",
  },
  {
    value: "improve-tracking",
    label: "Tighten tracking and attribution",
    emphasis: "tracking",
    headline: "Reviewing conversion coverage, attribution integrity, and reporting trust.",
  },
  {
    value: "scale-profitably",
    label: "Scale profitably",
    emphasis: "growth",
    headline: "Reviewing campaign segmentation, budget concentration, and landing-page fit.",
  },
  {
    value: "stabilize-performance",
    label: "Stabilize account performance",
    emphasis: "stability",
    headline: "Reviewing consistency, bidding signals, and friction across the path to conversion.",
  },
];

export const defaultAuditRequest: AuditRequest = {
  firstName: "",
  lastName: "",
  email: "",
  website: "",
  budget: "5k-15k",
  goal: "reduce-waste",
  concern: "",
  submittedAt: "",
};

export function hasAuditRequestContext(request: AuditRequest) {
  return Boolean(
    request.firstName.trim() &&
      request.lastName.trim() &&
      request.email.trim() &&
      request.website.trim() &&
      request.budget &&
      request.goal,
  );
}

const healthScoreByGoal: Record<GoalType, number> = {
  "reduce-waste": 58,
  "improve-tracking": 51,
  "scale-profitably": 63,
  "stabilize-performance": 56,
};

function roundToNearest(value: number, step: number) {
  return Math.max(step, Math.round(value / step) * step);
}

export function getBudgetOption(value?: string) {
  return budgetOptions.find((option) => option.value === value) ?? budgetOptions[1];
}

export function getGoalOption(value?: string) {
  return goalOptions.find((option) => option.value === value) ?? goalOptions[0];
}

export function getWebsiteHost(website: string) {
  if (!website.trim()) {
    return "";
  }

  try {
    const normalized = website.startsWith("http") ? website : `https://${website}`;
    return new URL(normalized).hostname.replace(/^www\./, "");
  } catch {
    return website.replace(/^https?:\/\//, "").replace(/^www\./, "").split("/")[0] ?? website;
  }
}

export function readAuditRequest() {
  if (typeof window === "undefined") {
    return defaultAuditRequest;
  }

  try {
    const raw = window.sessionStorage.getItem(AUDIT_STORAGE_KEY);
    if (!raw) {
      return defaultAuditRequest;
    }

    return { ...defaultAuditRequest, ...JSON.parse(raw) } as AuditRequest;
  } catch {
    return defaultAuditRequest;
  }
}

export function saveAuditRequest(request: AuditRequest) {
  if (typeof window === "undefined") {
    return;
  }

  window.sessionStorage.setItem(AUDIT_STORAGE_KEY, JSON.stringify(request));
}

export function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export function buildAuditSnapshot(request: AuditRequest): AuditSnapshot {
  const budget = getBudgetOption(request.budget);
  const goal = getGoalOption(request.goal);
  const monthlySpend = budget.monthlySpend;

  const wasteRateByGoal: Record<GoalType, number> = {
    "reduce-waste": 0.24,
    "improve-tracking": 0.16,
    "scale-profitably": 0.18,
    "stabilize-performance": 0.2,
  };

  const estimatedWaste = roundToNearest(monthlySpend * wasteRateByGoal[goal.value], 50);
  const recoverableSpend = roundToNearest(estimatedWaste * 0.7, 50);
  const websiteHost = getWebsiteHost(request.website);
  const websiteDisplay = websiteHost;
  const firstName = request.firstName;

  const priorities: AuditPriority[] = [
    {
      title: "Search waste",
      status: "Priority",
      score: goal.value === "reduce-waste" ? 34 : 28,
      note: `Usually the first place to tighten for ${budget.label.toLowerCase()} accounts under efficiency pressure.`,
    },
    {
      title: "Query intent matching",
      status: goal.value === "scale-profitably" ? "Priority" : "Watch",
      score: goal.value === "scale-profitably" ? 31 : 23,
      note: "Checks whether search intent, match types, and ad-group separation are tight enough to guide bidding cleanly.",
    },
    {
      title: "Tracking integrity",
      status: goal.value === "improve-tracking" ? "Priority" : "Watch",
      score: goal.value === "improve-tracking" ? 39 : 24,
      note: "Reviews conversion actions, attribution handoff, and duplicate signal risk before any scaling decisions.",
    },
    {
      title: "Campaign segmentation",
      status: goal.value === "scale-profitably" ? "Priority" : "Watch",
      score: goal.value === "scale-profitably" ? 33 : 25,
      note: "Checks whether budget, match types, and intent layers are separated well enough to support optimization.",
    },
    {
      title: "Landing-page alignment",
      status: "Watch",
      score: 22,
      note: "Reviews message match, conversion friction, and continuity between keyword intent and the landing-page offer.",
    },
    {
      title: "Budget concentration risk",
      status: goal.value === "stabilize-performance" ? "Priority" : "Stable",
      score: goal.value === "stabilize-performance" ? 30 : 18,
      note: "Looks for over-reliance on a small set of campaigns, terms, or bidding patterns.",
    },
  ];

  const chartData = [
    { label: "Intent fit", focused: roundToNearest(monthlySpend * 0.22, 50), leakage: roundToNearest(monthlySpend * 0.08, 50) },
    { label: "Segmentation", focused: roundToNearest(monthlySpend * 0.2, 50), leakage: roundToNearest(monthlySpend * 0.06, 50) },
    { label: "Tracking", focused: roundToNearest(monthlySpend * 0.15, 50), leakage: roundToNearest(monthlySpend * 0.04, 50) },
    { label: "Landing page", focused: roundToNearest(monthlySpend * 0.18, 50), leakage: roundToNearest(monthlySpend * 0.05, 50) },
  ];

  return {
    firstName,
    websiteHost,
    websiteDisplay,
    budgetLabel: budget.label,
    monthlySpend,
    goalLabel: goal.label,
    goalHeadline: goal.headline,
    estimatedWaste,
    recoverableSpend,
    healthScore: healthScoreByGoal[goal.value],
    responseWindow: "within one business day",
    priorities,
    chartData,
  };
}
