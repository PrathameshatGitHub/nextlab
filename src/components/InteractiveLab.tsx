"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RefreshCw, Play, Layers, Zap, Info, ShieldAlert, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogEntry {
  timestamp: string;
  type: "info" | "success" | "warning" | "error";
  message: string;
}


export function InteractiveLab() {
  const [activeTab, setActiveTab] = useState<"render" | "hydration" | "cache">("render");
  const [renderCount, setRenderCount] = useState(0);
  const [isHydrated, setIsHydrated] = useState(false);
  const [cacheState, setCacheState] = useState<"fresh" | "fetching" | "stale">("fresh");
  const [latency, setLatency] = useState(0.8);
  const [nodeRenders, setNodeRenders] = useState<Record<string, number>>({
    root: 1,
    queryClient: 1,
    dashboardLayout: 1,
    heroSection: 1,
    metricsWidget: 1,
    terminalConsole: 1,
  });
  
  const [logs, setLogs] = useState<LogEntry[]>([
    { timestamp: "16:00:00", type: "info", message: "Initialize App Router Fiber tree" },
    { timestamp: "16:00:01", type: "success", message: "Initial static render complete (Server Side)" },
    { timestamp: "16:00:02", type: "warning", message: "Hydration mismatch check: 0 issues found" },
  ]);

  const addLog = (message: string, type: LogEntry["type"] = "info") => {
    const time = new Date().toTimeString().split(" ")[0];
    setLogs((prev) => [...prev.slice(-6), { timestamp: time, type, message }]);
  };

  const simulateRender = () => {
    addLog("[Scheduler] Requesting render buffer update...", "info");
    setLatency(parseFloat((Math.random() * 1.5 + 0.2).toFixed(2)));
    
    // Simulate updating component renders
    setNodeRenders((prev) => {
      const next = { ...prev };
      next.root += 1;
      next.dashboardLayout += 1;
      
      // Hero only renders sometimes (conditional)
      if (Math.random() > 0.4) {
        next.heroSection += 1;
        addLog("[Fiber] Diffed hero component: Prop changes detected, re-rendering.", "info");
      } else {
        addLog("[Fiber] Diffed hero component: Unchanged, skipping.", "success");
      }
      
      next.metricsWidget += 1;
      next.terminalConsole += 1;
      return next;
    });

    setRenderCount((prev) => prev + 1);
    addLog(`[Commit Phase] Reconstructed Virtual DOM. Latency: ${latency}ms`, "success");
  };

  const simulateHydration = () => {
    setIsHydrated(false);
    addLog("[SSR] Serving pre-rendered HTML skeleton...", "info");
    
    setTimeout(() => {
      setIsHydrated(true);
      addLog("[Hydration] Client bundles downloaded (12.4 kB JS)", "info");
      addLog("[Hydration] Running React hydration loops...", "info");
      addLog("[Success] Hydration finished. Event listeners successfully attached.", "success");
    }, 1200);
  };

  const triggerCacheInvalidation = () => {
    setCacheState("fetching");
    addLog("[React Query] Fetch triggered: cache is stale or invalidated.", "info");
    
    setTimeout(() => {
      setCacheState("fresh");
      addLog("[React Query] Loaded 4 entries from edge server. Cache updated.", "success");
    }, 1500);
  };

  return (
    <div className="w-full rounded-xl border border-slate-800 bg-[#070708] overflow-hidden flex flex-col md:flex-row shadow-2xl">
      {/* Sidebar Controls Panel */}
      <div className="w-full md:w-80 border-r border-slate-850 p-5 flex flex-col justify-between bg-zinc-950">
        <div>
          <div className="flex items-center gap-2 border-b border-slate-900 pb-3 mb-4">
            <Cpu className="w-4 h-4 text-cyber-green" />
            <h3 className="font-mono text-sm font-bold text-slate-200">Labs Control Panel</h3>
          </div>

          {/* DevTools Menu Tabs */}
          <div className="space-y-1 mb-6">
            <button
              onClick={() => setActiveTab("render")}
              className={cn(
                "w-full flex items-center gap-2.5 px-3 py-2 rounded font-mono text-xs text-left transition-all border",
                activeTab === "render"
                  ? "bg-cyber-green/10 text-cyber-green border-cyber-green/20"
                  : "text-slate-400 border-transparent hover:bg-slate-900/60"
              )}
            >
              <RefreshCw className={cn("w-3.5 h-3.5", activeTab === "render" && "animate-spin")} />
              React Rendering
            </button>
            <button
              onClick={() => setActiveTab("hydration")}
              className={cn(
                "w-full flex items-center gap-2.5 px-3 py-2 rounded font-mono text-xs text-left transition-all border",
                activeTab === "hydration"
                  ? "bg-react-blue/10 text-react-blue border-react-blue/20"
                  : "text-slate-400 border-transparent hover:bg-slate-900/60"
              )}
            >
              <Layers className="w-3.5 h-3.5" />
              SSR &amp; Hydration
            </button>
            <button
              onClick={() => setActiveTab("cache")}
              className={cn(
                "w-full flex items-center gap-2.5 px-3 py-2 rounded font-mono text-xs text-left transition-all border",
                activeTab === "cache"
                  ? "bg-observatory-amber/10 text-observatory-amber border-observatory-amber/20"
                  : "text-slate-400 border-transparent hover:bg-slate-900/60"
              )}
            >
              <Zap className="w-3.5 h-3.5" />
              Cache &amp; Server State
            </button>
          </div>

          {/* Contextual Controller UI */}
          <AnimatePresence mode="wait">
            {activeTab === "render" && (
              <motion.div
                key="render"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="space-y-4"
              >
                <div>
                  <p className="text-xs text-slate-400 leading-relaxed mb-3">
                    Click trigger button to fire a virtual React state mutation and observe diff/render tracking.
                  </p>
                  <button
                    onClick={simulateRender}
                    className="w-full flex items-center justify-center gap-2 bg-cyber-green text-obsidian font-mono text-xs font-bold py-2.5 px-4 rounded shadow-lg shadow-cyber-green/10 hover:bg-cyber-green-light active:scale-[0.98] transition-all"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    Simulate Render Event
                  </button>
                </div>

                <div className="border border-slate-900 rounded p-3 bg-zinc-950/40 space-y-2">
                  <div className="flex justify-between font-mono text-[10px] text-slate-500">
                    <span>DOM RECONCILER</span>
                    <span className="text-cyber-green font-bold">READY</span>
                  </div>
                  <div className="flex justify-between font-mono text-xs text-slate-300">
                    <span>Render Count:</span>
                    <span className="font-bold">{renderCount}</span>
                  </div>
                  <div className="flex justify-between font-mono text-xs text-slate-300">
                    <span>Recommit Latency:</span>
                    <span className="font-bold text-cyber-green">{latency}ms</span>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "hydration" && (
              <motion.div
                key="hydration"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="space-y-4"
              >
                <div>
                  <p className="text-xs text-slate-400 leading-relaxed mb-3">
                    Explore rendering transition from server-delivered HTML (unhydrated static markup) to client-side reactive components.
                  </p>
                  <button
                    onClick={simulateHydration}
                    className="w-full flex items-center justify-center gap-2 bg-react-blue text-obsidian font-mono text-xs font-bold py-2.5 px-4 rounded shadow-lg shadow-react-blue/10 hover:bg-react-blue-light active:scale-[0.98] transition-all"
                  >
                    <Layers className="w-3.5 h-3.5" />
                    Trigger SSR &amp; Hydrate
                  </button>
                </div>

                <div className="border border-slate-900 rounded p-3 bg-zinc-950/40 space-y-2">
                  <div className="flex justify-between font-mono text-[10px] text-slate-500">
                    <span>HYDRATOR ENGINE</span>
                    <span className={cn("font-bold", isHydrated ? "text-react-blue" : "text-amber-500")}>
                      {isHydrated ? "ACTIVE" : "UNHYDRATED"}
                    </span>
                  </div>
                  <div className="flex justify-between font-mono text-xs text-slate-300">
                    <span>Hydrated Nodes:</span>
                    <span>{isHydrated ? "100% Attached" : "0% (Raw HTML)"}</span>
                  </div>
                  <div className="flex justify-between font-mono text-xs text-slate-300">
                    <span>Interactive Ready:</span>
                    <span>{isHydrated ? "Yes (Instant)" : "No (Blocked)"}</span>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "cache" && (
              <motion.div
                key="cache"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="space-y-4"
              >
                <div>
                  <p className="text-xs text-slate-400 leading-relaxed mb-3">
                    Simulate React Query server cache states. Invalidate existing cache and watch it query the backend service.
                  </p>
                  <button
                    onClick={triggerCacheInvalidation}
                    disabled={cacheState === "fetching"}
                    className="w-full flex items-center justify-center gap-2 bg-observatory-amber text-obsidian font-mono text-xs font-bold py-2.5 px-4 rounded shadow-lg shadow-observatory-amber/10 hover:bg-observatory-amber-light active:scale-[0.98] transition-all disabled:opacity-50"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    Invalidate Cache Map
                  </button>
                </div>

                <div className="border border-slate-900 rounded p-3 bg-zinc-950/40 space-y-2">
                  <div className="flex justify-between font-mono text-[10px] text-slate-500">
                    <span>QUERY CLIENT</span>
                    <span className={cn("font-bold", cacheState === "fresh" ? "text-observatory-amber" : "text-slate-400")}>
                      {cacheState.toUpperCase()}
                    </span>
                  </div>
                  <div className="flex justify-between font-mono text-xs text-slate-300">
                    <span>Cache Key:</span>
                    <span className="font-mono bg-zinc-900 px-1 py-0.5 rounded text-[10px]">&apos;labs_data&apos;</span>
                  </div>
                  <div className="flex justify-between font-mono text-xs text-slate-300">
                    <span>Data Status:</span>
                    <span>{cacheState === "fetching" ? "Refetching..." : "Fresh (Stale-Time: 5m)"}</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Small Diagnostic Footer inside sidebar */}
        <div className="mt-4 pt-3 border-t border-slate-900 flex items-center gap-2 font-mono text-[9px] text-slate-500">
          <Info className="w-3 h-3 text-slate-600" />
          <span>Observatory Engine v1.0.1</span>
        </div>
      </div>

      {/* Main Workspace (Telemetry Visualizer) */}
      <div className="flex-1 p-5 flex flex-col justify-between h-[450px]">
        {/* Workspace Header */}
        <div className="flex items-center justify-between border-b border-slate-900 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyber-green animate-pulse" />
            <span className="font-mono text-xs text-slate-400">Simulation Arena (Live Telemetry)</span>
          </div>
          
          <div className="flex gap-4 font-mono text-[10px] text-slate-500">
            <div>JS Payload: <span className="text-slate-300">12.4 kB</span></div>
            <div>FPS: <span className="text-cyber-green">60.0</span></div>
          </div>
        </div>

        {/* Interactive Visualization Area */}
        <div className="flex-1 flex items-center justify-center relative bg-black/30 rounded border border-slate-900/50 p-4">
          <div className="cyber-dots absolute inset-0 opacity-10 pointer-events-none" />
          
          {/* Visualizing standard React render diff node graph */}
          <div className="relative flex flex-col items-center gap-6 w-full max-w-md">
            {/* Root Client Provider */}
            <motion.div
              animate={activeTab === "render" ? { scale: [1, 1.05, 1] } : {}}
              className="z-10 flex flex-col items-center p-2 rounded-md border border-slate-800 bg-[#0e0e11] text-[10px] font-mono shadow-md"
            >
              <span className="text-slate-500">Root Node</span>
              <span className="text-slate-300 font-bold">&lt;AppProvider /&gt;</span>
              <span className="text-cyber-green text-[9px] mt-0.5">Renders: {nodeRenders.root}</span>
            </motion.div>

            {/* Middle component row */}
            <div className="w-full flex justify-around">
              {/* Cache client (React Query Context) */}
              <motion.div
                animate={activeTab === "cache" && cacheState === "fetching" ? { borderColor: ["#f59e0b", "#1e293b"] } : {}}
                transition={{ repeat: Infinity, duration: 1 }}
                className={cn(
                  "z-10 flex flex-col items-center p-2 rounded-md border border-slate-800 bg-[#0e0e11] text-[10px] font-mono shadow-md",
                  activeTab === "cache" && cacheState === "fetching" && "border-observatory-amber"
                )}
              >
                <span className="text-slate-500">Service Gateway</span>
                <span className="text-slate-300 font-bold">&lt;QueryClient /&gt;</span>
                <span className="text-slate-500 text-[9px] mt-0.5">Cache hit: 100%</span>
              </motion.div>

              {/* Page Layout Wrapper */}
              <div className="flex flex-col items-center p-2 rounded-md border border-slate-800 bg-[#0e0e11] text-[10px] font-mono shadow-md">
                <span className="text-slate-500">Layout Router</span>
                <span className="text-slate-300 font-bold">&lt;DashboardLayout /&gt;</span>
                <span className="text-cyber-green text-[9px] mt-0.5">Renders: {nodeRenders.dashboardLayout}</span>
              </div>
            </div>

            {/* Bottom Row Components */}
            <div className="w-full flex justify-between gap-2">
              {/* Component A - Static Server Node */}
              <div className="flex-1 flex flex-col items-center p-2 rounded border border-slate-900 bg-zinc-950/40 text-[9px] font-mono">
                <span className="text-slate-600">Static Node</span>
                <span className="text-slate-400">&lt;HeroSection /&gt;</span>
                <span className="text-slate-600 text-[8px] mt-0.5">Renders: {nodeRenders.heroSection}</span>
              </div>

              {/* Component B - Metric Widgets */}
              <motion.div
                animate={activeTab === "hydration" && !isHydrated ? { opacity: 0.6 } : { opacity: 1 }}
                className={cn(
                  "flex-1 flex flex-col items-center p-2 rounded-md border border-slate-800 bg-[#0e0e11] text-[9px] font-mono",
                  activeTab === "hydration" && (isHydrated ? "border-react-blue" : "border-slate-950")
                )}
              >
                <span className="text-slate-500">Client Node</span>
                <span className="text-slate-300">&lt;MetricsWidget /&gt;</span>
                <span className="text-cyber-green text-[8px] mt-0.5">Renders: {nodeRenders.metricsWidget}</span>
                <span className={cn("text-[7px] px-1 font-bold rounded-sm mt-1", isHydrated ? "bg-react-blue/20 text-react-blue" : "bg-red-500/20 text-red-400")}>
                  {isHydrated ? "HYDRATED" : "STATIC"}
                </span>
              </motion.div>

              {/* Component C - Simulated Terminal */}
              <motion.div
                animate={activeTab === "render" ? { scale: [1, 1.02, 1] } : {}}
                className="flex-1 flex flex-col items-center p-2 rounded-md border border-slate-800 bg-[#0e0e11] text-[9px] font-mono shadow-sm"
              >
                <span className="text-slate-500">Client Node</span>
                <span className="text-slate-300">&lt;TerminalConsole /&gt;</span>
                <span className="text-cyber-green text-[8px] mt-0.5">Renders: {nodeRenders.terminalConsole}</span>
              </motion.div>
            </div>
            
            {/* SVG Connecting Lines in background */}
            <svg className="absolute inset-0 w-full h-full -z-10 pointer-events-none" style={{ minHeight: "180px" }}>
              <line x1="50%" y1="20%" x2="25%" y2="50%" stroke="#1e293b" strokeWidth="1" />
              <line x1="50%" y1="20%" x2="75%" y2="50%" stroke="#1e293b" strokeWidth="1" />
              
              <line x1="25%" y1="58%" x2="16%" y2="82%" stroke="#1e293b" strokeWidth="1" />
              <line x1="75%" y1="58%" x2="50%" y2="82%" stroke="#1e293b" strokeWidth="1" />
              <line x1="75%" y1="58%" x2="84%" y2="82%" stroke="#1e293b" strokeWidth="1" />
            </svg>
          </div>
        </div>

        {/* Console Event Logs (Simulated chrome devtools logs) */}
        <div className="mt-4 border border-slate-900 rounded bg-zinc-950 p-2.5 h-28 overflow-y-auto">
          <div className="flex items-center gap-1.5 border-b border-slate-900 pb-1 mb-1.5 text-slate-500 font-mono text-[9px] uppercase tracking-wider">
            <ShieldAlert className="w-3 h-3 text-slate-600" />
            <span>React Reconciler Output Logs</span>
          </div>

          <div className="space-y-1">
            {logs.map((log, index) => (
              <div key={index} className="flex gap-2 font-mono text-[10px]">
                <span className="text-slate-600 shrink-0">{log.timestamp}</span>
                <span
                  className={cn(
                    "shrink-0",
                    log.type === "success"
                      ? "text-cyber-green"
                      : log.type === "warning"
                      ? "text-observatory-amber"
                      : log.type === "error"
                      ? "text-red-500"
                      : "text-react-blue"
                  )}
                >
                  [{log.type.toUpperCase()}]
                </span>
                <span className="text-slate-400">{log.message}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
