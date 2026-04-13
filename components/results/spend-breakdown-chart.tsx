"use client";

import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { formatCurrency } from "@/lib/audit-flow";

interface SpendBreakdownChartProps {
  data: Array<{
    label: string;
    focused: number;
    leakage: number;
  }>;
}

export function SpendBreakdownChart({ data }: SpendBreakdownChartProps) {
  return (
    <div className="mt-8 h-[320px] min-w-0">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 0, right: 12, left: -16, bottom: 0 }}>
          <XAxis dataKey="label" stroke="#8792a2" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis
            stroke="#8792a2"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => formatCurrency(Number(value ?? 0))}
          />
          <Tooltip
            cursor={{ fill: "rgba(255,255,255,0.04)" }}
            contentStyle={{
              backgroundColor: "#111822",
              borderColor: "rgba(255,255,255,0.08)",
              borderRadius: "16px",
              color: "#f5f7fb",
            }}
            formatter={(value) => formatCurrency(Number(value ?? 0))}
          />
          <Bar dataKey="focused" name="Current productive spend" fill="rgba(134,181,214,0.8)" radius={[8, 8, 0, 0]} />
          <Bar dataKey="leakage" name="Likely leakage to validate" fill="rgba(220,98,71,0.86)" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
