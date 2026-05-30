"use client";

import { useState, useRef, useEffect } from "react";
import { Terminal, ArrowRight, CornerDownLeft } from "lucide-react";

interface CommandLog {
  command: string;
  output: string | React.ReactNode;
}

export function SimulatedConsole() {
  const [input, setInput] = useState("");
  const [logs, setLogs] = useState<CommandLog[]>([
    {
      command: "system_diagnostic",
      output: (
        <div className="font-mono text-xs text-cyber-green space-y-1">
          <p>[Booting System Components...]</p>
          <p>REACT CORE: 19.0.0-rc ... OK</p>
          <p>NEXT.JS ENGINE: 15.0.0-latest ... OK</p>
          <p>TYPESCRIPT COMPILER: 5.x ... OK</p>
          <p>ENGINEER PROFILE: Prathamesh Mali ... LOADED</p>
          <p>LATENCY STATUS: 100% stable, direct websocket established.</p>
          <p className="text-slate-400 mt-2">Type &quot;help&quot; to inspect available console diagnostics.</p>
        </div>
      ),
    },
  ]);
  
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let response: React.ReactNode = "";

    switch (cmd) {
      case "help":
        response = (
          <div className="space-y-1 font-mono text-xs text-slate-300">
            <p className="text-cyber-green font-semibold">Available Observatory Commands:</p>
            <p>  <span className="text-react-blue">about</span>       - Print Prathamesh Mali&apos;s professional system specs</p>
            <p>  <span className="text-react-blue">skills</span>      - Output architectural &amp; frontend engineering expertise matrix</p>
            <p>  <span className="text-react-blue">projects</span>    - Query production system deployments (AntyGravity Labs, Zaal, etc.)</p>
            <p>  <span className="text-react-blue">contact</span>     - Establish direct communication webhooks</p>
            <p>  <span className="text-react-blue">clear</span>       - Wipe diagnostic screen</p>
          </div>
        );
        break;
      case "about":
        response = (
          <div className="space-y-2 font-mono text-xs text-slate-300">
            <p><span className="text-cyber-green">Name:</span> Prathamesh Mali</p>
            <p><span className="text-cyber-green">Role:</span> Frontend Engineer (React/Next.js/Performance)</p>
            <p><span className="text-cyber-green">Location:</span> Pune, Maharashtra, India</p>
            <p><span className="text-cyber-green">Experience:</span> 2+ Years in Production Grade SSR &amp; Web Applications</p>
            <p className="text-slate-400 mt-1">
              Building highly performant, accessible digital products that load under 1s and excel in Core Web Vitals. Focus areas: Hydration overhead reduction, advanced React rendering visualizers, custom state sync.
            </p>
          </div>
        );
        break;
      case "skills":
        response = (
          <div className="space-y-2 font-mono text-xs text-slate-300">
            <p className="text-cyber-green">ENGINEERING DIAGNOSTIC REPORT:</p>
            <div className="grid grid-cols-2 gap-4 border border-slate-900 p-2 rounded">
              <div>
                <p className="font-bold text-react-blue border-b border-slate-900 pb-0.5">FRONTEND CORE</p>
                <p>• React &amp; Next.js 15 (SSR/SSG)</p>
                <p>• TypeScript (Strict Mode)</p>
                <p>• Redux, Zustand, React Query</p>
                <p>• Tailwind CSS, Shadcn UI</p>
              </div>
              <div>
                <p className="font-bold text-react-blue border-b border-slate-900 pb-0.5">ARCHITECTURE</p>
                <p>• Performance Optimization</p>
                <p>• Core Web Vitals Audit</p>
                <p>• Hydration &amp; Cache Strategies</p>
                <p>• SEO &amp; Rich Snippets Structure</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 border border-slate-900 p-2 rounded">
              <div>
                <p className="font-bold text-react-blue border-b border-slate-900 pb-0.5">BACKEND ENGINE</p>
                <p>• Node.js &amp; Express.js</p>
                <p>• REST APIs &amp; Integrations</p>
                <p>• Prisma &amp; PostgreSQL</p>
              </div>
              <div>
                <p className="font-bold text-react-blue border-b border-slate-900 pb-0.5">AI &amp; TOOLING</p>
                <p>• OpenAI APIs (Alt text gen)</p>
                <p>• Git, GitHub Copilot</p>
                <p>• AI-assisted Workflows</p>
              </div>
            </div>
          </div>
        );
        break;
      case "projects":
        response = (
          <div className="space-y-2 font-mono text-xs text-slate-300">
            <p className="text-cyber-green">ACTIVE DEPLOYMENTS IN CLOUD:</p>
            <div className="space-y-1.5">
              <p>
                1. <span className="text-react-blue font-bold">AntyGravity Labs</span> - Interactive Frontend Engineering Visualizer
                <br />
                <span className="text-slate-500">└ Link: </span><a href="https://frontend-demo-lemon-three.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-cyber-green hover:underline">frontend-demo-lemon-three.vercel.app</a>
              </p>
              <p>
                2. <span className="text-react-blue font-bold">Zaal Platform</span> - Multi-vendor Venue Booking System
                <br />
                <span className="text-slate-500">└ Features: </span>Next.js, NextAuth, Stripe, Google Calendar &amp; OpenAI API integrations.
              </p>
              <p>
                3. <span className="text-react-blue font-bold">Artcode Company Site</span> - High-performance Brand Hub
                <br />
                <span className="text-slate-500">└ Specs: </span>Next.js, Redux, SSR/SSG hybrid, PageSpeed index 90+.
              </p>
            </div>
          </div>
        );
        break;
      case "contact":
        response = (
          <div className="space-y-1 font-mono text-xs text-slate-300">
            <p className="text-cyber-green">HANDSHAKE WEBHOOK GATEWAY:</p>
            <p>• Email: <a href="mailto:prathameshmali.dev@gmail.com" className="text-react-blue hover:underline">prathameshmali.dev@gmail.com</a></p>
            <p>• LinkedIn: <a href="https://linkedin.com/in/prathamesh-mali" target="_blank" rel="noreferrer" className="text-react-blue hover:underline">linkedin.com/in/prathamesh-mali</a></p>
            <p>• GitHub: <a href="https://github.com/prathamesh-mali" target="_blank" rel="noreferrer" className="text-react-blue hover:underline">github.com/prathamesh-mali</a></p>
            <p className="text-slate-500 mt-1">Alternatively, use the contact terminal simulator at the bottom of the dashboard.</p>
          </div>
        );
        break;
      case "clear":
        setLogs([]);
        setInput("");
        return;
      default:
        response = (
          <span className="text-observatory-amber font-mono text-xs">
            Unknown instruction &quot;{cmd}&quot;. Type &quot;help&quot; for standard dashboard console operations.
          </span>
        );
        break;
    }

    setLogs((prev) => [...prev, { command: input, output: response }]);
    setInput("");
  };

  return (
    <div className="w-full rounded-lg border border-slate-800/80 bg-[#070708] shadow-2xl overflow-hidden">
      {/* DevTools Style Header */}
      <div className="flex items-center justify-between bg-zinc-950 px-4 py-2 border-b border-slate-900">
        <div className="flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5 text-cyber-green" />
          <span className="font-mono text-xs font-semibold text-slate-400">Observatory Diagnostics Console</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/40" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/40" />
        </div>
      </div>

      {/* Terminal Output */}
      <div className="p-4 h-64 overflow-y-auto space-y-4 scanline">
        {logs.map((log, index) => (
          <div key={index} className="space-y-1.5">
            <div className="flex items-center gap-2 text-slate-500 font-mono text-xs">
              <ArrowRight className="w-3 h-3 text-react-blue shrink-0" />
              <span>prathamesh-mali %</span>
              <span className="text-slate-200 font-semibold">{log.command}</span>
            </div>
            <div className="pl-5 leading-relaxed">{log.output}</div>
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Command Input Form */}
      <form onSubmit={handleCommand} className="flex items-center gap-2 bg-zinc-950/80 border-t border-slate-900/80 px-4 py-2">
        <span className="font-mono text-xs text-slate-500 shrink-0">prathamesh-mali %</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Type a command (e.g. "help", "about", "skills")'
          className="flex-1 bg-transparent text-xs font-mono text-slate-200 placeholder-slate-600 focus:outline-none"
        />
        <button type="submit" className="text-slate-500 hover:text-cyber-green transition-colors">
          <CornerDownLeft className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
}
