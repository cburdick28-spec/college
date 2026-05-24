"use client";

import dynamic from "next/dynamic";

const GPAChart = dynamic(() => import("@/components/GPAChart").then((module) => module.GPAChart), {
  ssr: false,
  loading: () => <div className="h-72 animate-pulse rounded-xl border border-zinc-800 bg-zinc-900/60" />,
});

export function AcademicsChartSection() {
  return <GPAChart />;
}
