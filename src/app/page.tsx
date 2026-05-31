"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  ArrowUpRight,
  Download,
  Mail,
  Check,
  Clock,
  Code2,
  Database,
  History,
  MapPin,
  ArrowRight,
  Terminal,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Layers,
  Zap,
  Globe,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SimulatedConsole } from "@/components/SimulatedConsole";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function Home() {
  const [time, setTime] = useState("");
  const [activeSection, setActiveSection] = useState("hero");
  const [contactStatus, setContactStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      setTime(date.toTimeString().split(" ")[0]);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setContactStatus("sending");
    setTimeout(() => {
      setContactStatus("sent");
      setFormData({ name: "", email: "", message: "" });
    }, 1200);
  };

  const navLinks = [
    { href: "#about", label: "About", section: "about" },
    { href: "#projects", label: "Projects", section: "projects" },
    { href: "#experience", label: "Experience", section: "experience" },
    { href: "#skills", label: "Skills", section: "skills" },
    { href: "#contact", label: "Contact", section: "contact" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-200 relative overflow-x-hidden font-sans selection:bg-[#22c55e]/20">

      {/* ─── HEADER ─── */}
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
          <a href="#hero" className="flex items-center gap-2.5 group">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-60" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#22c55e]" />
            </span>
            <span className="font-mono text-sm font-semibold tracking-wide text-white">
              Prathamesh<span className="text-[#22c55e]">.</span>dev
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-400">
            {navLinks.map((link) => (
              <a
                key={link.section}
                href={link.href}
                onClick={() => setActiveSection(link.section)}
                className={cn(
                  "transition-colors hover:text-white",
                  activeSection === link.section && "text-white font-medium"
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <span className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono text-slate-500">
              <Clock className="w-3 h-3" />
              {time || "12:00:00"} IST
            </span>
            <a
              href="#contact"
              className="bg-[#22c55e] hover:bg-[#16a34a] text-black font-semibold text-sm px-4 py-2 rounded-md transition-colors"
            >
              Hire Me
            </a>
          </div>
        </div>
      </header>

      {/* ─── MAIN ─── */}
      <main className="mx-auto max-w-6xl px-6 py-16 space-y-32">

        {/* ── 1. HERO ── */}
        <section id="hero" className="pt-8 space-y-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="space-y-6 max-w-3xl"
          >
            <div className="flex items-center gap-2 text-[13px] text-slate-400">
              <MapPin className="w-4 h-4 text-[#22c55e]" />
              Pune, Maharashtra, India
            </div>

            <h1 className="text-5xl sm:text-7xl font-bold text-white tracking-tight leading-[1.05]">
              Prathamesh<br />
              <span className="text-[#22c55e]">Shrimant</span> Mali
            </h1>

            <div className="flex items-center gap-3 flex-wrap">
              <span className="border border-slate-700 bg-slate-900 text-slate-300 text-sm px-3 py-1 rounded-full">
                Frontend Engineer
              </span>
              <span className="border border-slate-700 bg-slate-900 text-slate-300 text-sm px-3 py-1 rounded-full">
                React & Next.js Specialist
              </span>
              <span className="border border-slate-700 bg-slate-900 text-slate-300 text-sm px-3 py-1 rounded-full">
                2+ Years Experience
              </span>
            </div>

            <p className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-2xl">
              I build fast, scalable, and accessible web applications. Passionate about 
              React architecture, performance optimization, and creating products that make 
              a real impact. Currently open to new opportunities.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-white text-black font-semibold text-base px-6 py-3 rounded-md hover:bg-slate-200 transition-colors"
              >
                See My Work
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-slate-700 bg-transparent text-white font-semibold text-base px-6 py-3 rounded-md hover:bg-slate-900 transition-colors"
              >
                Get in Touch
                <Mail className="w-4 h-4" />
              </a>
             <a
  href="https://drive.google.com/file/d/1f3_sIkT-Uu-VDFOxpxfRKZaruOpt43di/view?usp=sharing"
  download
  className="inline-flex items-center gap-2 border border-slate-700 bg-transparent text-slate-300 font-semibold text-base px-6 py-3 rounded-md hover:bg-slate-900 hover:text-white transition-colors"
>
  <Download className="w-4 h-4" />
  Resume
</a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://github.com/PrathameshatGitHub"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                GitHub
              </a>
              <span className="text-slate-700">·</span>
              <a
                href="https://www.linkedin.com/in/prathamesh-mali-27685b236/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <span className="text-slate-700">·</span> 
              <a
                href="mailto:maliprathamesh3162@gmail.com"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                Email
              </a>
            </div>
          </motion.div>

          {/* Quick stats bar  sdf*/}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border border-slate-800/80 bg-slate-900/30 rounded-xl p-6">
            {[
              { label: "Years of Experience", value: "2+" },
              { label: "Projects Shipped", value: "10+" },
              { label: "PageSpeed Score", value: "95+" },
              { label: "Technologies", value: "15+" },
            ].map((stat, i) => (
              <div key={i} className="text-center space-y-1">
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 2. ABOUT ── */}
        <section id="about" className="scroll-mt-24 space-y-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-2"
          >
            <p className="text-sm font-mono text-[#22c55e] uppercase tracking-widest">01 — About Me</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
              Who I Am
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6 text-base sm:text-lg text-slate-400 leading-relaxed"
            >
              <p>
                Hey! I&apos;m <strong className="text-white">Prathamesh Shrimant Mali</strong>, a frontend engineer 
                from Pune, India. I graduated with a B.Tech in Computer Science from a university in Maharashtra 
                in 2024 with a CGPA of 8.0.
              </p>
              <p>
                I fell in love with web development during college — specifically the challenge of making 
                things fast, accessible, and delightful to use. I&apos;ve always been the kind of person who 
                wants to understand how things work under the hood, not just on the surface.
              </p>
              <p>
                Over the past 2+ years, I&apos;ve worked professionally at two companies — <strong className="text-white">Walstar Technology</strong> and 
                currently at <strong className="text-white">Artcode Private Limited</strong> — where I&apos;ve built and shipped 
                production-grade web applications using React, Next.js, and TypeScript.
              </p>
              <p>
                Outside of work, I love building side projects that solve real problems, exploring new tools 
                in the JavaScript ecosystem, and sharing what I learn with the community. My latest project, 
                <strong className="text-white"> Frontend Lab</strong>, is a platform I built to help developers 
                visually understand how React works internally.
              </p>
              <p>
                I&apos;m currently looking for my next challenge — somewhere I can grow, contribute, and build 
                things that matter.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={1}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Personal details card */}
              <div className="border border-slate-800 bg-slate-900/40 rounded-xl p-6 space-y-5">
                <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-3">Personal Details</h3>
                <div className="space-y-3 text-sm text-slate-400">
                  {[
                    { label: "Full Name", value: "Prathamesh Shrimant Mali" },
                    { label: "Location", value: "Pune, Maharashtra, India" },
                    { label: "Education", value: "B.Tech Computer Science, 2024" },
                    { label: "CGPA", value: "8.0 / 10" },
                    { label: "Email", value: "maliprathamesh3162@gmail.com" },
                    { label: "Status", value: "Available for opportunities" },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <span className="text-slate-600 w-28 shrink-0">{item.label}</span>
                      <span className={item.label === "Status" ? "text-[#22c55e] font-medium" : "text-slate-300"}>
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What I'm good at */}
              <div className="border border-slate-800 bg-slate-900/40 rounded-xl p-6 space-y-4">
                <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-3">What I Do Best</h3>
                <div className="space-y-3">
                  {[
                    { icon: <Zap className="w-4 h-4 text-[#22c55e]" />, text: "Frontend performance optimization & Core Web Vitals" },
                    { icon: <Code2 className="w-4 h-4 text-[#22c55e]" />, text: "Building scalable React & Next.js architectures" },
                    { icon: <Layers className="w-4 h-4 text-[#22c55e]" />, text: "Server-side rendering, SSG, and hybrid strategies" },
                    { icon: <Database className="w-4 h-4 text-[#22c55e]" />, text: "Component libraries with TypeScript & strict typing" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-slate-400">
                      {item.icon}
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── 3. PROJECTS ── */}
        <section id="projects" className="scroll-mt-24 space-y-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-2"
          >
            <p className="text-sm font-mono text-[#22c55e] uppercase tracking-widest">02 — Projects</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
              Things I&apos;ve Built
            </h2>
          </motion.div>

          {/* Featured Project — Frontend Lab */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="border border-slate-700 bg-slate-900/30 rounded-2xl overflow-hidden"
          >
            <div className="p-8 sm:p-10 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-2">
                  <span className="inline-block text-xs font-mono font-bold uppercase tracking-widest text-[#22c55e] border border-[#22c55e]/30 bg-[#22c55e]/10 px-3 py-1 rounded-full">
                    Featured Project
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-bold text-white">Frontend Lab</h3>
                </div>
                {/* Big visible live link */}
                <a
                  href="https://frontend-demo-lemon-three.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 inline-flex items-center gap-3 bg-[#22c55e] hover:bg-[#16a34a] text-black font-bold text-base px-6 py-4 rounded-xl transition-colors shadow-lg shadow-[#22c55e]/10"
                >
                  <Globe className="w-5 h-5" />
                  View Live App
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl">
                Frontend Lab is an interactive educational platform I designed and built from scratch 
                to help developers visually understand how React works internally. Instead of reading 
                dense documentation, engineers can watch rendering, state updates, hydration, and caching 
                happen in real time — making complex concepts intuitive and approachable.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    title: "React Rendering Reconciler",
                    desc: "Visual simulation of how React diffs and re-renders component trees, showing exactly which components update and why.",
                  },
                  {
                    title: "React Query Caching Flow",
                    desc: "Interactive diagram showing how React Query fetches, caches, and invalidates data — including stale time and background refetch logic.",
                  },
                  {
                    title: "SSR vs CSR Comparison",
                    desc: "Side-by-side performance breakdown of server-side vs client-side rendering, with timing metrics and waterfall charts.",
                  },
                  {
                    title: "Hydration Overhead Profiler",
                    desc: "Identifies hydration mismatches and visualizes the cost of rehydrating a server-rendered page in the browser.",
                  },
                  {
                    title: "Network Waterfall Viewer",
                    desc: "Simulates real-world network conditions and visualizes request waterfalls to help diagnose fetch bottlenecks.",
                  },
                  {
                    title: "Component Lifecycle Explorer",
                    desc: "Step-through visualization of React component lifecycle phases — mount, update, unmount — with hooks integration.",
                  },
                ].map((feature, i) => (
                  <div key={i} className="border border-slate-800 bg-[#0a0a0a] rounded-xl p-5 space-y-2">
                    <h4 className="font-semibold text-white text-sm">{feature.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-2">
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-mono font-bold">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {["Next.js 15", "TypeScript", "React", "Tailwind CSS", "Framer Motion", "Vercel"].map((tech, i) => (
                      <span key={i} className="text-sm text-slate-300 border border-slate-700 bg-slate-900 px-3 py-1 rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href="https://frontend-demo-lemon-three.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[#22c55e] hover:underline font-medium"
                >
                  frontend-demo-lemon-three.vercel.app
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Other Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Zaal */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="border border-slate-800 bg-slate-900/30 rounded-xl p-6 space-y-4 hover:border-slate-600 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500 block mb-2">SaaS Application</span>
                  <h3 className="text-2xl font-bold text-white">Venue Booking Platform</h3>
                  <p className="text-sm text-slate-500 mt-0.5">Multi-Vendor SaaS Application</p>
                </div>
                <span className="shrink-0 text-xs font-mono font-bold text-[#22c55e] border border-[#22c55e]/30 bg-[#22c55e]/5 px-2 py-1 rounded">
                  Live
                </span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                A full-stack multi-vendor venue booking platform with separate User, Admin, and Vendor 
                role dashboards. Integrated Stripe for payments, Google Calendar API for scheduling, 
                and OpenAI to auto-generate accessibility descriptions for uploaded venue images.
              </p>
              <div className="space-y-2">
                <p className="text-[11px] text-slate-600 uppercase tracking-widest font-mono font-bold">Built with</p>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "TypeScript", "Tailwind CSS", "NextAuth", "Stripe API", "OpenAI API", "PostgreSQL", "Prisma"].map((tech, i) => (
                    <span key={i} className="text-xs text-slate-400 border border-slate-800 bg-[#0a0a0a] px-2 py-0.5 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Artcode */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={1}
              viewport={{ once: true }}
              className="border border-slate-800 bg-slate-900/30 rounded-xl p-6 space-y-4 hover:border-slate-600 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500 block mb-2">Company Website</span>
                  <h3 className="text-2xl font-bold text-white">Corporate Website</h3>
                  <p className="text-sm text-slate-500 mt-0.5">Enterprise Brand Platform</p>
                </div>
                <span className="shrink-0 text-xs font-mono font-bold text-[#22c55e] border border-[#22c55e]/30 bg-[#22c55e]/5 px-2 py-1 rounded">
                  Live
                </span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                Built the full company brand hub for Artcode Private Limited using Next.js with 
                a hybrid SSG + SSR architecture. Achieved sub-second load times, 95+ PageSpeed 
                scores, and a fully responsive component system from scratch.
              </p>
              <div className="space-y-2">
                <p className="text-[11px] text-slate-600 uppercase tracking-widest font-mono font-bold">Built with</p>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "Redux", "Tailwind CSS", "SSG", "Image Optimization", "SEO Schema"].map((tech, i) => (
                    <span key={i} className="text-xs text-slate-400 border border-slate-800 bg-[#0a0a0a] px-2 py-0.5 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── 4. EXPERIENCE ── */}
        <section id="experience" className="scroll-mt-24 space-y-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-2"
          >
            <p className="text-sm font-mono text-[#22c55e] uppercase tracking-widest">03 — Experience</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
              Where I&apos;ve Worked
            </h2>
          </motion.div>

          <div className="space-y-6">
            {/* Artcode */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="border border-slate-800 bg-slate-900/30 rounded-xl p-7 space-y-5"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-[#22c55e]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">React Developer</h3>
                    <p className="text-sm text-slate-400">Artcode Private Limited</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-[#22c55e] border border-[#22c55e]/30 bg-[#22c55e]/5 px-3 py-1 rounded-full font-bold">
                    Current Role
                  </span>
                  <span className="text-sm text-slate-500 font-mono">Mar 2025 – Present</span>
                </div>
              </div>
              <p className="text-base text-slate-400 leading-relaxed">
                Leading frontend development for multiple client projects, focusing on performance, 
                accessibility, and maintainability. Collaborating directly with design and backend teams 
                to deliver high-quality web products on time.
              </p>
              <ul className="space-y-2.5">
                {[
                  "Architected and shipped Next.js applications with server-side rendering and static generation, improving first-load performance by over 40%.",
                  "Diagnosed and resolved Core Web Vitals issues across production sites — achieving LCP under 1.2s and CLS below 0.05 on key pages.",
                  "Built a reusable TypeScript component library used across 5+ projects, reducing development time significantly.",
                  "Integrated OpenAI APIs and AI-assisted tools to accelerate feature delivery and automate repetitive content tasks.",
                  "Mentored junior developers and established frontend code review standards within the team.",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
                    <Check className="w-4 h-4 text-[#22c55e] mt-0.5 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Walstar */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="border border-slate-800 bg-slate-900/30 rounded-xl p-7 space-y-5"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-slate-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Frontend Developer</h3>
                    <p className="text-sm text-slate-400">Walstar Technology</p>
                  </div>
                </div>
                <span className="text-sm text-slate-500 font-mono">Jul 2024 – Feb 2025</span>
              </div>
              <p className="text-base text-slate-400 leading-relaxed">
                My first professional engineering role. I took ownership of client-facing web projects 
                end-to-end — from initial layout to final deployment — and learned how to work in a 
                production environment with real deadlines and real users.
              </p>
              <ul className="space-y-2.5">
                {[
                  "Delivered 10+ custom websites for diverse clients across e-commerce, services, and hospitality sectors.",
                  "Built fully responsive layouts from Figma designs using React and Tailwind CSS with pixel-perfect accuracy.",
                  "Optimized page load times through lazy loading, image compression, and bundle size reduction techniques.",
                  "Collaborated with backend developers to integrate REST APIs and handle asynchronous data flows.",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
                    <Check className="w-4 h-4 text-slate-500 mt-0.5 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Education */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="border border-slate-800 bg-slate-900/30 rounded-xl p-7 space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-slate-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">B.Tech — Computer Science & Engineering</h3>
                    <p className="text-sm text-slate-400">Maharashtra, India</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-white font-mono">CGPA: 8.0</span>
                  <span className="text-sm text-slate-500 font-mono">2020 – 2024</span>
                </div>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                Four years of computer science fundamentals — algorithms, data structures, operating 
                systems, and software engineering. Developed a strong interest in web technologies 
                during my second year and spent most of my free time building projects and exploring 
                the JavaScript ecosystem.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── 5. SKILLS ── */}
        <section id="skills" className="scroll-mt-24 space-y-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-2"
          >
            <p className="text-sm font-mono text-[#22c55e] uppercase tracking-widest">04 — Skills</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
              My Tech Stack
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                category: "Frontend Core",
                icon: <Code2 className="w-5 h-5 text-[#22c55e]" />,
                skills: ["React 18 / Next.js 15", "TypeScript (Strict)", "JavaScript (ES2024)", "HTML5 & CSS3", "Tailwind CSS", "Framer Motion"],
              },
              {
                category: "State & Data",
                icon: <Layers className="w-5 h-5 text-[#22c55e]" />,
                skills: ["Redux Toolkit", "Zustand", "React Query / TanStack", "Context API", "Jotai", "SWR"],
              },
              {
                category: "Architecture",
                icon: <Zap className="w-5 h-5 text-[#22c55e]" />,
                skills: ["SSR / SSG / ISR", "Performance Optimization", "Core Web Vitals", "SEO & Structured Data", "Accessibility (a11y)", "Code Splitting"],
              },
              {
                category: "Backend & APIs",
                icon: <Database className="w-5 h-5 text-[#22c55e]" />,
                skills: ["Node.js & Express", "PostgreSQL", "Prisma ORM", "REST APIs", "NextAuth.js", "Stripe Integration"],
              },
              {
                category: "AI & Integrations",
                icon: <Zap className="w-5 h-5 text-[#22c55e]" />,
                skills: ["OpenAI API", "Google Calendar API", "Vercel AI SDK", "AI-Assisted Workflows", "GitHub Copilot"],
              },
              {
                category: "Tools & Workflow",
                icon: <History className="w-5 h-5 text-[#22c55e]" />,
                skills: ["Git & GitHub", "CI/CD Pipelines", "Vercel & Netlify", "Figma", "VS Code", "Jira / Linear"],
              },
            ].map((group, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={i * 0.5}
                viewport={{ once: true }}
                className="border border-slate-800 bg-slate-900/30 rounded-xl p-6 space-y-4 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center gap-3">
                  {group.icon}
                  <h3 className="font-bold text-white text-base">{group.category}</h3>
                </div>
                <ul className="space-y-2">
                  {group.skills.map((skill, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-600 shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── 6. EASTER EGG CONSOLE ── */}
        <section className="space-y-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <Terminal className="w-5 h-5 text-[#22c55e]" />
            <p className="text-sm font-mono text-[#22c55e] uppercase tracking-widest font-bold">
              For Developers — Interactive Console
            </p>
          </motion.div>
          <p className="text-base text-slate-400">
            If you&apos;re a developer, try querying this portfolio from the terminal below. 
            Type <code className="bg-slate-900 border border-slate-800 text-[#22c55e] px-1.5 py-0.5 rounded text-sm font-mono">help</code> to see available commands.
          </p>
          <SimulatedConsole />
        </section>

        {/* ── 7. CONTACT ── */}
        <section id="contact" className="scroll-mt-24 space-y-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-2"
          >
            <p className="text-sm font-mono text-[#22c55e] uppercase tracking-widest">05 — Contact</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
              Let&apos;s Work Together
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left — Message */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
                I&apos;m actively looking for my next role as a frontend engineer. If you have an 
                opportunity that might be a good fit, want to collaborate on a project, or just 
                want to say hi — I&apos;d love to hear from you.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 border border-slate-800 bg-slate-900/30 rounded-xl hover:border-slate-600 transition-colors">
                  <Mail className="w-5 h-5 text-[#22c55e] shrink-0" />
                  <div>
                    <p className="text-xs text-slate-500 font-mono uppercase tracking-wider">Email</p>
                    <a href="mailto:maliprathamesh3162@gmail.com" className="text-white hover:text-[#22c55e] transition-colors font-medium">
                      maliprathamesh3162@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 border border-slate-800 bg-slate-900/30 rounded-xl hover:border-slate-600 transition-colors">
                  <svg className="w-5 h-5 fill-current text-[#22c55e] shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <div>
                    <p className="text-xs text-slate-500 font-mono uppercase tracking-wider">LinkedIn</p>
                    <a href="https://www.linkedin.com/in/prathamesh-mali-27685b236/" target="_blank" rel="noreferrer" className="text-white hover:text-[#22c55e] transition-colors font-medium">
                      https://www.linkedin.com/in/prathamesh-mali-27685b236/
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 border border-slate-800 bg-slate-900/30 rounded-xl hover:border-slate-600 transition-colors">
                  <svg className="w-5 h-5 fill-current text-[#22c55e] shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                  <div>
                    <p className="text-xs text-slate-500 font-mono uppercase tracking-wider">GitHub</p>
                    <a href="https://github.com/PrathameshatGitHub" target="_blank" rel="noreferrer" className="text-white hover:text-[#22c55e] transition-colors font-medium">
                      https://github.com/PrathameshatGitHub
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right — Form */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={1}
              viewport={{ once: true }}
            >
              {contactStatus === "sent" ? (
                <div className="border border-[#22c55e]/20 bg-[#22c55e]/5 p-10 rounded-xl text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/20 flex items-center justify-center mx-auto">
                    <Check className="w-7 h-7 text-[#22c55e]" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Message Sent!</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Thanks for reaching out. I&apos;ll get back to you as soon as I can.
                  </p>
                  <button
                    onClick={() => setContactStatus("idle")}
                    className="text-sm text-[#22c55e] hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300 block">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        disabled={contactStatus === "sending"}
                        placeholder="John Doe"
                        className="w-full bg-slate-900 border border-slate-700 focus:border-[#22c55e] rounded-lg px-4 py-3 text-sm text-slate-200 focus:outline-none placeholder:text-slate-600 transition-colors disabled:opacity-50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300 block">Your Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        disabled={contactStatus === "sending"}
                        placeholder="john@example.com"
                        className="w-full bg-slate-900 border border-slate-700 focus:border-[#22c55e] rounded-lg px-4 py-3 text-sm text-slate-200 focus:outline-none placeholder:text-slate-600 transition-colors disabled:opacity-50"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300 block">Message</label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      disabled={contactStatus === "sending"}
                      placeholder="Tell me about your project, opportunity, or just say hello..."
                      className="w-full bg-slate-900 border border-slate-700 focus:border-[#22c55e] rounded-lg px-4 py-3 text-sm text-slate-200 focus:outline-none placeholder:text-slate-600 transition-colors disabled:opacity-50 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={contactStatus === "sending"}
                    className="w-full flex items-center justify-center gap-2 bg-[#22c55e] hover:bg-[#16a34a] text-black font-bold text-base py-3.5 px-6 rounded-lg transition-colors disabled:opacity-50"
                  >
                    {contactStatus === "sending" ? "Sending..." : "Send Message"}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </section>

      </main>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-slate-900 bg-[#070707] py-10 mt-16">
        <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Prathamesh Shrimant Mali. Built with Next.js 15 & Tailwind CSS.</p>
          <div className="flex items-center gap-6">
            <a href="https://github.com/PrathameshatGitHub" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/prathamesh-mali-27685b236/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="mailto:maliprathamesh3162@gmail.com" className="hover:text-white transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
