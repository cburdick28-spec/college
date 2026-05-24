"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { year: "Freshman", gpa: 2.6 },
  { year: "Sophomore", gpa: 3.6 },
];

export function GPAChart() {
  return (
    <div className="h-72 w-full rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
      <h2 className="mb-4 text-lg font-semibold text-white">GPA Growth</h2>
      <ResponsiveContainer width="100%" height="85%">
        <AreaChart data={data} margin={{ left: 12, right: 12, top: 8, bottom: 8 }}>
          <defs>
            <linearGradient id="gpa" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.85} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="#27272a" strokeDasharray="3 3" />
          <XAxis dataKey="year" stroke="#a1a1aa" />
          <YAxis domain={[2.4, 4]} stroke="#a1a1aa" />
          <Tooltip />
          <Area type="monotone" dataKey="gpa" stroke="#60a5fa" fill="url(#gpa)" strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
