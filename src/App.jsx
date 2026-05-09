import React, { useState, useEffect } from 'react';
import cctLogo from './assets/cct-logo.png';
import { 
  BarChart, Bar, ResponsiveContainer, Tooltip, XAxis, YAxis, LineChart, Line, AreaChart, Area
} from 'recharts';
import { 
  ArrowRight, CheckCircle2, Target, FileText, X, 
  Share2, Settings, ChevronDown, Menu, Globe, Box, Layers, 
  Mail, Phone, MapPin, Search, Clock, ShieldCheck, Send,
  Cloud, Database, Cpu, Zap, LayoutGrid, ChevronRight, Link, TrendingUp,
  Wallet, Receipt, ShoppingCart, UserCheck, Activity, Shield, Terminal, Sparkles, ArrowLeft, Workflow, Network, ClipboardCheck
} from 'lucide-react';
// --- DATA ---
const INSIGHTS_ARTICLES = [
  {
    id: 1,
    category: "SAP CPQ Deep Dive",
    title: "Mastering Python Scripting in SAP CPQ",
    excerpt: "Moving beyond basic IronPython scripts to high-performance Quote-Level orchestration and API integration.",
    readTime: "14 min read",
    author: "Elena Vance, Lead Architect",
    tags: ["SAP CPQ", "Python", "Performance"],
    date: "Oct 12, 2023",
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-relaxed">In the enterprise landscape, SAP CPQ is often the 'brain' of the sales organization. However, as configuration logic grows, Python scripting performance can become a bottleneck. We advocate for a <strong>Clean Scripting</strong> approach.</p>
        <h4 className="text-2xl font-black mt-8">The IronPython Performance Gap</h4>
        <p>The transition from IronPython 2.7 to modern environments requires a shift in how we handle global variables and product-level events. Heavy 'on-load' scripts should be refactored into 'on-add-to-cart' logic to prevent UI lag.</p>
        <div className="bg-slate-900 rounded-2xl p-6 my-8 overflow-x-auto">
          <code className="text-blue-400 font-mono text-sm">
            # High-Performance Logic Check<br/>
            if Quote.IsDirty and User.IsAdmin:<br/>
            &nbsp;&nbsp;Log.Info("Starting optimization...")<br/>
            &nbsp;&nbsp;# Avoid heavy lookups inside loops<br/>
            &nbsp;&nbsp;items = Quote.MainItems
          </code>
        </div>
        <h4 className="text-2xl font-black mt-8">Architectural Strategy</h4>
        <ul className="list-disc pl-6 space-y-3">
          <li>Utilize <strong>Global Scripts</strong> for cross-product logic.</li>
          <li>Implement <strong>Custom Tables</strong> for large attribute datasets instead of hardcoding JSON strings.</li>
          <li>Minimize <strong>REST API Calls</strong> within the configuration engine.</li>
        </ul>
      </div>
    )
  },
  {
    id: 4,
    category: "Integration",
    title: "SAP CPQ & S/4HANA: The AVC Bridge",
    excerpt: "How to successfully map complex CPQ attributes to S/4HANA Advanced Variant Configuration characterstics.",
    readTime: "18 min read",
    author: "Marcus Thorne, CTO",
    tags: ["S/4HANA", "AVC", "Integration"],
    date: "Dec 15, 2023",
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-relaxed">The most common failure point in Lead-to-Cash projects is the 'Translation Gap' between Sales logic (CPQ) and Production logic (AVC).</p>
        <div className="grid md:grid-cols-2 gap-4 my-8">
          <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl">
            <p className="font-black text-blue-600 mb-2">CPQ Side</p>
            <p className="text-xs text-slate-600">Focus: Customer Experience, Bundling, Discounting, Eligibility.</p>
          </div>
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
            <p className="font-black text-slate-900 mb-2">AVC Side</p>
            <p className="text-xs text-slate-600">Focus: Technical Constraints, BOM Resolution, Routing, Production Feasibility.</p>
          </div>
        </div>
        <p>Success requires a <strong>Master Data-First</strong> mindset. Attributes in CPQ must be mapped 1:1 with Characteristics (CT04) in SAP ERP to ensure the Sales Order (VA01) can resolve the Super BOM instantly upon interface.</p>
      </div>
    )
  },
  {
    id: 2,
    category: "Technical Strategy",
    title: "Headless CPQ with SAP BTP",
    excerpt: "Building custom configuration front-ends on BTP while leveraging the SAP CPQ core engine via REST APIs.",
    readTime: "12 min read",
    author: "Sarah Jenkins, CPQ Specialist",
    tags: ["BTP", "Headless", "UI5"],
    date: "Nov 05, 2023",
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-relaxed">Modern commerce requires more than a standard portal. <strong>Headless CPQ</strong> allows you to embed configuration logic into native mobile apps, partner portals, and IoT devices.</p>
        <div className="flex items-center gap-4 bg-slate-50 p-6 rounded-2xl border border-dashed border-slate-300">
          <div className="flex flex-col items-center"><Box className="text-blue-600"/><span className="text-[10px] font-bold mt-1">CPQ Engine</span></div>
          <ArrowRight className="text-slate-300"/>
          <div className="flex flex-col items-center"><Link className="text-blue-600"/><span className="text-[10px] font-bold mt-1">BTP API Mgmt</span></div>
          <ArrowRight className="text-slate-300"/>
          <div className="flex flex-col items-center"><LayoutGrid className="text-blue-600"/><span className="text-[10px] font-bold mt-1">React/UI5 App</span></div>
        </div>
        <h4 className="text-2xl font-black mt-8">Key Advantages</h4>
        <ul className="list-disc pl-6 space-y-3">
          <li>Custom Brand Experience: Fully control the configuration UI.</li>
          <li>Omnichannel Reach: Use the same logic for Sales and End-Customers.</li>
          <li>Performance: Decouple the CPQ administrative UI from the end-user interaction.</li>
        </ul>
      </div>
    )
  }
];

const TREND_RADAR = [
  { topic: "S/4HANA AVC Adoption", status: "Critical", level: 95 },
  { topic: "Classic VC to AVC Migration", status: "Critical", level: 90 },
  { topic: "End-to-End Quote-to-Cash (CPQ + S/4)", status: "Critical", level: 88 },
  { topic: "SAP CPQ Advanced Pricing & AI", status: "Surging", level: 75 },
  { topic: "Event-Driven Integration (BTP Event Mesh)", status: "Surging", level: 70 }
];

const CASE_STUDIES = [
  {
    id: 4,
    client: "Precision Manufacturing",
    tag: "SAP CPQ + CRM + ERP",
    challenge: "Inconsistent configurations between sales and production causing high return rates.",
    solution: "End-to-end integration mapping CRM opportunities to SAP CPQ with automated Sales Order creation in S/4HANA.",
    results: [
      { label: "Configuration Accuracy", value: "99.9%" },
      { label: "Sales Cycle", value: "-35%" },
      { label: "Data Integrity", value: "100%" }
    ]
  },
  {
    id: 1,
    client: "Global Industrial Corp",
    tag: "SAP S/4HANA AVC",
    challenge: "Manual quoting for custom pumps took 3 weeks with 15% error rates.",
    solution: "Implemented a unified constraint net in S/4HANA AVC with real-time MRP integration.",
    results: [
      { label: "Quote Speed", value: "85% Faster" },
      { label: "Error Rate", value: "< 1%" },
      { label: "Order Volume", value: "+22% YoY" }
    ]
  },
  {
    id: 2,
    client: "TechFlow Systems",
    tag: "Salesforce Revenue Cloud",
    challenge: "Revenue leakage across 12 countries due to uncoordinated pricing models.",
    solution: "Global Lead-to-Cash automation using CPQ Product Rules and automated billing schedules.",
    results: [
      { label: "Revenue Leakage", value: "-92%" },
      { label: "Billing Cycle", value: "3 Days" },
      { label: "ARR Growth", value: "$4.5M" }
    ]
  },
  {
    id: 3,
    client: "Aerospace Dynamics",
    tag: "BTP & CPI",
    challenge: "Siloed data between legacy PLM and modern ERP caused massive production delays.",
    solution: "Event-driven orchestration using SAP BTP Integration Suite for real-time BOM sync.",
    results: [
      { label: "Sync Latency", value: "Sub-second" },
      { label: "Downtime", value: "-40%" },
      { label: "ROI achieved", value: "7 Months" }
    ]
  }
];

const L2C_STAGES = [
  {
    id: "Lead",
    title: "Demand Generation",
    platform: "SAP Sales Cloud C4C CCV2 / Salesforce",
    icon: <Target size={24} />,
    color: "bg-rose-500",
    description: "Capturing customer intent and qualifying opportunities with rich behavioral data to ensure sales teams focus on the right deals.",
    deliverables: ["Account Profiling", "Opportunity Mapping", "Guided Lead Scoring"]
  },
  {
    id: "Quote",
    title: "Configuration & Pricing",
    platform: "SAP CPQ / Salesforce CPQ",
    icon: <FileText size={24} />,
    color: "bg-blue-600",
    description: "Transforming complex product rules into valid, error-free quotes. Automated approvals ensure margin protection at scale.",
    deliverables: ["Visual Configuration", "Dynamic Discounting", "Professional Doc Gen"]
  },
  {
    id: "Order",
    title: "Contract & Order",
    platform: "SAP S/4HANA",
    icon: <ShoppingCart size={24} />,
    color: "bg-amber-500",
    description: "Seamlessly pushing accepted quotes into the ERP for fulfillment. BOMs and routings are resolved instantly for production.",
    deliverables: ["Sales Order Sync", "BOM Resolution", "Credit Limit Checks"]
  },
  {
    id: "Cash",
    title: "Revenue Management",
    platform: "SAP Billing / BRIM",
    icon: <Wallet size={24} />,
    color: "bg-emerald-600",
    description: "Automated invoicing, payment collection, and revenue recognition. Providing 360-degree financial visibility of the customer lifecycle.",
    deliverables: ["Automated Invoicing", "Revenue Recognition", "Cash Application"]
  }
];

const METHODOLOGY_STEPS = [
  {
    id: "01",
    tag: "Discovery",
    title: "The Clean Core Audit",
    desc: "We analyze your legacy customizations and technical debt to define a 'Clean Core' strategy. This phase ensures your S/4HANA or Salesforce environment remains upgrade-stable and performant.",
    icon: <Activity className="text-cyan-400" />,
    gradient: "from-cyan-500/20 to-transparent",
    border: "border-cyan-500/30"
  },
  {
    id: "02",
    tag: "Architecture",
    title: "System Orchestration",
    desc: "Designing the event-driven middleware (SAP BTP / CPI) that bridges your CRM and ERP. We map every Lead-to-Cash touchpoint to eliminate data silos and latency.",
    icon: <Layers className="text-blue-400" />,
    gradient: "from-blue-500/20 to-transparent",
    border: "border-blue-500/30"
  },
  {
    id: "03",
    tag: "Engineering",
    title: "Configuration Logic",
    desc: "Developing high-performance variant configuration models (AVC) and CPQ scripting. Our logic is built for speed, handling millions of attribute permutations in sub-second response times.",
    icon: <Terminal className="text-indigo-400" />,
    gradient: "from-indigo-500/20 to-transparent",
    border: "border-indigo-500/30"
  },
  {
    id: "04",
    tag: "Security",
    title: "Resilient Scaling",
    desc: "Implementing enterprise-grade security protocols and automated regression testing. We ensure your configuration and pricing logic scales globally without security compromises.",
    icon: <Shield className="text-violet-400" />,
    gradient: "from-violet-500/20 to-transparent",
    border: "border-violet-500/30"
  }
];

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'cases', label: 'Case Studies' },
  { id: 'l2c', label: 'L2C Journey' },
  { id: 'process', label: 'Methodology' },
  { id: 'insights', label: 'Cloud Insights' },
];

const EXPERTISE_DATA = {
  avc: {
    title: 'SAP S/4HANA AVC',
    subtitle: 'Advanced Variant Configuration',
    description: 'The backbone of modern industrial manufacturing logic, providing high-performance configuration within the digital core.',
    leftCard: {
      icon: <Box size={32} />,
      title: 'High-Level Modeling',
      desc: 'Executing complex constraint-based logic directly within S/4HANA to eliminate data redundancy.',
      bullets: ['Constraint Net Optimization', 'Syntax-driven Logic', 'Performance-tuned Engines']
    },
    rightCard: {
      icon: <Cpu size={32} />,
      title: 'Back-end Integration',
      desc: 'Seamlessly connecting product models to production orders and material requirements planning (MRP).',
      bullets: ['Low-level Configuration', 'Super BOM Resolution', 'Routing Automation']
    }
  },
  sf: {
    title: 'Salesforce Revenue Cloud',
    subtitle: 'Lead-to-Cash Automation',
    description: 'Streamlining the quote-to-cash process by connecting CRM speed with enterprise-grade billing logic.',
    leftCard: {
      icon: <Target size={32} />,
      title: 'Guided Selling',
      desc: 'Empowering sales teams with intelligent guardrails and automated discount approvals.',
      bullets: ['CPQ Product Rules', 'Dynamic Pricing Tables', 'Contract Lifecycle Mgmt']
    },
    rightCard: {
      icon: <Layers size={32} />,
      title: 'Revenue Lifecycle',
      desc: 'Bridging the gap between a signed deal and recognized revenue through automated billing.',
      bullets: ['Subscription Management', 'Usage-based Billing', 'Revenue Recognition']
    }
  },
  cpq: {
    title: 'SAP CPQ Integration',
    subtitle: 'Complex Quoting Logic',
    description: 'Scalable cloud quoting that handles millions of attribute combinations without compromising on speed.',
    leftCard: {
      icon: <FileText size={32} />,
      title: 'Quoting Velocity',
      desc: 'Generating complex technical quotes in seconds using cloud-native configuration engines.',
      bullets: ['Python-based Scripting', 'Multi-level Configuration', 'Document Generation']
    },
    rightCard: {
      icon: <Zap size={32} />,
      title: 'API First approach',
      desc: 'Extending quoting capabilities to external portals and commerce sites via headless APIs.',
      bullets: ['RESTful Orchestration', 'Commerce Cloud Sync', 'Partner Portal Access']
    }
  },
  btp: {
    title: 'BTP & CPI Orchestration',
    subtitle: 'Enterprise Middleware',
    description: 'The "glue" that connects your disparate cloud systems into a single, cohesive business process.',
    leftCard: {
      icon: <Share2 size={32} />,
      title: 'Integration Suite',
      desc: 'Managing the traffic between SAP and non-SAP environments with industrial reliability.',
      bullets: ['Event-driven Architecture', 'Pre-packaged iFlows', 'Protocol Transformation']
    },
    rightCard: {
      icon: <Database size={32} />,
      title: 'Extensibility',
      desc: 'Building clean-core side-by-side extensions to keep your digital core upgrade-stable.',
      bullets: ['AppGyver No-code', 'CAP Model Services', 'HANA Cloud persistence']
    }
  }
};

const EXPERTISE_ITEMS = [
  { id: 'avc', title: 'SAP S/4HANA AVC', icon: <Box size={16}/>, desc: 'Advanced Variant Configuration' },
  { id: 'sf', title: 'Salesforce Revenue Cloud', icon: <Target size={16}/>, desc: 'Lead-to-Cash automation' },
  { id: 'cpq', title: 'SAP CPQ Integration', icon: <FileText size={16}/>, desc: 'Complex quoting logic' },
  { id: 'btp', title: 'BTP & CPI Orchestration', icon: <Share2 size={16}/>, desc: 'Enterprise middleware' }
];

const PERFORMANCE_CHART = [
  { name: 'Legacy', value: 45, fill: '#cbd5e1' },
  { name: 'CCT Method', value: 92, fill: '#2563eb' },
];

// --- HELPER COMPONENTS ---

const Logo = ({ className }) => (
  <img src={cctLogo} alt="CCT logo" className={`object-contain ${className || ''}`} />
);

// --- MAIN APP ---

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [capabilityType, setCapabilityType] = useState('avc');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expertiseOpen, setExpertiseOpen] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [contactError, setContactError] = useState('');
  
  // Article Reader State
  const [readingArticle, setReadingArticle] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!readingArticle) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activePage, capabilityType, readingArticle]);

  const navigateTo = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    setExpertiseOpen(false);
    setReadingArticle(null);
  };

  const selectCapability = (type) => {
    setCapabilityType(type);
    setActivePage('architecture');
    setMobileMenuOpen(false);
    setExpertiseOpen(false);
    setReadingArticle(null);
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setContactError('');

    try {
      const endpoint = import.meta.env.VITE_BRIEFING_SCRIPT_URL;

      if (!endpoint) {
        throw new Error('Missing VITE_BRIEFING_SCRIPT_URL');
      }

      await fetch(endpoint, {
        method: 'POST',
        mode: 'no-cors',
        body: new FormData(e.currentTarget),
      });

      setFormSubmitted(true);
      e.currentTarget.reset();
      setTimeout(() => {
        setFormSubmitted(false);
        setShowContactModal(false);
      }, 3000);
    } catch (err) {
      console.error('Briefing submit error', err);
      setContactError('There was a problem sending your briefing. Please try again in a moment.');
    }
  };

  // --- VIEWS ---

  const HomeView = () => (
    <>
      <Hero onCaseClick={() => navigateTo('cases')} onContactClick={() => setShowContactModal(true)} />
        <IntegrationEcosystem />
        <Capabilities />
        <AVCMasteryView />
      {/* <EnterpriseSystems onCapSelect={selectCapability} /> */}
      {/* <PerformanceSection /> */}
      {/* <ProcessTeaser onMoreClick={() => navigateTo('process')} /> */}
    </>
  );

  const ReaderMode = () => {
    if (!readingArticle) return null;
    return (
      <div className="fixed inset-0 z-[1000] bg-white overflow-y-auto animate-in fade-in duration-300">
        <div className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-slate-100 z-10 px-6 py-4">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <button 
              onClick={() => setReadingArticle(null)}
              className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft size={14}/> Back to Insights
            </button>
            <div className="flex items-center gap-4">
              <Share2 size={16} className="text-slate-400 cursor-pointer hover:text-blue-600" />
              <button onClick={() => setReadingArticle(null)} className="p-1 hover:bg-slate-100 rounded-full transition-colors"><X size={20}/></button>
            </div>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-6 pt-16 pb-32">
          <div className="mb-12">
            <span className="px-4 py-1 bg-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-widest rounded-full">{readingArticle.category}</span>
            <h1 className="text-5xl font-black text-slate-900 mt-6 leading-tight tracking-tight">{readingArticle.title}</h1>
            <div className="flex items-center gap-6 mt-8 pb-8 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white"><UserCheck size={18}/></div>
                <div>
                  <p className="text-xs font-black text-slate-900">{readingArticle.author}</p>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{readingArticle.date}</p>
                </div>
              </div>
              <div className="h-6 w-px bg-slate-200" />
              <div className="flex items-center gap-2 text-slate-400 text-xs font-bold">
                <Clock size={14}/> {readingArticle.readTime}
              </div>
            </div>
          </div>

          <div className="prose prose-slate max-w-none text-slate-700 font-medium">
            {readingArticle.content}
          </div>

          <div className="mt-20 p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100">
            <h5 className="text-xl font-black text-slate-900 mb-4">Interested in implementing this?</h5>
            <p className="text-slate-600 font-medium mb-8">Our architects have implemented similar strategies for Fortune 500 manufacturers. Get a custom technical assessment today.</p>
            <button onClick={() => setShowContactModal(true)} className="px-8 py-4 bg-blue-600 text-white font-black rounded-2xl text-[10px] uppercase tracking-widest hover:bg-blue-700 transition-colors">
              Schedule Architecture Briefing
            </button>
          </div>
        </article>
      </div>
    );
  };

  const InsightsView = () => (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-baseline justify-between gap-4 mb-16">
          <div>
            <h2 className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4">Intellectual Property</h2>
            <h1 className="text-5xl font-black text-slate-900 tracking-tight">Cloud Insights</h1>
          </div>
          <p className="text-slate-500 font-medium max-w-md">Our architects share technical breakthroughs, architectural blueprints, and emerging trends in the Lead-to-Cash ecosystem.</p>
        </div>

        {/* Featured Radar */}
        <div className="grid lg:grid-cols-12 gap-12 mb-24">
          <div className="lg:col-span-8 grid gap-8">
            {INSIGHTS_ARTICLES.map((article) => (
              <div key={article.id} className="group bg-slate-50 border border-slate-100 p-8 rounded-[2.5rem] hover:bg-white hover:shadow-2xl transition-all duration-500">
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span className="px-4 py-1 bg-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-widest rounded-full">{article.category}</span>
                  <span className="text-slate-400 text-[10px] font-bold">{article.date}</span>
                  <div className="h-4 w-px bg-slate-200" />
                  <span className="text-slate-400 text-[10px] font-bold flex items-center gap-1"><Clock size={12}/> {article.readTime}</span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{article.title}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed font-medium">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center"><UserCheck size={14} className="text-slate-500" /></div>
                    <span className="text-xs font-bold text-slate-900">{article.author}</span>
                  </div>
                  <button 
                    onClick={() => setReadingArticle(article)}
                    className="text-blue-600 font-black text-[10px] uppercase tracking-widest flex items-center gap-2 group-hover:translate-x-2 transition-transform"
                  >
                    Read Article <ArrowRight size={14}/>
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="lg:col-span-4">
            <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 sticky top-32">
              <div className="flex items-center gap-3 mb-10">
                <TrendingUp size={24} className="text-blue-400" />
                <h4 className="text-xl font-black">Trend Radar</h4>
              </div>
              <div className="space-y-8">
                {TREND_RADAR.map((trend) => (
                  <div key={trend.topic}>
                    <div className="flex justify-between items-center mb-3">
                      <p className="text-sm font-bold">{trend.topic}</p>
                      <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">{trend.status}</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-blue-500 rounded-full" 
                        style={{ width: `${trend.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/10">
                <Sparkles size={20} className="text-amber-400 mb-4" />
                <p className="text-xs font-bold text-slate-400 leading-relaxed mb-4">
                  "Modern SAP landscapes demand real-time integration, intelligent pricing, and reusable configuration models—driving the evolution of CPQ and AVC together."
                </p>
                <p className="text-[10px] font-black uppercase tracking-widest text-white">— Architect's Note</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const MethodologyView = () => (
    <div className="bg-slate-950 text-white min-h-screen">
      <div className="pt-32 pb-24 max-w-7xl mx-auto px-6">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-3xl">
            <h2 className="text-blue-400 font-black uppercase tracking-[0.4em] text-xs mb-6">Execution Framework</h2>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-none tracking-tighter">
              The CCT <span className="text-slate-500">Methodology.</span>
            </h1>
            <p className="text-xl text-slate-400 font-medium leading-relaxed">
              We don't just implement software. We architect end-to-end ecosystems where data integrity and quote-to-cash velocity are the primary objectives.
            </p>
          </div>
          <div className="flex items-center gap-4 bg-white/5 p-4 rounded-3xl border border-white/10">
            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center"><Terminal size={24}/></div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">System Status</p>
              <p className="text-sm font-bold">All Engines Nominal</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl">
          {METHODOLOGY_STEPS.map((step, idx) => (
            <div key={idx} className={`group relative p-12 bg-slate-950 hover:bg-slate-900 transition-all duration-500`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <div className={`w-14 h-14 rounded-2xl bg-white/5 border ${step.border} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    {step.icon}
                  </div>
                  <span className="text-6xl font-black text-white/5 group-hover:text-white/10 transition-colors uppercase italic">{step.id}</span>
                </div>
                
                <h3 className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em] mb-4">{step.tag}</h3>
                <h4 className="text-3xl font-black mb-6 text-white group-hover:translate-x-2 transition-transform">{step.title}</h4>
                <p className="text-slate-400 text-lg leading-relaxed font-medium mb-10">
                  {step.desc}
                </p>
                
                <div className="flex items-center gap-2 text-white/40 group-hover:text-white transition-colors">
                  <span className="text-[10px] font-black uppercase tracking-widest">Architectural Milestone</span>
                  <div className="h-px flex-1 bg-white/10" />
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 rounded-[3rem] bg-blue-600 text-white flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <h5 className="text-3xl font-black mb-4">Ready for a Technical Deep-Dive?</h5>
            <p className="text-blue-100 font-medium opacity-80">Our architects are ready to review your existing Lead-to-Cash landscape and provide a preliminary gap analysis.</p>
          </div>
          <button onClick={() => setShowContactModal(true)} className="px-12 py-5 bg-white text-blue-600 font-black rounded-3xl text-sm uppercase tracking-widest hover:scale-105 transition-transform shadow-xl">
            Schedule Briefing
          </button>
        </div>
      </div>
    </div>
  );

  const Capabilities = () => {
  const capabilitiesData = [
    {
      icon: <Settings className="text-blue-600" />,
      title: "SAP CPQ Engineering & Optimization",
      desc: "We build systems that handle real-world enterprise complexity at scale.",
      points: ["Complex product configuration", "Advanced pricing logic", "Quote automation workflows", "Approval hierarchies", "Performance tuning"],
      outcome: "Faster quoting, higher accuracy, and scalable CPQ performance."
    },
    {
      icon: <Workflow className="text-indigo-600" />,
      title: "SAP Sales Cloud → CPQ Integration",
      desc: "We enable seamless opportunity-to-quote execution.",
      points: ["Opportunity data synchronization", "Quote triggers from Sales Cloud", "Bidirectional data flow", "Sales workflow automation"],
      outcome: "Sales teams generate accurate quotes directly from CRM without friction."
    },
    {
      icon: <TrendingUp className="text-emerald-600" />,
      title: "SAP S/4HANA Pricing Orchestration",
      desc: "We ensure one source of truth for pricing across systems.",
      points: ["Real-time pricing calls (CPQ to S/4)", "Pricing condition mapping", "Complex discount structures", "Tax & regional logic", "Validation frameworks"],
      outcome: "Zero pricing mismatch between quote and order."
    },
    {
      icon: <Cpu className="text-purple-600" />,
      title: "SAP Variant Configuration (VC) Mastery",
      desc: "High-performance configuration models for complex manufacturing.",
      points: ["Class & characteristic modeling", "Dependency logic (Constraints)", "Multi-level BOM configuration", "VC performance optimization", "CPQ + VC hybrid architecture"],
      outcome: "Accurate product configurations with reduced system latency."
    },
    {
      icon: <Network className="text-blue-500" />,
      title: "Integration Architecture (CPI / APIs)",
      desc: "We build resilient, enterprise-grade SAP integration layers.",
      points: ["SAP CPI iFlow design", "API-first architecture", "Event-driven patterns", "Error handling & monitoring", "Secure data exchange"],
      outcome: "Reliable, scalable, and maintainable integrations."
    },
    {
      icon: <ClipboardCheck className="text-orange-600" />,
      title: "Quote-to-Cash Process Engineering",
      desc: "Designing end-to-end revenue workflows beyond systems.",
      points: ["Lead → Opportunity → Order flow", "Approval & exception handling", "Sales operations workflows", "Revenue leakage points", "Process automation"],
      outcome: "A streamlined revenue engine—not disconnected systems."
    }
  ];

  return (
    <section id="capabilities" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-sm font-black text-blue-600 uppercase tracking-widest mb-4">Deep SAP Revenue Architecture</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Capabilities</h3>
          <p className="text-xl text-slate-600 text-center">
            We don't offer generic SAP consulting. We bring <span className="text-slate-900 font-bold">specialized, system-level capabilities</span> across the entire Quote-to-Cash stack.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilitiesData.map((item, i) => (
            <div key={i} className="group flex flex-col bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className="p-3 bg-white rounded-2xl w-fit mb-6 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h4>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">{item.desc}</p>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {item.points.map((pt, idx) => (
                  <li key={idx} className="flex items-start text-xs font-medium text-slate-500">
                    <CheckCircle2 size={14} className="text-blue-500 mr-2 mt-0.5 shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-slate-200">
                <div className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-2">Outcome</div>
                <div className="text-sm font-bold text-slate-800 leading-snug">{item.outcome}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  };

  const AVCMasteryView = () => {
    return (
      <section id="avc" className="py-24 bg-slate-900 text-white overflow-hidden relative">
          <div className="absolute right-0 top-0 w-1/2 h-full bg-blue-600/10 -skew-x-12 translate-x-1/4"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="max-w-3xl mb-16">
              <h2 className="text-sm font-black text-blue-400 uppercase tracking-widest mb-4 text-left">Foundation</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-6 italic text-blue-100 text-left">SAP AVC Mastery.</h3>
              <p className="text-slate-400 text-lg text-left">Modernize your configuration architecture. We lead enterprise transitions from legacy VC to high-velocity, S/4HANA Advanced Variant Configuration.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: <Cpu />, title: "VC to AVC Migration", tag: "Process Optimization" },
                { icon: <Database />, title: "Master Data Harmonization", tag: "System Integrity" },
                { icon: <Layers />, title: "Integration Architecture", tag: "BTP Hub" }
              ].map((item, i) => (
                <div key={i} className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 backdrop-blur-sm hover:border-blue-500/50 transition-colors cursor-pointer group">
                  <div className="p-3 bg-blue-600/20 rounded-xl text-blue-400 w-fit mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">{item.icon}</div>
                  <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                  <div className="text-xs font-bold text-blue-400 uppercase tracking-widest">{item.tag}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
    );
  }

  const L2CExplorerView = () => {
    const [activeStage, setActiveStage] = useState(L2C_STAGES[0]);
    return (
      <section id="process" className="pt-32 pb-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              The Integrated Lead-to-Cash Journey
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
              Stop treating sales and finance as silos. We engineer a single, fluid data stream from the first touchpoint to the final bank deposit.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3 relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-100 hidden lg:block"></div>
              <div className="space-y-6 relative">
                {L2C_STAGES.map((stage) => (
                  <button
                    key={stage.id}
                    onClick={() => setActiveStage(stage)}
                    className={`w-full flex items-start text-left p-4 rounded-2xl transition-all ${
                      activeStage.id === stage.id
                        ? 'bg-slate-50 translate-x-2'
                        : 'hover:bg-slate-50/50 grayscale opacity-60'
                    }`}
                  >
                    <div
                      className={`w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center text-white shadow-lg ${stage.color} z-10`}
                    >
                      {stage.icon}
                    </div>
                    <div className="ml-5">
                      <h4 className="font-bold text-slate-900 text-lg">{stage.title}</h4>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stage.platform}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:w-2/3">
              <div className="bg-slate-50 rounded-3xl p-8 md:p-12 min-h-[500px] border border-slate-100 relative shadow-inner">
                <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className={`px-4 py-1 rounded-full text-white text-xs font-black uppercase tracking-tighter ${activeStage.color}`}>
                      Current Phase: {activeStage.id}
                    </span>
                    <span className="px-4 py-1 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-bold">
                      System: {activeStage.platform}
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">{activeStage.title}</h3>
                  <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-2xl">{activeStage.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {activeStage.deliverables.map((item) => (
                      <div key={item} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                        <CheckCircle2 className="text-emerald-500 w-5 h-5 mb-3" />
                        <span className="block font-bold text-slate-800 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 p-6 bg-slate-900 rounded-2xl text-white flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                      <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-1">Impact Highlight</p>
                      <p className="text-lg font-medium italic">
                        "Connecting {activeStage.title} reduced manual data entry by 85%."
                      </p>
                    </div>
                    <button className="whitespace-nowrap bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-all flex items-center">
                      Learn How <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const ArchitectureView = () => {
    const data = EXPERTISE_DATA[capabilityType];
    return (
      <div className="pt-32 pb-24 max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <p className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4">{data.subtitle}</p>
          <h1 className="text-5xl text-black font-black mb-6">{data.title}</h1>
          <p className="text-xl text-slate-500 font-medium leading-relaxed">
            {data.description}
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100">
            <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-blue-600/20">
              {data.leftCard.icon}
            </div>
            <h2 className="text-3xl text-black mb-6">{data.leftCard.title}</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              {data.leftCard.desc}
            </p>
            <ul className="space-y-4">
              {data.leftCard.bullets.map(item => (
                <li key={item} className="flex items-center gap-3 font-bold text-slate-800">
                  <CheckCircle2 size={18} className="text-blue-600" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-900 text-white p-12 rounded-[3rem]">
            <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
              {data.rightCard.icon}
            </div>
            <h2 className="text-3xl text-white mb-6">{data.rightCard.title}</h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              {data.rightCard.desc}
            </p>
            <ul className="space-y-4">
              {data.rightCard.bullets.map(item => (
                <li key={item} className="flex items-center gap-3 font-bold text-slate-300">
                  <CheckCircle2 size={18} className="text-blue-500" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };

  const CaseStudiesView = () => {
    const [activeCase, setActiveCase] = useState(CASE_STUDIES[0]);
    return (
      <section className="pt-32 pb-24 max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-xs font-black text-blue-600 uppercase tracking-[0.4em] mb-4">Implementation Briefs</h2>
          <h3 className="text-4xl font-black text-slate-900 tracking-tight">Enterprise Success</h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-2xl bg-slate-50/50">
          <div className="lg:col-span-4 bg-white border-r border-slate-200 p-6 space-y-3">
            {CASE_STUDIES.map((study) => (
              <button
                key={study.id}
                onClick={() => setActiveCase(study)}
                className={`w-full text-left p-5 rounded-2xl transition-all flex items-center justify-between group ${
                  activeCase.id === study.id ? 'bg-blue-600 text-white shadow-lg' : 'hover:bg-slate-50 text-slate-600'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <Database size={20} className={activeCase.id === study.id ? 'text-white' : 'text-blue-600'} />
                  <div>
                    <h4 className="font-bold text-sm leading-tight">{study.client}</h4>
                    <p className={`text-[10px] font-bold uppercase ${activeCase.id === study.id ? 'text-blue-100' : 'text-slate-400'}`}>{study.tag}</p>
                  </div>
                </div>
                <ChevronRight size={16} />
              </button>
            ))}
          </div>
          <div className="lg:col-span-8 p-10 md:p-14 bg-white/40 backdrop-blur-md">
            <h4 className="text-3xl md:text-4xl font-black text-slate-900 mb-8">{activeCase.client}</h4>
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h5 className="text-[11px] font-black text-blue-600 uppercase tracking-widest mb-4">Operational Friction</h5>
                <p className="text-slate-600 italic font-medium">"{activeCase.challenge}"</p>
              </div>
              <div>
                <h5 className="text-[11px] font-black text-blue-600 uppercase tracking-widest mb-4">The Solution</h5>
                <p className="text-slate-800 font-bold">{activeCase.solution}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {activeCase.results.map((result) => (
                <div key={result.label} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                  <p className="text-2xl font-black text-slate-900 tracking-tighter">{result.value}</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{result.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900 antialiased overflow-x-hidden">
      
      {/* Reader Mode Overlay */}
      <ReaderMode />

      {/* Navigation */}
      <nav className={`fixed w-full z-[100] transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-xl shadow-sm py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center">
            <button onClick={() => navigateTo('home')} className="flex items-center gap-3 group">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-2xl shadow-lg group-hover:scale-105 transition-transform">
                <Logo className="h-6 w-6" />
              </div>
              <div className="hidden sm:block text-left leading-tight">
                <p className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-900">Connecting Cloud</p>
                <p className="text-[9px] uppercase tracking-[0.1em] text-blue-600 font-bold">Technologies</p>
              </div>
            </button>

            <div className="hidden lg:flex items-center space-x-1">
              <div className="relative" onMouseEnter={() => setExpertiseOpen(true)} onMouseLeave={() => setExpertiseOpen(false)}>
                <button className={`flex items-center space-x-1 px-4 py-2 rounded-full text-[11px] font-black uppercase tracking-widest transition-all ${activePage === 'architecture' ? 'text-blue-600 bg-blue-50' : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'}`}>
                  <span>Capabilities</span>
                  <ChevronDown size={14} className={`transition-transform duration-300 ${expertiseOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={`absolute top-full left-0 mt-2 w-72 bg-white rounded-3xl shadow-2xl border border-slate-100 p-4 transition-all duration-300 origin-top-left ${expertiseOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                  <div className="grid gap-2">
                    {EXPERTISE_ITEMS.map((item) => (
                      <button key={item.id} onClick={() => selectCapability(item.id)} className={`flex items-start text-left gap-3 p-3 rounded-2xl hover:bg-blue-50 group transition-colors ${capabilityType === item.id && activePage === 'architecture' ? 'bg-blue-50' : ''}`}>
                        <div className={`mt-1 ${capabilityType === item.id && activePage === 'architecture' ? 'text-blue-600' : 'text-slate-400 group-hover:text-blue-600'}`}>{item.icon}</div>
                        <div>
                          <p className={`text-[10px] font-black uppercase transition-colors ${capabilityType === item.id && activePage === 'architecture' ? 'text-blue-600' : 'text-slate-900'}`}>{item.title}</p>
                          <p className="text-[10px] text-slate-500 font-medium">{item.desc}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              {NAV_LINKS.filter(l => l.id !== 'home').map((link) => (
                <button key={link.id} onClick={() => navigateTo(link.id)} className={`px-4 py-2 rounded-full text-[11px] font-black uppercase tracking-widest transition-all ${activePage === link.id ? 'text-blue-600 bg-blue-50' : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'}`}>{link.label}</button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button onClick={() => setShowContactModal(true)} className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all">Connect Now</button>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 text-slate-900">
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 z-[110] bg-slate-950/70 backdrop-blur-sm transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`absolute right-0 top-0 h-full w-full max-w-[360px] bg-white shadow-2xl border-l border-slate-200 transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative h-full flex flex-col px-6 py-6 overflow-y-auto">
            <div className="flex items-center justify-between gap-4 mb-8">
              <div>
                <div className="inline-flex items-center gap-2">
                  <Logo className="h-8 w-8" />
                  <span className="text-base font-black uppercase tracking-[0.3em] text-slate-900">Menu</span>
                </div>
                <p className="text-sm text-slate-500 mt-2">Fast access to pages and capabilities.</p>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="space-y-3">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => navigateTo(link.id)}
                  className={`w-full text-left px-4 py-4 rounded-3xl transition-colors duration-200 ${activePage === link.id ? 'bg-blue-50 text-blue-700' : 'bg-slate-50 text-slate-800 hover:bg-blue-50 hover:text-blue-700'}`}
                >
                  <span className="block text-lg font-black">{link.label}</span>
                  <span className="text-sm text-slate-500">Go to {link.label}</span>
                </button>
              ))}
            </div>

            <div className="mt-8 border-t border-slate-200 pt-8">
              <div className="flex items-center justify-between mb-4">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Capabilities</p>
                <span className="text-sm text-slate-500">{EXPERTISE_ITEMS.length} tracks</span>
              </div>
              <div className="space-y-3">
                {EXPERTISE_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => selectCapability(item.id)}
                    className="w-full rounded-3xl border border-slate-200 px-4 py-4 text-left transition-colors duration-200 hover:border-blue-200 hover:bg-blue-50"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-base font-black text-slate-900">{item.title}</span>
                      <ChevronRight size={18} className="text-slate-400" />
                    </div>
                    <p className="mt-1 text-sm text-slate-500">{item.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-auto pt-8 border-t border-slate-200">
              <button
                type="button"
                onClick={() => {
                  setShowContactModal(true);
                  setMobileMenuOpen(false);
                }}
                className="w-full rounded-full bg-slate-900 px-6 py-3 text-sm font-black uppercase tracking-widest text-white hover:bg-blue-600 transition-colors"
              >
                Connect Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <main>
        {activePage === 'home' && <HomeView />}
        {activePage === 'architecture' && <ArchitectureView />}
        {activePage === 'cases' && <CaseStudiesView />}
        {activePage === 'l2c' && <L2CExplorerView />}
        {activePage === 'process' && <MethodologyView />}
        {activePage === 'insights' && <InsightsView />}
      </main>

      <footer className="bg-slate-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Logo className="h-8 w-8 text-blue-600" />
            <span className="font-black uppercase tracking-tighter">Connecting Cloud</span>
          </div>
          <p className="text-slate-400 text-sm mb-4">Architecting the future of enterprise configuration and Lead-to-Cash orchestration.</p>
          <p className="text-slate-400 text-sm mb-4">Contact: <a href="mailto:info@connectingcloud.co" className="text-blue-600 hover:text-blue-400">info@connectingcloud.co</a></p>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-600">© 2026 Connecting Cloud Technologies. All rights reserved.</p>
        </div>
      </footer>

      {showContactModal && (
        <div className="fixed inset-0 z-[1100] flex items-center justify-center p-6 bg-slate-950/60 backdrop-blur-md">
          <div className="bg-white w-full max-w-5xl rounded-[3rem] overflow-hidden flex flex-col md:flex-row relative shadow-2xl">
            <button
              onClick={() => {
                setShowContactModal(false);
                setContactError('');
              }}
              className="absolute top-6 right-6 p-2 bg-slate-100 rounded-full"
            >
              <X size={20}/>
            </button>
            <div className="bg-slate-900 text-white p-12 md:w-2/5">
              <h3 className="text-3xl font-black mb-6">Start Your Architecture Briefing.</h3>
              <p className="text-slate-400 mb-12">Tell us your goals, systems, and bottlenecks. We'll map the right modernization approach for your business.</p>
              <div className="space-y-6">
                <div className="flex items-center gap-4"><Mail className="text-blue-500" size={18}/> <span className="text-sm font-bold">info@connectingcloud.co</span></div>
              </div>
            </div>
            <div className="p-12 md:w-3/5">
              {formSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <CheckCircle2 size={40} className="text-emerald-500 mb-4" />
                  <h4 className="text-2xl font-black">Message Sent!</h4>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  {contactError ? (
                    <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                      {contactError}
                    </div>
                  ) : null}
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      required
                      name="name"
                      placeholder="Name"
                      type="text"
                      className="w-full bg-slate-50 border p-4 rounded-2xl outline-none font-bold text-sm"
                    />
                    <input
                      required
                      name="organization"
                      placeholder="Organization"
                      type="text"
                      className="w-full bg-slate-50 border p-4 rounded-2xl outline-none font-bold text-sm"
                    />
                  </div>
                  <input
                    required
                    name="email"
                    placeholder="Email"
                    type="email"
                    className="w-full bg-slate-50 border p-4 rounded-2xl outline-none font-bold text-sm"
                  />
                  <textarea
                    name="message"
                    placeholder="Tell us about your landscape..."
                    className="w-full bg-slate-50 border p-4 rounded-2xl outline-none font-bold text-sm h-32 resize-none"
                  ></textarea>
                  <button type="submit" className="w-full bg-blue-600 text-white font-black py-5 rounded-2xl text-[11px] uppercase tracking-widest shadow-lg shadow-blue-600/20">Submit Briefing</button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// --- SECTIONS ---

function Hero({ onCaseClick, onContactClick }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white pt-40 pb-28">
      <div className="absolute inset-0 bg-[radial-gradient(#dbeafe_1px,transparent_1px)] [background-size:30px_30px] opacity-50" />
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-indigo-200/40 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-blue-600">
              <ShieldCheck size={14} /> Certified Enterprise Cloud Architects
            </div>

            <h1 className="mb-8 text-5xl font-black leading-[0.95] tracking-tight text-slate-950 md:text-7xl">
              Build your next
              <br />
              <span className="text-blue-600">Lead-to-Cash engine.</span>
            </h1>

            <p className="mb-10 max-w-2xl text-lg font-medium leading-relaxed text-slate-600 md:text-xl">
              We modernize enterprise revenue architecture by connecting CRM, CPQ, ERP and billing into one resilient flow.
              From quote logic to revenue realization, every handoff is automated, observable, and scalable.
            </p>

            <div className="mb-12 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={onCaseClick}
                className="group inline-flex items-center justify-center rounded-3xl bg-blue-600 px-10 py-5 text-lg font-black text-white shadow-xl shadow-blue-600/20 transition-all hover:-translate-y-0.5 hover:shadow-2xl"
              >
                View Solutions
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={onContactClick}
                className="rounded-3xl border-2 border-slate-200 bg-white px-10 py-5 text-lg font-black text-slate-900 transition-all hover:border-slate-300 hover:bg-slate-50"
              >
                Book Architecture Briefing
              </button>
            </div>

            {/* <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-2xl font-black text-slate-900">92%</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Automation Rate</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-2xl font-black text-slate-900">4-12x</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Faster Quoting</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-2xl font-black text-slate-900">99.9%</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Data Integrity</p>
              </div>
            </div> */}
          </div>

          {/* <div className="rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-2xl shadow-slate-200/70">
            <p className="mb-5 text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">What You Get</p>
            <h3 className="mb-6 text-3xl font-black leading-tight text-slate-900">
              Architecture built for performance and clean-core scale.
            </h3>
            <div className="space-y-4">
              {[
                'End-to-end CRM → CPQ → ERP orchestration',
                'Constraint-driven product and pricing models',
                'Revenue-safe billing and compliance controls',
                'Upgrade-stable integrations on SAP BTP / CPI',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                  <CheckCircle2 size={18} className="mt-0.5 text-emerald-500" />
                  <p className="text-sm font-bold leading-relaxed text-slate-700">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-slate-900 p-5 text-white">
              <p className="text-[10px] font-black uppercase tracking-widest text-blue-400">Typical Impact</p>
              <p className="mt-2 text-sm font-medium text-slate-300">
                Teams usually cut quote-to-order latency from days to hours in the first phase rollout.
              </p>
            </div>
          </div> */}
          <div className="relative">
            <div className="bg-white p-6 md:p-8 rounded-[2.5rem] shadow-2xl border border-slate-100 relative z-10">
              <div className="flex items-center justify-between mb-8 pb-4 border-b">
                <span className="font-bold text-slate-400 text-xs tracking-widest uppercase">Enterprise Revenue Orchestration</span>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                  <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-2xl border border-blue-100">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-600 rounded-xl text-white"><Zap size={20}/></div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">Cycle Time Reduction</div>
                      <div className="text-xs text-blue-600 font-medium italic">High-Velocity Quoting</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-black text-blue-600">-65%</div>
                    <div className="text-[10px] uppercase font-bold text-slate-400">Process Friction</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <span className="text-[10px] font-black text-slate-400 uppercase">Pricing Controls</span>
                    <div className="text-sm font-bold text-slate-800">Margin Integrity</div>
                    <div className="mt-2 h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 w-[100%]"></div>
                    </div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <span className="text-[10px] font-black text-slate-400 uppercase">Architecture</span>
                    <div className="text-sm font-bold text-slate-800">Clean Core Stability</div>
                    <div className="mt-2 h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 w-[98%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 z-20 animate-bounce-slow">
              <div className="text-blue-600 font-black text-xl leading-none">99.9%</div>
              <div className="text-[10px] font-bold text-slate-500 uppercase">Quote Accuracy</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const IntegrationEcosystem = () => {
  const logos = [
    { name: 'SAP S/4HANA', url: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg', isSap: true },
    { name: 'SAP VC', url: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg', isSap: true },
    { name: 'SAP AVC', url: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg', isSap: true },
    { name: 'Salesforce', url: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg', isSap: false },
    { name: 'DocuSign', url: 'https://cdn.prod.website-files.com/67d160f23e7ffa1df49339fc/67dcd2c2202a4f1f69625b75_logo%20vertical.svg', isSap: false },
    { name: 'Adobe Acrobat Sign', url: 'https://helpx.adobe.com/content/dam/help/mnemonics/sign_app_RGB_2017.svg', isSap: false }
  ];

  return (
    <section id="integrations" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-sm font-black text-blue-600 uppercase tracking-widest mb-4">CPQ SOFTWARE</h2>
        <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">CPQ Integration Platform</h3>
        <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
          Connecting Cloud Technologies has been successfully delivering best-of-breed SAP solutions to our global client base for years. 
          Our innovative and high-tech solutions can simplify the complete integration process of <strong className="text-blue-600">SAP CPQ</strong> with <strong className="text-blue-600">SAP Contract Lifecycle Management</strong> and other leading platforms.
        </p>
      </div>

      <div className="relative w-full flex overflow-hidden border-y border-slate-100 bg-slate-50/30">
        <div className="py-12 flex whitespace-nowrap animate-marquee group-hover:pause-animation">
          {/* We repeat the logos multiple times to ensure the track is long enough to loop seamlessly */}
          {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
            <div key={i} className="group flex items-center px-12 opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default">
              <img src={logo.url} alt={logo.name} className={`h-12`} />
              <span className="text-3xl font-black tracking-tighter text-slate-800 group-hover:text-black">{logo.name}</span>
            </div>
          ))}
        </div>
        
        {/* Gradient overlays for smooth fading at edges */}
        <div className="absolute top-0 left-0 w-48 h-full bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-48 h-full bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
};

function EnterpriseSystems({ onCapSelect }) {
  const SYSTEMS = [
    { name: 'CRM', role: 'Front End', targetId: 'sf', icon: <Target size={22} />, desc: 'Connected customer data and Salesforce Revenue Cloud flows.' },
    { name: 'CPQ', role: 'Engine Room', targetId: 'cpq', icon: <FileText size={22} />, desc: 'Connecting complex pricing logic with high-speed quoting.' },
    { name: 'ERP', role: 'Digital Core', targetId: 'avc', icon: <LayoutGrid size={22} />, desc: 'Configuration backbone for industrial leaders in SAP S/4HANA.' },
  ];
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
          {SYSTEMS.map((item, idx) => (
            <div key={idx} onClick={() => onCapSelect(item.targetId)} className="group cursor-pointer rounded-[2.5rem] border border-slate-200 bg-white p-8 hover:border-blue-300 hover:shadow-xl transition-all">
              <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-blue-600 transition-all mb-8">{item.icon}</div>
              <h4 className="font-black text-2xl text-slate-900 mb-2">{item.name}</h4>
              <p className="text-slate-500 font-medium text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PerformanceSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-xs font-black text-blue-600 uppercase tracking-[0.4em] mb-4">Architecture Efficacy</h2>
            <h3 className="text-5xl font-black text-slate-950 mb-8 leading-tight">Quantifying the <br/>Cloud Advantage</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={PERFORMANCE_CHART} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fontWeight: 800, fill: '#64748b' }} />
                  <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }} />
                  <Bar dataKey="value" radius={[10, 10, 10, 10]} barSize={60} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="bg-blue-600 rounded-[3rem] p-12 text-white shadow-2xl shadow-blue-600/20">
            <Zap className="mb-8" size={40} />
            <h4 className="text-3xl font-black mb-6">92% Operational Efficiency</h4>
            <p className="text-blue-100 text-lg leading-relaxed font-medium mb-8">
              By replacing legacy point-to-point integrations with a clean-core architectural model, our clients see an average 92% reduction in data synchronization failures.
            </p>
            <div className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center"><Globe size={24}/></div>
              <p className="text-sm font-bold uppercase tracking-widest">Global Scalability Ready</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessTeaser({ onMoreClick }) {
  return (
    <section className="pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-slate-950 rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full -mr-48 -mt-48" />
          <div className="relative z-10">
            <h3 className="text-4xl md:text-6xl font-black text-white mb-8">Ready to architect?</h3>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-12">Download our Cloud Connectivity Whitepaper or schedule a methodology deep-dive.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button onClick={onMoreClick} className="px-10 py-5 bg-white text-slate-950 font-black rounded-3xl hover:bg-blue-50 transition-all uppercase tracking-widest text-[11px]">The CCT Methodology</button>
              <button className="px-10 py-5 border border-white/20 text-white font-black rounded-3xl hover:bg-white/5 transition-all uppercase tracking-widest text-[11px]">Download Paper</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
