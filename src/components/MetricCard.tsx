"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface MetricCardProps {
  title: string;
  value: string;
  subtext: string;
  statusText?: string;
  statusColor?: "green" | "blue" | "amber";
  icon?: ReactNode;
  sparklineData?: number[];
  className?: string;
}

export function MetricCard({
  title,
  value,
  subtext,
  statusText = "OK",
  statusColor = "green",
  icon,
  sparklineData = [30, 40, 35, 50, 49, 60, 70, 91, 100],
  className,
}: MetricCardProps) {
  // Convert sparkline data points to SVG path
  const width = 100;
  const height = 30;
  const max = Math.max(...sparklineData);
  const min = Math.min(...sparklineData);
  const range = max - min || 1;
  
  const points = sparklineData.map((val, index) => {
    const x = (index / (sparklineData.length - 1)) * width;
    const y = height - ((val - min) / range) * height;
    return `${x},${y}`;
  }).join(" ");

  const path = `M ${points}`;

  const statusColors = {
    green: "text-cyber-green bg-cyber-green/10 border-cyber-green/20",
    blue: "text-react-blue bg-react-blue/10 border-react-blue/20",
    amber: "text-observatory-amber bg-observatory-amber/10 border-observatory-amber/20",
  };

  const glowColors = {
    green: "group-hover:border-cyber-green/30 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.05)]",
    blue: "group-hover:border-react-blue/30 group-hover:shadow-[0_0_15px_rgba(14,165,233,0.05)]",
    amber: "group-hover:border-observatory-amber/30 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.05)]",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={cn(
        "group relative overflow-hidden rounded-lg border border-slate-800/80 bg-zinc-950 p-4 transition-all duration-300",
        glowColors[statusColor],
        className
      )}
    >
      {/* Background Dots Overlay */}
      <div className="cyber-dots absolute inset-0 opacity-20 pointer-events-none" />

      {/* Observability Card Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-slate-900 pb-2 mb-3">
        <span className="font-mono text-xs font-semibold tracking-wider text-slate-500 uppercase flex items-center gap-1.5">
          {icon}
          {title}
        </span>
        <span className={cn("font-mono text-[10px] font-bold px-1.5 py-0.5 rounded border uppercase tracking-widest", statusColors[statusColor])}>
          {statusText}
        </span>
      </div>

      {/* Metric Content */}
      <div className="relative z-10 flex items-end justify-between">
        <div>
          <div className="font-mono text-2xl font-bold tracking-tight text-slate-100 group-hover:text-white transition-colors duration-200">
            {value}
          </div>
          <p className="mt-1 text-xs text-slate-400 font-sans leading-tight">
            {subtext}
          </p>
        </div>

        {/* Sparkline Graph */}
        <div className="w-24 h-8 shrink-0">
          <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full overflow-visible">
            <defs>
              <linearGradient id={`gradient-${title.replace(/\s+/g, "-")}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={statusColor === "green" ? "#10b981" : statusColor === "blue" ? "#0ea5e9" : "#f59e0b"} stopOpacity="0.2"/>
                <stop offset="100%" stopColor={statusColor === "green" ? "#10b981" : statusColor === "blue" ? "#0ea5e9" : "#f59e0b"} stopOpacity="0"/>
              </linearGradient>
            </defs>
            {/* Sparkline path filled */}
            <path
              d={`${path} L ${width},${height} L 0,${height} Z`}
              fill={`url(#gradient-${title.replace(/\s+/g, "-")})`}
            />
            {/* Sparkline line */}
            <motion.path
              d={path}
              fill="none"
              stroke={statusColor === "green" ? "#10b981" : statusColor === "blue" ? "#0ea5e9" : "#f59e0b"}
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </svg>
        </div>
      </div>
      
      {/* Decorative Corner Details */}
      <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-slate-700 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-slate-700 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-slate-700 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-slate-700 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
}
