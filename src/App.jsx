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
  Wallet, Receipt, ShoppingCart, UserCheck, Activity, Shield, Terminal, Sparkles, ArrowLeft, Workflow, Network, ClipboardCheck, Factory, Building2,Truck,Cog,Award,MessageSquare,Link2,Settings2,ArrowUpRight, Check, ShoppingBag, Briefcase, Bot,CircleDot,Users2 , ExternalLink,FileSearch, MonitorSmartphone,
  Calendar,Users,Layers3, Boxes,Rocket, Flame
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
    architecture: "Salesforce opportunity data, SAP CPQ configuration, CPI orchestration, and S/4HANA order creation.",
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
    architecture: "S/4HANA AVC constraint model with BOM, routing, and MRP validation tied into the quoting workflow.",
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
    architecture: "Revenue Cloud product rules, approval automation, regional price books, and billing schedule controls.",
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
    architecture: "SAP BTP Integration Suite with event-driven BOM synchronization between PLM, ERP, and production systems.",
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

const TRUST_SIGNALS = [
  { value: "Fortune 500", label: "Manufacturing and industrial program experience" },
  { value: "SAP + Salesforce", label: "Cross-platform Quote-to-Cash specialization" },
  { value: "Architect-led", label: "Direct access to senior delivery experts" },
  { value: "Clean core", label: "Upgrade-stable SAP extension patterns" },
];

const WHY_US = [
  {
    title: "Architect-led delivery",
    desc: "You work with people who can design the target architecture and still understand the scripts, iFlows, pricing rules, and master data behind it.",
  },
  {
    title: "Smaller team, less drag",
    desc: "Lean delivery means faster discovery, shorter decision loops, and fewer layers between business goals and technical execution.",
  },
  {
    title: "Deep CPQ specialization",
    desc: "We focus on SAP CPQ, S/4HANA AVC, Salesforce Revenue Cloud, CPI/BTP, and the integration patterns that make revenue operations reliable.",
  },
  {
    title: "Outcome-first engineering",
    desc: "Every build is tied to measurable outcomes: faster quoting, fewer pricing mismatches, cleaner handoffs, and lower operational risk.",
  },
];

const INDUSTRY_FOCUS = [
  "Manufacturing solutions",
  "Quote-to-Cash transformation",
  "SAP CPQ services",
  "SAP + Salesforce integration",
  "SAP Commerce modernization",
  "BTP/CPI integration services",
];

const NAV_LINKS = [
  { id: 'working-models', label: 'How We Work' },
  { id: 'cpq-migration', label: 'Quote 1.0 → 2.0 Transition' },
  { id: 'avc-migration', label: 'VC → AVC Migration' },
  { id: 'services', label: 'Services' },
  { id: 'expertise', label: 'Why Us' },
  // { id: 'ecosystem', label: 'Ecosystem' },
  { id: 'contact', label: 'Contact' },
];
const scrollToSection = (id, setMobileMenuOpen) => {
  const element = document.getElementById(id);

  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  setMobileMenuOpen(false);
};

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

const PAGE_ROUTES = {
  home: '/',
  cases: '/cases',
  services: '/services',
  l2c: '/l2c',
  process: '/methodology',
  insights: '/insights',
};

const ROUTE_PAGES = Object.fromEntries(Object.entries(PAGE_ROUTES).map(([page, route]) => [route, page]));
const CAPABILITY_IDS = new Set(EXPERTISE_ITEMS.map((item) => item.id));

const normalizeHashPath = (hash) => {
  const rawPath = decodeURIComponent((hash || '').replace(/^#/, ''));
  const path = rawPath.startsWith('/') ? rawPath : `/${rawPath}`;
  const cleanPath = path.replace(/\/+$/, '');

  return cleanPath || '/';
};

const parseHashRoute = () => {
  const path = normalizeHashPath(window.location.hash);
  const [, section, capability] = path.split('/');

  if (section === 'architecture') {
    return {
      page: 'architecture',
      capability: CAPABILITY_IDS.has(capability) ? capability : 'avc',
    };
  }

  return {
    page: ROUTE_PAGES[path] || 'home',
    capability: 'avc',
  };
};

const getHashForPage = (page, capability = 'avc') => {
  if (page === 'architecture') {
    return `#/architecture/${CAPABILITY_IDS.has(capability) ? capability : 'avc'}`;
  }

  return `#${PAGE_ROUTES[page] || PAGE_ROUTES.home}`;
};

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
  const initialRoute = parseHashRoute();
  const [activePage, setActivePage] = useState(initialRoute.page);
  const [capabilityType, setCapabilityType] = useState(initialRoute.capability);
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
    const syncRoute = () => {
      const route = parseHashRoute();
      setActivePage(route.page);
      setCapabilityType(route.capability);
      setMobileMenuOpen(false);
      setExpertiseOpen(false);
      setReadingArticle(null);
    };

    window.addEventListener('hashchange', syncRoute);
    syncRoute();

    return () => window.removeEventListener('hashchange', syncRoute);
  }, []);

  useEffect(() => {
    if (!readingArticle) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activePage, capabilityType, readingArticle]);

  const navigateTo = (pageId) => {
    const nextHash = getHashForPage(pageId);
    if (window.location.hash === nextHash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.hash = nextHash;
    }

    setMobileMenuOpen(false);
    setExpertiseOpen(false);
    setReadingArticle(null);
  };

  const selectCapability = (type) => {
    const nextHash = getHashForPage('architecture', type);
    if (window.location.hash === nextHash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.hash = nextHash;
    }

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
      {/* <Hero onCaseClick={() => navigateTo('services')} onContactClick={() => setShowContactModal(true)} />
        <Stats />
        <WorkingModelsSection onContactClick={() => setShowContactModal(true)} />
        <LandscapeSection />
        <CPQMigrationSection onContactClick={() => setShowContactModal(true)} />
        <MigrationSection />
        <ServicesSection />
        <AIInnovationSection /> */}
        {/* <WhyUs onContactClick={() => setShowContactModal(true)} /> */}
        {/* <ExpertiseGridSection />
        <IntegrationEcosystem />
        <ReadyToConnectSection onContactClick={() => setShowContactModal(true)} /> */}
        {/* <AVCMasteryView />
        <TrustSignals onCaseClick={() => navigateTo('cases')} />
        <IndustryFocus onContactClick={() => setShowContactModal(true)} /> */}
      {/* <EnterpriseSystems onCapSelect={selectCapability} /> */}
        {/* <PerformanceSection /> */}
        {/* <ProcessTeaser onMoreClick={() => navigateTo('process')} onContactClick={() => setShowContactModal(true)} /> */}

    <section id="home">
      <Hero
        onCaseClick={() => navigateTo('services')}
        onContactClick={() => setShowContactModal(true)}
      />
    </section>

    <section id="stats">
      <Stats />
    </section>

    <section id="working-models">
      <WorkingModelsSection onContactClick={() => setShowContactModal(true)} />
    </section>

    <section id="landscape">
      <LandscapeSection />
    </section>

    <section id="cpq-migration">
      <CPQMigrationSection onContactClick={() => setShowContactModal(true)} />
    </section>

    <section id="avc-migration">
      <MigrationSection onContactClick={() => setShowContactModal(true)} />
    </section>

    <section id="services">
      <ServicesSection />
    </section>

    <section id="ai">
      <AIInnovationSection />
    </section>

    <section id="expertise">
      <ExpertiseGridSection />
    </section>

    <section id="ecosystem">
      <IntegrationEcosystem />
    </section>

    <section id="contact">
      <ReadyToConnectSection onContactClick={() => setShowContactModal(true)} />
    </section>
    </>
  );


  const CPQMigrationSection = ({onContactClick}) => {
  const migStats = [
    { n: "90%", l: "Features exclusive to Quote 2.0", icon: <Sparkles className="text-blue-400" size={24} /> },
    { n: "100K", l: "Line item scaling capacity", icon: <Layers className="text-blue-400" size={24} /> },
    { n: "6-12w", l: "Targeted migration window", icon: <Clock className="text-blue-400" size={24} /> },
    { n: "S/4 Ready", l: "Native Business Partner model", icon: <ShieldCheck className="text-emerald-400" size={24} /> }
  ];

  const featureCards = [
    { 
      t: "Architecture", 
      h: "Stateless & Event-Driven", 
      icon: <Cpu size={20} />,
      d: "Replaces stateful, click-triggered models with discrete actions. Fixes performance degradation in large quotes forever." 
    },
    { 
      t: "Data Model", 
      h: "Business Partner Sync", 
      icon: <Users2 size={20} />,
      d: "Native S/4HANA alignment. No more flat 'Customer' records—full Sold-To/Ship-To party support." 
    },
    { 
      t: "Collaboration", 
      h: "Solution Design Teams", 
      icon: <Workflow size={20} />,
      d: "Divide complex quotes into sections with dedicated team assignments and parallel pricing workflows." 
    },
    { 
      t: "Integration", 
      h: "API-First & Headless", 
      icon: <ExternalLink size={20} />,
      d: "Native S/4 Sales Order sync and headless API access for customer portals. Accelerated S/4 adoption path." 
    },
    { 
      t: "Output", 
      h: "Redesigned GenDoc", 
      icon: <FileSearch size={20} />,
      d: "Completely new preprocessor for templates. High-fidelity document generation at enterprise scale." 
    },
    { 
      t: "UI/UX", 
      h: "Responsive Templates", 
      icon: <MonitorSmartphone size={20} />,
      d: "Responsive templates in Quote 2.0 deliver modern, reusable, and scalable UI customization with redesigned QuoteList architecture and resuable partial template support." 
    }
  ];

  const steps = [
  {
    n: "01",
    t: "Discovery & Landscape Assessment",
    d: "We evaluate your SAP ecosystem, configuration complexity, integration dependencies, and business processes to define a scalable transformation strategy.",
  },
  {
    n: "02",
    t: "Architecture & Solution Design",
    d: "Designing a future-ready configure-to-quote architecture across SAP CPQ, AVC, CPS, Commerce, and S/4HANA with enterprise integration standards.",
  },
  {
    n: "03",
    t: "Implementation & Integration",
    d: "Building intelligent configuration models, pricing logic, workflows, APIs, and ERP/CRM integrations tailored to your operational landscape.",
  },
  {
    n: "04",
    t: "Migration, Testing & Validation",
    d: "Executing secure migration, regression testing, performance validation, and end-to-end business scenario testing with minimal operational disruption.",
  },
  {
    n: "05",
    t: "Go-Live, Enablement & Optimization",
    d: "Supporting deployment, user enablement, governance, and continuous optimization to maximize adoption, scalability, and long-term ROI.",
  },
];

  return (
    <section className="bg-slate-950 py-24 relative overflow-hidden" id="cpq-migration">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600 rounded-full blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 text-[10px] font-bold text-blue-400 uppercase tracking-[0.2em] mb-6 border border-blue-500/20">
            <Shield size={14} /> Migration Strategic Window
          </div>
          <h2 className="text-4xl font-black tracking-tight text-white md:text-6xl leading-tight">
            The CPQ Quote 1.0 <ArrowRight className="inline mx-2 text-blue-500" /> 2.0 <br/>
            <span className="text-slate-500 italic">Critical Transition Period</span>
          </h2>
          <div className="mt-8 grid lg:grid-cols-3 gap-12">
            <p className="lg:col-span-2 text-xl text-slate-400 leading-relaxed">
              SAP is no longer issuing new Quote 1.0 licences. With <span className="text-blue-400 font-bold">90% of new features</span> being 2.0-exclusive, staying on legacy architecture means falling behind on innovation, performance, and S/4HANA readiness.
            </p>
            <div className="flex items-center">
              <button onClick={onContactClick} className="w-full group flex items-center justify-between gap-4 rounded-2xl bg-blue-600 px-8 py-5 text-sm font-bold text-white transition-all hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-500/20">
                Book Readiness Assessment
                <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {migStats.map((stat, i) => (
            <div key={i} className="group p-8 rounded-[2.5rem] bg-slate-900/40 border border-white/5 hover:border-blue-500/30 transition-all">
              <div className="mb-4">{stat.icon}</div>
              <div className="text-4xl font-black text-white mb-2 tracking-tighter">{stat.n}</div>
              <div className="text-[11px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed">{stat.l}</div>
            </div>
          ))}
        </div>

        {/* Feature Comparison Section */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <h3 className="text-sm font-black text-blue-500 uppercase tracking-[0.3em]">Technical Divergence</h3>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-blue-500/50 to-transparent" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featureCards.map((card, i) => (
              <div key={i} className="relative group p-8 rounded-[2rem] bg-slate-900/60 border border-white/10 hover:bg-slate-900 transition-all flex flex-col h-full">
                <div className="flex items-start justify-between mb-8">
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:scale-110 transition-transform">
                    {card.icon}
                  </div>
                  <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">{card.t}</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-4 leading-tight">{card.h}</h4>
                <p className="text-sm text-slate-400 leading-relaxed mt-auto">{card.d}</p>
                <div className="absolute top-4 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex gap-1">
                    <div className="h-1 w-1 rounded-full bg-blue-500 animate-ping" />
                    <div className="h-1 w-1 rounded-full bg-blue-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Methodology Roadmap */}
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 p-6 shadow-2xl shadow-blue-900/20 sm:p-8 lg:p-12">
  {/* Decorative background */}
  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0)_35%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0)_30%)]" />
  <div className="pointer-events-none absolute -left-24 top-10 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
  <div className="pointer-events-none absolute -right-24 bottom-0 h-56 w-56 rounded-full bg-indigo-300/10 blur-3xl" />

  <div className="relative z-10">
    <div className="mx-auto max-w-3xl text-center">
  <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-white/80 backdrop-blur-xl">
    Enterprise Delivery Framework
  </p>

  <h3 className="mt-5 font-['Cabinet_Grotesk'] text-2xl font-extrabold leading-[0.95] tracking-[-0.04em] text-white sm:text-3xl lg:text-[3.2rem]">
    The ConnectingCloud 2.0 Roadmap
  </h3>

  <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/80 sm:text-[15px]">
    A structured end-to-end delivery approach for modern SAP
    Configure-to-Quote transformation — designed to reduce complexity,
    accelerate implementation, and ensure scalable enterprise adoption.
  </p>
</div>

    <div className="relative mt-10 lg:mt-14">
      {/* Desktop line */}
      <div className="absolute left-[5%] right-[5%] top-7 hidden h-px bg-white/20 lg:block" />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
        {steps.map((step, i) => (
          <div
            key={i}
            className="relative rounded-[1.75rem] border border-white/15 bg-white/10 p-5 text-left shadow-[0_10px_30px_rgba(0,0,0,0.12)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 sm:p-6 lg:text-center"
          >
            {/* Connector dot */}
            <div className="absolute -left-2 top-7 hidden h-4 w-4 rounded-full border-2 border-white bg-blue-600 lg:block" />

            {/* Mobile connector */}
            {i !== steps.length - 1 && (
              <div className="absolute left-7 top-full h-4 w-px bg-white/20 sm:hidden" />
            )}

            <div className="flex items-center gap-4 lg:flex-col lg:gap-0">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-[0_8px_20px_rgba(0,0,0,0.12)] sm:h-14 sm:w-14">
                <span className="text-base font-black sm:text-lg">{step.n}</span>
              </div>

              <div className="min-w-0 lg:mt-5">
                <div className="text-sm font-bold leading-snug text-white sm:text-[15px] lg:text-base">
                  {step.t}
                </div>
                <p className="mt-2 text-xs leading-6 text-white/75 sm:text-[13px] lg:mx-auto lg:max-w-[210px]">
                  {step.d}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
      </div>
    </section>
  );
};

const ReadyToConnectSection = ({ onContactClick }) => {
  return (
    <section className="bg-[#020617] py-24 px-6 lg:px-12 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="mx-auto max-w-5xl relative z-10">
        <div className="bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 rounded-[3rem] p-8 md:p-16 text-center shadow-2xl shadow-blue-900/40 border border-white/10 group">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md mb-8 group-hover:scale-110 transition-transform duration-500 border border-white/20">
            <MessageSquare className="text-white" size={32} />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6 leading-tight">
            Ready to <span className="text-blue-100">Connect?</span>
          </h2>
          
          <p className="text-lg md:text-xl text-blue-50/80 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            Skip the generalist bench. Talk directly to the specialists who will design and deliver your CPQ or AVC transformation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={onContactClick} className="w-full sm:w-auto px-10 py-5 bg-white text-blue-600 font-black rounded-2xl shadow-xl hover:bg-blue-50 transition-all flex items-center justify-center gap-2 group/btn">
              Book a Strategy Call
              <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
            <a href="mailto:hello@connectingcloud.co" className="w-full sm:w-auto px-10 py-5 bg-transparent border-2 border-white/30 text-white font-black rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center gap-2">
              info@connectingcloud.co
            </a>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/60 text-xs font-bold uppercase tracking-[0.2em]">
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-emerald-400" /> Specialist Architect Access
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-emerald-400" /> Free Readiness Audit
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

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
            <p className="text-blue-100 font-medium opacity-80">Our architects are ready to review your existing Lead-to-Cash landscape and provide a preliminary gap analysis with delivery risks, quick wins, and modernization options.</p>
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
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Capabilities tied to business outcomes.</h3>
          <p className="text-xl text-slate-600 max-w-4xl leading-relaxed">
            We don't offer generic SAP consulting. We bring <span className="text-slate-900 font-bold">specialized, system-level capabilities</span> across the entire Quote-to-Cash stack, then measure success in quote speed, pricing accuracy, integration reliability, and reduced manual work.
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

    const caseIcons = [
      <Factory size={24} />,
      <Building2 size={24} />,
      <Truck size={24} />,
      <Cog size={24} />
    ];

    const caseColors = [
      { bg: 'bg-blue-50', border: 'border-blue-200', icon: 'text-blue-600', accent: 'from-blue-500/10', dot: 'bg-blue-500' },
      { bg: 'bg-emerald-50', border: 'border-emerald-200', icon: 'text-emerald-600', accent: 'from-emerald-500/10', dot: 'bg-emerald-500' },
      { bg: 'bg-purple-50', border: 'border-purple-200', icon: 'text-purple-600', accent: 'from-purple-500/10', dot: 'bg-purple-500' },
      { bg: 'bg-amber-50', border: 'border-amber-200', icon: 'text-amber-600', accent: 'from-amber-500/10', dot: 'bg-amber-500' }
    ];

    return (
      <section className="pt-32 pb-32 bg-gradient-to-b from-white via-slate-50/30 to-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header Section */}
          <div className="mb-20 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 border border-blue-200 mb-6">
              <Award size={14} className="text-blue-600" />
              <span className="text-xs font-black uppercase tracking-[0.2em] text-blue-600">Implementation Briefs</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-slate-950 mb-6 leading-[1.1]">
              Enterprise Success Stories
            </h1>
            <p className="text-xl font-medium leading-relaxed text-slate-600">
              Real outcomes from complex SAP and Salesforce integrations. Each case demonstrates how we transform operational challenges into measurable business advantages.
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-20">
            {CASE_STUDIES.map((study, idx) => {
              const colors = caseColors[idx];
              return (
                <div
                  key={study.id}
                  onClick={() => setActiveCase(study)}
                  className={`group relative rounded-[2rem] border-2 ${colors.border} ${colors.bg} p-8 transition-all duration-300 hover:shadow-xl cursor-pointer overflow-hidden ${
                    activeCase.id === study.id ? 'ring-2 ring-blue-500 shadow-xl' : ''
                  }`}
                >
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors.accent} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                  {/* Active indicator */}
                  {activeCase.id === study.id && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <CheckCircle2 size={14} className="text-white" />
                    </div>
                  )}

                  {/* Icon */}
                  <div className={`mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white group-hover:scale-110 transition-transform duration-300`}>
                    <div className={`${colors.icon}`}>{caseIcons[idx]}</div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h4 className="font-black text-slate-950 text-lg leading-tight mb-3">{study.client}</h4>
                    <p className="text-sm font-bold text-slate-600 mb-4">{study.tag}</p>
                    <div className="space-y-2">
                      {study.results.slice(0, 2).map((result, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${colors.dot}`} />
                          <span className="text-sm font-medium text-slate-700">{result.value} {result.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-0 h-1 w-0 ${colors.dot} group-hover:w-full transition-all duration-500`} />
                </div>
              );
            })}
          </div>

          {/* Detailed Case Study Display */}
          <div className="relative rounded-[2.5rem] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-950" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.15),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(37,99,235,0.1),transparent_50%)]" />

            <div className="relative backdrop-blur-sm p-8 md:p-16">
              <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-start">
                <div>
                  <div className="mb-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/50 mb-4">
                      <TrendingUp size={14} className="text-blue-300" />
                      <span className="text-xs font-black uppercase tracking-[0.15em] text-blue-200">{activeCase.tag}</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">{activeCase.client}</h2>
                    <p className="text-blue-50/90 font-medium leading-relaxed text-lg max-w-2xl">
                      A Fortune 500 manufacturer facing critical operational bottlenecks, transformed through strategic SAP and Salesforce integration.
                    </p>
                  </div>

                  <div className="grid gap-8 md:grid-cols-3 mb-12">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                      <h4 className="text-sm font-black uppercase tracking-widest text-blue-200 mb-3">The Challenge</h4>
                      <p className="text-white/90 font-medium leading-relaxed">{activeCase.challenge}</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                      <h4 className="text-sm font-black uppercase tracking-widest text-blue-200 mb-3">Our Solution</h4>
                      <p className="text-white/90 font-medium leading-relaxed">{activeCase.solution}</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                      <h4 className="text-sm font-black uppercase tracking-widest text-blue-200 mb-3">Architecture</h4>
                      <p className="text-white/90 font-medium leading-relaxed">{activeCase.architecture}</p>
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-3 mb-12">
                    {activeCase.results.map((result) => (
                      <div key={result.label} className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                        <p className="text-3xl font-black text-slate-900 mb-2">{result.value}</p>
                        <p className="text-sm font-bold text-slate-600 uppercase tracking-wider">{result.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30">
                    <h4 className="text-sm font-black uppercase tracking-widest text-blue-200 mb-3">Key Takeaway</h4>
                    <p className="text-white font-medium leading-relaxed">
                      This implementation demonstrates our ability to deliver enterprise-grade solutions that reduce operational friction while maintaining clean, scalable architectures. The result: faster time-to-market, improved data integrity, and measurable ROI within months.
                    </p>
                  </div>
                </div>

                <div className="lg:ml-8">
                  <button
                    onClick={() => setShowContactModal(true)}
                    className="group relative inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 text-sm font-black uppercase tracking-widest text-slate-950 transition-all hover:shadow-xl hover:shadow-blue-950/40 hover:-translate-y-1 whitespace-nowrap"
                  >
                    Discuss Similar Project
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className="mt-20 text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-3xl font-black text-slate-950 mb-4">Ready to Transform Your Operations?</h3>
              <p className="text-lg font-medium text-slate-600 mb-8">
                Every enterprise challenge is unique. Let's discuss how our proven methodologies can deliver similar results for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setShowContactModal(true)}
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-8 py-4 text-sm font-black uppercase tracking-widest text-white transition-all hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-1"
                >
                  Schedule Architecture Review
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => navigateTo('process')}
                  className="rounded-2xl border-2 border-slate-200 bg-white px-8 py-4 text-sm font-black uppercase tracking-widest text-slate-950 transition-all hover:border-slate-300 hover:bg-slate-50"
                >
                  View Our Methodology
                </button>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-center">
            <div className="flex items-center gap-2">
              <Shield size={18} className="text-blue-600" />
              <span className="text-sm font-medium text-slate-600">Enterprise-grade execution</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-slate-300 rounded-full" />
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-emerald-600" />
              <span className="text-sm font-medium text-slate-600">Measurable ROI delivered</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-slate-300 rounded-full" />
            <div className="flex items-center gap-2">
              <Zap size={18} className="text-amber-600" />
              <span className="text-sm font-medium text-slate-600">Accelerated time-to-value</span>
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
      <nav
  className={`fixed w-full z-[100] transition-all duration-500 ${
    isScrolled
      ? 'bg-white/90 backdrop-blur-xl shadow-sm py-3 border-b border-slate-200/60'
      : 'bg-transparent py-5'
  }`}
>
  {/* BACKGROUND DOT PATTERN */}
  <div
    className="absolute inset-0 opacity-[0.035]"
    style={{
      backgroundImage:
        'radial-gradient(#2563eb 1px, transparent 1px)',
      backgroundSize: '22px 22px',
    }}
  />

  <div className="relative mx-auto max-w-[1720px] px-6 lg:px-10 2xl:px-14">
    <div className="flex items-center justify-between">

      {/* LOGO */}
      <button
        onClick={() => navigateTo('home')}
        className="flex items-center gap-4 shrink-0 group"
      >
        <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-lg ring-1 ring-slate-200 transition-transform duration-300 group-hover:scale-105">
          <Logo className="h-6 w-6" />
        </div>

        <div className="hidden sm:block text-left leading-tight">
          <p className="text-[11px] font-black uppercase tracking-[0.24em] text-slate-900 whitespace-nowrap">
            Connecting Cloud
          </p>

          <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-blue-600 whitespace-nowrap">
            Technologies
          </p>
        </div>
      </button>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-4 xl:gap-8">

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">

          {/* EXISTING RESPONSIVE DROPDOWN / BREADCRUMB */}
          {/* <div
            className="relative"
            onMouseEnter={() => setExpertiseOpen(true)}
            onMouseLeave={() => setExpertiseOpen(false)}
          >
            ...
          </div> */}

          {NAV_LINKS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id, setMobileMenuOpen )}
              className={`
                whitespace-nowrap
                rounded-full
                px-3 xl:px-4
                py-2.5
                text-[11px] xl:text-[12px]
                font-black
                uppercase
                tracking-[0.14em]
                transition-all
                duration-300
                ${
                  activePage === item.id
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-blue-600'
                }
              `}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => setShowContactModal(true)}
          className="
            hidden md:flex
            h-11 xl:h-12
            items-center
            justify-center
            rounded-full
            bg-[#08122F]
            px-6 xl:px-8
            whitespace-nowrap
            text-[10px] xl:text-[11px]
            font-black
            uppercase
            tracking-[0.16em]
            text-white
            transition-all
            duration-300
            hover:scale-[1.03]
            hover:bg-blue-700
          "
        >
          Connect Now
        </button>

        {/* MOBILE MENU */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="
            lg:hidden
            rounded-xl
            p-2
            text-slate-900
            transition-colors
            hover:bg-slate-100
          "
        >
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
                {/* <p className="text-sm text-slate-500 mt-2">Fast access to pages and capabilities.</p> */}
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
                  onClick={() => scrollToSection(link.id, setMobileMenuOpen )}
                  className={`w-full text-left px-4 py-4 rounded-3xl transition-colors duration-200 ${activePage === link.id ? 'bg-blue-50 text-blue-700' : 'bg-slate-50 text-slate-800 hover:bg-blue-50 hover:text-blue-700'}`}
                >
                  <span className="block text-lg font-black">{link.label}</span>
                  {/* <span className="text-sm text-slate-500">Go to {link.label}</span> */}
                </button>
              ))}
            </div>

            {/* <div className="mt-8 border-t border-slate-200 pt-8">
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
            </div> */}

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
        {activePage === 'services' && <ServicesSection />}
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
  const stackItems = [
    {
      title: "SAP CPQ",
      subtitle: "Configure • Price • Quote",
      icon: <MessageSquare className="h-4 w-4" />,
      color: "bg-indigo-50 text-indigo-600",
    },
    {
      title: "SAP CPS on BTP",
      subtitle: "Config API Gateway",
      icon: <Link2 className="h-4 w-4" />,
      color: "bg-cyan-50 text-cyan-600",
    },
    {
      title: "SAP AVC",
      subtitle: "Advanced Variant Config.",
      icon: <Settings2 className="h-4 w-4" />,
      color: "bg-violet-50 text-violet-600",
    },
    {
      title: "SAP S/4HANA",
      subtitle: "BOM • Orders • Finance",
      icon: <Factory className="h-4 w-4" />,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "SAP BTP + CPI",
      subtitle: "AI • Integration • Extensions",
      icon: <Sparkles className="h-4 w-4" />,
      color: "bg-emerald-50 text-emerald-600",
    },
  ];

  const companies = [
    {
      name: "Essity",
      logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Essity%20Logo%20neu.svg",
      width: "w-24",
    },
  {
    name: "Infosys",
    logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Infosys%20logo.svg",
    width: "w-24",
  },
  {
    name: "NMLK",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5c/NLMK_Logo.svg",
    width: "w-24",
  },
  {
    name: "EY",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/34/EY_logo_2019.svg",
    width: "w-24",
  },
  // {
  //   name: "Deloitte",
  //   logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_of_Deloitte.svg",
  //   width: "w-28",
  // },
    {
      name: "Inkit",
      logo: "https://cdn.prod.website-files.com/5e7280fb3e6af0fdfbba222d/68e3f6217940ec64b39b22ba_BLACK%20LOGO.svg",
      width: "w-20",
    },
  {
    name: "TCS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/TCS_Logo_%28cropped%29.jpg/960px-TCS_Logo_%28cropped%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail&_=20250401175020",
    width: "w-24",
  },
  {
    name: "NTT DATA",
    logo: "https://commons.wikimedia.org/wiki/Special:FilePath/NTT-Data-Logo.svg",
    width: "w-28",
  },
  {
    name: "LTIMindtree",
    logo: "https://commons.wikimedia.org/wiki/Special:FilePath/LTIMindtree%20Logo.svg",
    width: "w-28",
  },
  {
    name: "Capgemini",
    logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Capgemini%20201x%20logo.svg",
    width: "w-28",
  },
];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/40 pt-24 pb-16">
      
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#dbeafe_1px,transparent_1px)] [background-size:30px_30px] opacity-60" />

      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />

      <div className="absolute right-0 top-0 h-[28rem] w-[28rem] rounded-full bg-indigo-200/20 blur-3xl" />

      <div className="relative text-left mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr]">
        
        {/* LEFT CONTENT */}
        <div>
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-blue-100 px-5 py-2 text-[10px] font-black uppercase tracking-[0.28em] text-blue-600 shadow-sm backdrop-blur-xl">
            <ShieldCheck className="h-3.5 w-3.5" />
            SAP Configuration Specialists
          </div>

          {/* Heading */}
<h1
  className="
    mt-6
    max-w-[720px]
    font-['Cabinet_Grotesk']
    text-[4.6rem]
    font-extrabold
    leading-[1]
    text-slate-950
  "
>
  <span className="block">
    We Connect Your
  </span>

  <span
    className="
      mt-1 block
      bg-gradient-to-r
      from-blue-600
      via-sky-500
      to-indigo-600
      bg-clip-text
      text-transparent
    "
  >
    SAP Configure-
  </span>

  <span className="mt-1 block text-slate-950">
    to-Quote
  </span>

  <span className="relative mt-1 inline-block text-slate-950">
    Landscape
    
    {/* Blue dot */}
    <span className="text-blue-500">.</span>

    {/* underline */}
    <span
      className="
        absolute
        -bottom-3
        left-2
        h-[6px]
        w-40
        rounded-full
        bg-gradient-to-r
        from-blue-500
        to-cyan-400
      "
    />

    {/* glow */}
    <span
      className="
        absolute
        -bottom-5
        left-2
        h-4
        w-[94%]
        rounded-full
        bg-blue-100
        blur-md
      "
    />
  </span>
</h1>

{/* Description */}
<p className="mt-7 max-w-[640px] text-[1.02rem] font-medium leading-[1.8] text-slate-600">
  From SAP CPQ and Variant Configuration through to S/4HANA, Commerce Cloud, and BTP — ConnectingCloud delivers end-to-end implementations, migrations, and AI-powered transformation programmes.
</p>

{/* Buttons */}
<div className="mt-9 flex flex-col gap-4 sm:flex-row">
  
  <button
    onClick={onContactClick}
    className="
      group inline-flex h-[60px] items-center justify-center
      rounded-[20px]
      bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600
      px-8
      text-[0.98rem]
      font-black
      text-white
      shadow-[0_18px_40px_rgba(59,130,246,0.24)]
      transition-all duration-300
      hover:-translate-y-1
    "
  >
    <Calendar className="mr-3 h-4.5 w-4.5" />

    Book Discovery Call

    <ArrowRight className="ml-3 h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
  </button>

  <button
    onClick={onCaseClick}
    className="
      h-[60px]
      rounded-[20px]
      border border-slate-200
      bg-white/80
      px-8
      text-[0.98rem]
      font-black
      text-slate-900
      shadow-sm
      backdrop-blur-xl
      transition-all duration-300
      hover:border-slate-300
      hover:bg-white
      hover:shadow-lg
    "
  >
    View Our Services
  </button>
</div>

{/* Trusted Logos */}
<div className="mt-12">
  
  <div className="flex items-center gap-4">
    <div className="h-px w-10 bg-gradient-to-r from-blue-500 to-transparent" />

    <p className="text-[10px] font-black uppercase tracking-[0.32em] text-slate-400">
      Trusted with
    </p>
  </div>

  <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-5 opacity-70">
    {companies.map((company, idx) => (
      <img
        key={idx}
        src={company.logo}
        alt={company.name}
        className={`${company.width} h-6 object-contain transition-all duration-300 hover:opacity-100`}
      />
    ))}
  </div>
</div>
        </div>

        {/* RIGHT STACK */}
        <div className="relative mx-auto w-full max-w-[460px]">
  
  {/* Glow */}
  <div className="absolute inset-0 rounded-[34px] bg-blue-200/20 blur-xl" />

  {/* Main Card */}
  <div
    className="
      relative overflow-hidden
      rounded-[30px]
      border border-white/70
      bg-white/70
      p-6
      shadow-[0_24px_60px_rgba(15,23,42,0.08)]
      backdrop-blur-2xl
    "
  >
    
    {/* Soft Gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-slate-50/80 to-blue-50/50" />

    <div className="relative">
      
      {/* Header */}
      <div className="mb-5 flex items-center justify-center gap-3">
        <div className="h-px w-10 bg-gradient-to-r from-cyan-500 to-transparent" />

        <p className="text-[10px] font-black uppercase tracking-[0.28em] text-slate-400">
          SAP CONFIGURATION STACK
        </p>
      </div>

      {/* Cards */}
      <div className="space-y-3.5">
        {stackItems.map((item, idx, arr) => (
          <div key={idx} className="relative">
            
            {/* Connector */}
            {idx !== arr.length - 1 && (
              <div className="absolute left-1/2 top-full z-0 h-3.5 w-px bg-blue-200">
                <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400" />
              </div>
            )}

            {/* Stack Card */}
            <div
              className="
                relative z-10
                flex items-center gap-4
                rounded-[22px]
                border border-white/80
                bg-white/80
                px-5 py-4
                shadow-[0_8px_24px_rgba(15,23,42,0.06)]
                backdrop-blur-xl
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-[0_12px_32px_rgba(15,23,42,0.10)]
              "
            >
              
              {/* Icon */}
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl ${item.color}`}
              >
                {item.icon}
              </div>

              {/* Text */}
              <div>
                <h3 className="text-[0.98rem] font-black tracking-tight text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-0.5 text-[12px] font-medium text-slate-500">
                  {item.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
      </div>
    </section>
  );
}

const ExpertiseGridSection = () => {
  const points = [
    {
      n: "01",
      t: "CPQ & VC/AVC is Our Only Focus",
      d: "No generalist bench here. Every consultant on your project has delivered CPQ, VC, or AVC before—not as a side capability, but as their primary specialism for years."
    },
    {
      n: "02",
      t: "We've Done the Hard Migrations",
      d: "Super-BOM VC models with thousands of dependency rules, multi-level engineer-to-order structures, legacy KB cleanup—we've migrated the ones other teams declined to scope."
    },
    {
      n: "03",
      t: "Full-Landscape Integration Depth",
      d: "We don't stop at the CPQ boundary. We own the integration: Sales Cloud, Commerce Cloud, S/4HANA, ECC, BTP, CPI—the complete configure-to-cash flow."
    },
    {
      n: "04",
      t: "SAP Partner Network Aligned",
      d: "We work alongside Capgemini, Deloitte, and other major SIs as a specialist sub-contractor—providing CPQ and VC/AVC depth that large practices need but rarely carry in-house."
    },
    {
      n: "05",
      t: "Pre-Built Accelerators",
      d: "Reusable CPQ configuration templates, AVC model libraries, CPI integration packs, and test scripts—we compress delivery timelines because we've solved these problems before."
    },
    {
      n: "06",
      t: "AI-Ready Architecture by Default",
      d: "Every CPQ and AVC implementation we deliver is designed for SAP Joule and BTP AI Core from the start—not retrofitted later. Your configuration data is your AI training asset."
    }
  ];

  return (
    <section className="bg-[#0b1219] py-28 px-6 lg:px-12 relative overflow-hidden">
      {/* Decorative subtle pulse */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] animate-pulse" />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-8 bg-blue-400" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-400">Why ConnectingCloud</span>
          </div>
          <h2 className="text-4xl lg:text-7xl font-black text-white tracking-tighter mb-8 italic">
            Specialist. Proven. Independent.
          </h2>
          <p className=" text-lg text-slate-400 leading-relaxed font-medium">
            We're not a generalist SAP house that does CPQ on the side. Configuration-to-quote is all we do — which means faster time-to-value, fewer surprises, and deeper expertise than you'll find inside a large SI practice.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((p, i) => (
            <div key={i} className="bg-[#151d26] border border-white/5 rounded-3xl p-10 group hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2">
              <div className="text-4xl font-black text-white/4 mb-6 group-hover:text-blue-500 transition-colors">
                {p.n}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 leading-tight">{p.t}</h3>
              <p className="text-sm text-slate-400 leading-relaxed font-medium">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

function Stats() {
  const stats = [
    { value: "50+", label: "CPQ & VC/AVC Projects Delivered" },
    { value: "12+", label: "Years SAP Configuration Expertise" },
    { value: "10+", label: "SAP Products Covered End-to-End" },
    { value: "6+", label: "VC-to-AVC Migrations Completed" },
  ];
  return (<section className="bg-slate-800 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-2 gap-y-12 md:grid-cols-4 md:gap-x-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <span className="text-5xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-emerald-300 via-cyan-400 to-blue-500 md:text-6xl">
                  {stat.value}
                </span>
                <p className="mt-4 max-w-[160px] text-[11px] font-bold uppercase tracking-[0.1em] text-slate-400 leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>);
}

function TrustSignals({ onCaseClick }) {
  return (
    <section className="border-y border-slate-100 bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-3 text-[10px] font-black uppercase tracking-[0.35em] text-blue-600">Proof early</p>
            <h2 className="text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
              Built for buyers who need less implementation risk.
            </h2>
            <p className="mt-5 text-base font-medium leading-relaxed text-slate-600">
              We make complex SAP and Salesforce landscapes easier to run by tying technical design to measurable revenue operations outcomes.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {TRUST_SIGNALS.map((item) => (
              <div key={item.value} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-2xl font-black text-slate-950">{item.value}</p>
                <p className="mt-2 text-xs font-bold uppercase tracking-widest text-slate-500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 rounded-3xl bg-slate-950 p-6 text-white sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-widest text-blue-300">Anonymized implementation briefs available</p>
            <p className="mt-2 text-sm font-medium text-slate-300">Review real patterns across CPQ optimization, AVC migration, CPI/BTP integration, and Revenue Cloud automation.</p>
          </div>
          <button onClick={onCaseClick} className="rounded-2xl bg-white px-6 py-3 text-xs font-black uppercase tracking-widest text-slate-950 transition-colors hover:bg-blue-50">
            View Proof
          </button>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    {
      badge: "NEW IMPLEMENTATION",
      title: "SAP CPQ Implementation",
      description:
        "Full configure-to-quote implementation — from product modelling and pricing engine through to CRM/ERP integration and go-live. CPQ Quote 1.0 and Quote 2.0.",
      points: [
        "Guided selling flows, attribute modelling, and pricing rules",
        "Multi-tier pricing: list, volume tiers, discounts, margin guardrails",
        "Proposal generation, digital signatures, approval workflows",
        "CRM integration: Sales Cloud, Salesforce, Dynamics via CPI",
        "ERP writeback to S/4HANA or ECC (material master, sales orders)",
        "Quote 1.0 → 2.0 migration: model, UI, scripts, and integrations",
      ],
      icon: <MessageSquare className="h-5 w-5" />,
      iconBg: "bg-indigo-50 text-indigo-600",
      glow: "from-blue-500/20 to-indigo-500/10",
      border: "hover:border-blue-300",
    },
    {
      badge: "NEW IMPLEMENTATION & MIGRATION",
      title: "SAP VC & AVC Implementation",
      description:
        "Back-end configuration engine implementation in ECC (VC/LO-VC) or S/4HANA (AVC) — including CPS setup on BTP for CPQ and Commerce Cloud integration.",
      points: [
        "VC knowledge base design: class hierarchy, characteristics, constraints",
        "AVC model build: BOL/BOPF architecture, Fiori UI, API-first design",
        "CPS configuration on BTP — config API gateway for CPQ and Commerce",
        "BOM and routing explosion: Super-BOM, multi-level, variant pricing",
        "SD and PP integration: configure-to-order and engineer-to-order",
        "VC-to-AVC migration: assessment, model rebuild, parallel validation",
      ],
      icon: <Settings2 className="h-5 w-5" />,
      iconBg: "bg-cyan-50 text-cyan-600",
      glow: "from-cyan-500/20 to-emerald-500/10",
      border: "hover:border-cyan-300",
    },
    {
      badge: "END-TO-END INTEGRATION",
      title: "SAP ERP, CRM & Commerce Integration",
      description:
        "Full landscape integration connecting CPQ, AVC/CPS, S/4HANA, Sales Cloud, and Commerce Cloud via BTP Integration Suite and CPI — the full configure-to-cash journey.",
      points: [
        "CPQ ↔ Sales Cloud CCV2: opportunity-to-quote and order writeback",
        "CPQ ↔ AVC via CPS: real-time config validation and pricing simulation",
        "Commerce Cloud ↔ CPS: embedded B2B self-service configurator",
        "CPQ / AVC ↔ S/4HANA: BOM explosion, production, and financials",
        "CPI flow design, monitoring, and error handling across all touchpoints",
        "Sales Cloud V1 → CCV2 migration with CPQ re-integration",
      ],
      icon: <Boxes className="h-5 w-5" />,
      iconBg: "bg-violet-50 text-violet-600",
      glow: "from-violet-500/20 to-fuchsia-500/10",
      border: "hover:border-violet-300",
    },
    {
      badge: "ERP TRANSFORMATION",
      title: "SAP ECC to S/4HANA Migration",
      description:
        "End-to-end ECC-to-S/4HANA migration with embedded VC-to-AVC transition — handling Brownfield, Bluefield, and Greenfield paths with deep configure-to-order expertise.",
      points: [
        "Landscape assessment: VC complexity, custom code, data volumes",
        "Migration path selection: Brownfield, Bluefield, or Greenfield",
        "VC-to-AVC migration run in parallel with S/4HANA cutover",
        "Custom code remediation: Readiness Check, ATC, deprecated APIs",
        "Data cleansing, BOM rationalisation, material master cleanup",
        "Full SD-PP-CO configure-to-production integration testing",
      ],
      icon: <Rocket className="h-5 w-5" />,
      iconBg: "bg-orange-50 text-orange-600",
      glow: "from-orange-500/20 to-amber-500/10",
      border: "hover:border-orange-300",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-20">
  {/* Background */}
  <div className="absolute inset-0 bg-[radial-gradient(#dbeafe_1px,transparent_1px)] [background-size:28px_28px] opacity-50" />
  <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-blue-100/40 blur-3xl" />
  <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-100/40 blur-3xl" />

  <div className="relative mx-auto max-w-6xl px-6">
    
    {/* Header */}
<div className="mx-auto max-w-3xl text-center">
  
  <div className="mb-5 flex items-center justify-center gap-3">
    <div className="h-px w-10 bg-gradient-to-r from-transparent to-cyan-500" />

    <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-slate-400">
      Core Services
    </p>

    <div className="h-px w-10 bg-gradient-to-l from-transparent to-cyan-500" />
  </div>

  <h2
    className="font-['Clash_Display'] text-[2.2rem] font-semibold leading-[0.95] tracking-[-0.05em] text-slate-950 md:text-[2.8rem]"
  >
    Implementation & Integration
    <br />
    Services
  </h2>

  <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-[1.8] text-slate-600">
    End-to-end delivery across the SAP configuration and commerce
    landscape — from initial CPQ and VC/AVC implementation through
    to full ERP, CRM, and Commerce integration.
  </p>
</div>

    {/* Cards */}
    <div className="mt-12 grid gap-5 lg:grid-cols-2">

      {/* Card 1 */}
      <div className="group relative overflow-hidden rounded-[24px] border border-blue-200/70 bg-white/80 p-6 shadow-[0_10px_35px_rgba(15,23,42,0.05)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(59,130,246,0.10)]">
        
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-white to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-100 to-blue-100 text-blue-600 shadow-sm">
            <MessageSquare className="h-4 w-4" />
          </div>

          <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.22em] text-blue-500">
            New Implementation
          </p>

          <h3 className="mt-3 text-[1.15rem] font-bold tracking-[-0.03em] text-slate-950">
            SAP CPQ Implementation
          </h3>

          <p className="mt-3 text-[12px] leading-[1.9] text-slate-600">
            Full configure-to-quote implementation — from product
            modelling and pricing engine through to CRM/ERP integration
            and go-live. CPQ Quote 1.0 and Quote 2.0.
          </p>

          <div className="mt-5 space-y-3">
            {[
              "Guided selling flows, attribute modelling, and pricing rules",
              "Multi-tier pricing list, volume tiers, discounts, margin guardrails",
              "Proposal generation, digital signatures, approval workflows",
              "CRM integration: Sales Cloud, Salesforce, Dynamics via CPI",
              "ERP writeback to S/4HANA or ECC (material master, sales orders)",
              "Quote 1.0 → 2.0 migration: model, UI, scripts, and integrations",
            ].map((item, idx) => (
              <div key={idx} className="flex gap-3">
                <span className="mt-[7px] h-[5px] w-[5px] rounded-full bg-blue-500" />
                
                <p className="text-[11.5px] leading-[1.8] text-slate-600">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="group relative overflow-hidden rounded-[24px] border border-emerald-200/70 bg-white/80 p-6 shadow-[0_10px_35px_rgba(15,23,42,0.05)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(16,185,129,0.10)]">
        
        <div className="relative">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-100 to-emerald-100 text-emerald-600">
            <Settings2 className="h-4 w-4" />
          </div>

          <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.22em] text-emerald-500">
            New Implementation & Migration
          </p>

          <h3 className="mt-3 text-[1.15rem] font-bold tracking-[-0.03em] text-slate-950">
            SAP VC & AVC Implementation
          </h3>

          <p className="mt-3 text-[12px] leading-[1.9] text-slate-600">
            Back-end configuration engine implementation in ECC (VC/LO-VC)
            or S/4HANA (AVC) — including CPS setup on BTP for CPQ and
            Commerce Cloud integration.
          </p>

          <div className="mt-5 space-y-3">
            {[
              "VC knowledge base design: class hierarchy, characteristics, constraints",
              "AVC model build: BOL/BOPF architecture, Fiori UI, API-first design",
              "CPS configuration on BTP — config API gateway for CPQ and Commerce",
              "BOM and routing explosion: Super-BOM, multi-level, variant pricing",
              "SD and PP integration: configure-to-order and engineer-to-order",
              "VC-to-AVC migration: assessment, model rebuild, parallel validation",
            ].map((item, idx) => (
              <div key={idx} className="flex gap-3">
                <span className="mt-[7px] h-[5px] w-[5px] rounded-full bg-emerald-500" />

                <p className="text-[11.5px] leading-[1.8] text-slate-600">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="group relative overflow-hidden rounded-[24px] border border-indigo-200/70 bg-white/80 p-6 shadow-[0_10px_35px_rgba(15,23,42,0.05)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(99,102,241,0.10)]">
        
        <div className="relative">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-100 to-blue-100 text-indigo-600">
            <Workflow className="h-4 w-4" />
          </div>

          <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.22em] text-indigo-500">
            End-to-End Integration
          </p>

          <h3 className="mt-3 text-[1.15rem] font-bold tracking-[-0.03em] text-slate-950">
            SAP ERP, CRM & Commerce Integration
          </h3>

          <p className="mt-3 text-[12px] leading-[1.9] text-slate-600">
            Full landscape integration connecting CPQ, AVC/CPS,
            S/4HANA, Sales Cloud, and Commerce Cloud via BTP
            Integration Suite and CPI.
          </p>

          <div className="mt-5 space-y-3">
            {[
              "CPQ ↔ Sales Cloud CCV2: opportunity-to-quote and order writeback",
              "CPQ ↔ AVC via CPS: real-time config validation and pricing simulation",
              "Commerce Cloud ↔ CPS: embedded B2B self-service configurator",
              "CPQ / AVC ↔ S/4HANA: BOM explosion, production, and financials",
              "CPI flow design, monitoring, and error handling across all touchpoints",
              "Sales Cloud V1 → CCV2 migration with CPQ re-integration",
            ].map((item, idx) => (
              <div key={idx} className="flex gap-3">
                <span className="mt-[7px] h-[5px] w-[5px] rounded-full bg-indigo-500" />

                <p className="text-[11.5px] leading-[1.8] text-slate-600">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="group relative overflow-hidden rounded-[24px] border border-orange-200/70 bg-white/80 p-6 shadow-[0_10px_35px_rgba(15,23,42,0.05)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(249,115,22,0.10)]">
        
        <div className="relative">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-100 to-red-100 text-orange-600">
            <Rocket className="h-4 w-4" />
          </div>

          <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.22em] text-orange-500">
            ERP Transformation
          </p>

          <h3 className="mt-3 text-[1.15rem] font-bold tracking-[-0.03em] text-slate-950">
            SAP ECC to S/4HANA Migration
          </h3>

          <p className="mt-3 text-[12px] leading-[1.9] text-slate-600">
            End-to-end ECC-to-S/4HANA migration with embedded VC-to-AVC
            transition — handling Brownfield, Bluefield, and Greenfield
            paths.
          </p>

          <div className="mt-5 space-y-3">
            {[
              "Landscape assessment: VC complexity, custom code, data volumes",
              "Migration path selection: Brownfield, Bluefield, or Greenfield",
              "VC-to-AVC migration run in parallel with S/4HANA cutover",
              "Custom code remediation: Readiness Check, ATC, deprecated APIs",
              "Data cleansing, BOM rationalisation, material master cleanup",
              "Full SD-PP-CO configure-to-production integration testing",
            ].map((item, idx) => (
              <div key={idx} className="flex gap-3">
                <span className="mt-[7px] h-[5px] w-[5px] rounded-full bg-orange-500" />

                <p className="text-[11.5px] leading-[1.8] text-slate-600">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}
const WorkingModelsSection = ({ onContactClick }) => (
  <section className="bg-slate-950 pb-24 pt-12">
    <div className="mx-auto max-w-7xl px-6 lg:px-12">
      <div className="mb-16">
        <div className="flex items-center gap-3">
          <div className="h-[1px] w-8 bg-emerald-500/50" />
          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-emerald-500">Who We Work With</span>
        </div>
        <h2 className="mt-6 text-4xl font-black tracking-tight text-white md:text-5xl lg:text-6xl">Two Ways We Work With You</h2>
        <p className="mt-6 text-lg leading-relaxed text-slate-400">
          Whether you're an SAP consulting partner looking to extend your CPQ and VC/AVC practice, or an enterprise running SAP and ready to transform your configure-to-quote process.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Partner Card */}
        <div className="group relative rounded-[2.5rem] border border-slate-800 bg-slate-900/50 p-8 transition-all hover:border-blue-500/30 hover:bg-slate-900/80 md:p-12">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-500/5 blur-[80px]" />
          <div className="mb-8 inline-flex items-center rounded-full bg-blue-500/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-blue-400 ring-1 ring-inset ring-blue-500/20">For SI Partners & Consulting Firms</div>
          <h3 className="text-3xl font-black text-white">Extend Your CPQ & VC Practice</h3>
          <ul className="mt-10 space-y-4">
            {["White-label CPQ and VC/AVC delivery", "Rapid onboarding in days, not months", "Pre-built model accelerators", "Certified SAP architects"].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                <Check className="mt-1 h-4 w-4 shrink-0 text-blue-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <button onClick={onContactClick} className="mt-12 flex h-12 items-center justify-center rounded-xl bg-blue-600 px-8 text-sm font-bold text-white transition-all hover:bg-blue-700 active:scale-95">Partner With Us —&gt;</button>
        </div>

        {/* Enterprise Card */}
        <div className="group relative rounded-[2.5rem] border border-slate-800 bg-slate-900/50 p-8 transition-all hover:border-orange-500/30 hover:bg-slate-900/80 md:p-12">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-orange-500/5 blur-[80px]" />
          <div className="mb-8 inline-flex items-center rounded-full bg-orange-500/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-orange-400 ring-1 ring-inset ring-orange-500/20">For Enterprise SAP Customers</div>
          <h3 className="text-3xl font-black text-white">Implement, Migrate, Modernise</h3>
          <ul className="mt-10 space-y-4">
            {["Fixed-scope implementation", "Full ERP-to-CRM-to-Commerce integration", "Specialist VC-to-AVC migration", "AI-readiness: Joule & ML Pricing"].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                <Check className="mt-1 h-4 w-4 shrink-0 text-orange-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <button onClick={onContactClick} className="mt-12 flex h-12 items-center justify-center rounded-xl bg-orange-600 px-8 text-sm font-bold text-white transition-all hover:bg-orange-700 active:scale-95">Talk to a Specialist —&gt;</button>
        </div>
      </div>
    </div>
  </section>
);
const LandscapeSection = () => {
  const products = [
    { title: "SAP CPQ", desc: "Configure, Price, Quote — cloud-native quoting platform with guided selling and multi-tier pricing.", tag: "PRIORITY", icon: <MessageSquare className="h-4 w-4" />, accent: "border-l-blue-500", tagBg: "bg-blue-50 text-blue-600" },
    { title: "SAP VC", desc: "Variant Configuration / LO-VC — ECC & S/4HANA back-end rules engine for configure-to-order.", tag: "PRIORITY", icon: <Settings2 className="h-4 w-4" />, accent: "border-l-slate-400", tagBg: "bg-slate-50 text-slate-600" },
    { title: "SAP AVC", desc: "Advanced Variant Configuration — the strategic, cloud-ready successor to VC on S/4HANA 2020+.", tag: "PRIORITY", icon: <Zap className="h-4 w-4" />, accent: "border-l-emerald-500", tagBg: "bg-emerald-50 text-emerald-600" },
    { title: "SAP CPS", desc: "Configuration, Pricing & Simulation — BTP-hosted API gateway connecting AVC with CPQ and Commerce.", tag: "PRIORITY", icon: <Layers className="h-4 w-4" />, accent: "border-l-indigo-500", tagBg: "bg-indigo-50 text-indigo-600" },
    { title: "Commerce Cloud", desc: "B2B/B2C digital storefront with embedded configurator via CPS for self-service buying journeys.", tag: "COMMERCE", icon: <ShoppingBag className="h-4 w-4" />, accent: "border-l-blue-600", tagBg: "bg-blue-50 text-blue-700" },
    { title: "Sales Cloud CCV2", desc: "CRM opportunity and quote management — tightly integrated with SAP CPQ for quote initiation and approvals.", tag: "CRM", icon: <Briefcase className="h-4 w-4" />, accent: "border-l-blue-500", tagBg: "bg-blue-50 text-blue-600" },
    { title: "SAP S/4HANA", desc: "Strategic ERP hosting AVC — order management, BOM explosion, production, and financials.", tag: "ERP", icon: <Factory className="h-4 w-4" />, accent: "border-l-slate-800", tagBg: "bg-slate-100 text-slate-800" },
    { title: "SAP ECC", desc: "Legacy ERP hosting LO-VC — the migration source for most VC-to-AVC and ECC-to-S/4HANA programmes.", tag: "LEGACY", accent: "border-l-slate-400", icon: <Database className="h-4 w-4" />, tagBg: "bg-slate-50 text-slate-600" },
    { title: "SAP BTP", desc: "Business Technology Platform — hosts CPS, AI Core, Joule, and all custom side-by-side extensions.", tag: "PLATFORM", accent: "border-l-emerald-600", icon: <Cpu className="h-4 w-4" />, tagBg: "bg-emerald-50 text-emerald-700" },
    { title: "SAP CPI", desc: "Cloud Platform Integration — middleware orchestrating all system-to-system flows across the landscape.", tag: "INTEGRATION", accent: "border-l-emerald-500", icon: <Globe className="h-4 w-4" />, tagBg: "bg-emerald-50 text-emerald-600" }
  ];

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center bg-slate-50/30 px-6 py-20 lg:h-screen lg:px-12">
      <div className="mx-auto w-full max-w-7xl">
        {/* Header matching image_09839e.png */}
        <div className="mb-12 flex flex-col items-start lg:mb-16">
          <div className="flex items-center gap-3">
            <div className="h-[2px] w-8 bg-blue-600" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-600">Full Landscape</span>
          </div>
          <h2 className="mt-8 text-4xl font-black tracking-tight text-slate-900 md:text-6xl">
            10 SAP Products. One Practice.
          </h2>
          <p className="mt-6 max-w-3xl text-base font-bold text-left leading-relaxed text-slate-500">
            ConnectingCloud covers the full SAP configuration and commerce ecosystem — from CPQ 
            and VC/AVC at the core through to S/4HANA, BTP, and Commerce Cloud at the edges.
          </p>
        </div>

        {/* Grid matching image_09839e.png */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {products.map((product, i) => (
            <div 
              key={i} 
              className={`group relative flex flex-col min-h-[220px] rounded-xl border border-slate-200 bg-white p-5 shadow-[0_2px_4px_rgba(0,0,0,0.02)] transition-all hover:-translate-y-1 hover:shadow-xl border-l-[3px] ${product.accent}`}
            >
              <div className="flex-1">
                <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50 text-slate-400 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  {product.icon}
                </div>
                <h3 className="text-sm font-black tracking-tight text-slate-900">{product.title}</h3>
                <p className="mt-2 text-[11px] leading-relaxed text-slate-500 line-clamp-4">
                  {product.desc}
                </p>
              </div>
              
              <div className="mt-6">
                <span className={`inline-block px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider ${product.tagBg}`}>
                  {product.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AIInnovationSection = () => {
  const cpqAI = [
    "Intelligent product recommendations",
    "ML-based discount optimisation",
    "Win-probability scoring",
    "Joule-generated proposals"
  ];
  
  const vcAI = [
    "AI-assisted conflict resolution",
    "ML-based BOM prediction",
    "Configuration model quality",
    "Similarity-based config search"
  ];

  return (
    <section className="bg-[#020617] px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <div className="flex items-center gap-3">
            <div className="h-[2px] w-8 bg-emerald-500" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-500">AI & INNOVATION</span>
          </div>
          <h2 className="mt-8 text-4xl font-black tracking-tight text-white md:text-6xl">
            AI-Powered Configuration & Quoting
          </h2>
          <p className="mt-6 max-w-3xl text-lg text-slate-400">
            SAP Joule and BTP AI Core are embedding AI across the landscape. 
            We design your architecture to be AI-ready from day one.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* CPQ AI Card */}
          <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50">
            <div className="bg-blue-600 px-8 py-6">
              <div className="flex items-center gap-2 text-white">
                <Bot size={20} />
                <h3 className="text-xl font-bold">AI for SAP CPQ</h3>
              </div>
              <p className="mt-1 text-xs text-blue-100/70">Guided selling • Pricing • Proposals</p>
            </div>
            <div className="space-y-4 p-8">
              {cpqAI.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CircleDot size={12} className="mt-1 text-blue-500" />
                  <span className="text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* VC AI Card */}
          <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50">
            <div className="bg-emerald-700 px-8 py-6">
              <div className="flex items-center gap-2 text-white">
                <Sparkles size={20} />
                <h3 className="text-xl font-bold">AI for SAP VC / AVC</h3>
              </div>
              <p className="mt-1 text-xs text-emerald-100/70">Resolution • Prediction • Quality</p>
            </div>
            <div className="space-y-4 p-8">
              {vcAI.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CircleDot size={12} className="mt-1 text-emerald-500" />
                  <span className="text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-500">
              <Zap size={24} />
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              <span className="font-bold text-emerald-500">SAP Joule & BTP AI Core</span> — embedded across the configuration landscape. 
              Joule surfaces in CPQ for quote assistance and natural language search. ConnectingCloud architects 
              your BTP AI Core setup so models train on your own configuration data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const MigrationSection = ({ onContactClick }) => {
  const migrationStats = [
    { val: "2027", desc: "ECC maintenance deadline" },
    { val: "3-6 mo", desc: "Typical VC-to-AVC timeline" },
    { val: "AVC+CPS", desc: "Required for CPQ integration" },
    { val: "AI-Ready", desc: "Unlocks Joule & ML config" },
  ];

  const journeySteps = [
    { num: "01", title: "KB Assessment", desc: "Complexity & custom code" },
    { num: "02", title: "Strategy & Design", desc: "Lift-and-shift vs redesign" },
    { num: "03", title: "AVC Model Build", desc: "Classes & CPS API setup" },
    { num: "04", title: "Parallel Validation", desc: "AVC vs VC output matching" },
    { num: "05", title: "Cutover & Decom.", desc: "Go-live & KB archiving" },
  ];

  return (
    <section className="relative flex min-h-screen flex-col items-center border-t border-slate-500 justify-center bg-slate-950 px-6 py-12 lg:h-screen lg:min-h-[850px] lg:max-h-[1100px] lg:px-12">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none md:h-[600px] md:w-[800px]" />

      <div className="mx-auto w-full max-w-7xl">
        
        {/* Compact Header */}
        <div className="mb-8 flex flex-col items-center text-center">
          <div className="flex items-center gap-3">
            <div className="hidden h-[1px] w-8 bg-orange-500/50 sm:block" />
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-orange-500 sm:text-[10px]">
              Hot Topic • Most Requested
            </span>
            <div className="hidden h-[1px] w-8 bg-orange-500/50 sm:block" />
          </div>
          <h2 className="mt-4 text-2xl font-black tracking-tight text-white sm:text-3xl md:text-5xl">
            The VC-to-AVC Migration Window
          </h2>
          <p className="mt-3 max-w-2xl text-[12px] leading-relaxed text-slate-400 sm:text-[14px]">
            As SAP phases out LO-VC, the move to Advanced Variant Configuration is the most complex 
            and commercially valuable transition in the configure-to-order space.
          </p>
        </div>

        {/* Bento Grid Layout - Responsive Column Management */}
        <div className="grid w-full gap-4 sm:gap-5 lg:grid-cols-3">
          
          {/* Main Pitch Card (Stacks on mobile, spans 2 columns on large) */}
          <div className="relative flex flex-col justify-center overflow-hidden rounded-[1.5rem] border border-slate-800 bg-slate-900/60 p-6 shadow-2xl backdrop-blur-md sm:rounded-[2rem] sm:p-8 lg:col-span-2 lg:p-10">
            <div className="mb-4 w-fit inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-orange-400 sm:text-[10px]">
              <Flame size={12} className="text-orange-500" />
              High Demand • Right Now
            </div>

            <h3 className="text-2xl font-black leading-tight text-white sm:text-3xl md:text-4xl">
              Your Legacy VC Knowledge Base Needs to Move to{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                AVC
              </span>
            </h3>

            <p className="mt-4 text-[12px] leading-relaxed text-slate-400 sm:text-[13px]">
              Legacy VC is embedded in ECC and early S/4HANA landscapes. Delaying migration  increases technical debt, integration complexity, and AI-readiness gaps. We deliver migrations for complex, multi-level Super-BOM models.
            </p>

            <button onClick={onContactClick} className="mt-6 w-full rounded-xl bg-orange-500 px-7 py-3 text-sm font-bold text-white transition-all hover:bg-orange-600 hover:shadow-[0_0_20px_rgba(249,115,22,0.3)] active:scale-95 sm:w-fit sm:mt-8">
              Book VC Assessment →
            </button>
          </div>

          {/* Stats Grid (2x2 Grid) */}
          <div className="grid grid-cols-2 gap-3 rounded-[1.5rem] border border-slate-800 bg-slate-900/40 p-4 shadow-2xl backdrop-blur-md sm:rounded-[2rem] sm:p-5">
            {migrationStats.map((stat, i) => (
              <div key={i} className="flex flex-col justify-center rounded-xl border border-slate-700/30 bg-slate-800/40 p-3 transition-all hover:bg-slate-800/80 sm:p-4">
                <span className="text-xl font-black tracking-tighter bg-gradient-to-br from-emerald-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent sm:text-2xl">
                  {stat.val}
                </span>
                <p className="mt-1 text-[9px] font-medium leading-relaxed text-slate-400 sm:mt-2 sm:text-[10px]">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Timeline Card (Full Width on all screens) */}
          <div className="relative rounded-[1.5rem] border border-slate-800 bg-slate-900/60 p-6 shadow-2xl backdrop-blur-md sm:rounded-[2rem] lg:col-span-3 lg:px-10 lg:py-8">
            <h4 className="mb-6 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500 sm:text-[10px]">
              Migration Journey — Methodology
            </h4>
            
            <div className="relative">
              {/* Responsive Connecting Line: Vertical on Small, Horizontal on Large */}
              <div className="absolute left-[13px] top-0 h-full w-[1.5px] bg-slate-800 sm:left-[15px] lg:left-0 lg:top-[15px] lg:h-[2px] lg:w-full" />
              
              <div className="flex flex-col gap-6 lg:flex-row lg:justify-between lg:gap-4">
                {journeySteps.map((step, idx) => (
                  <div key={idx} className="relative z-10 flex flex-row items-start gap-4 lg:flex-1 lg:flex-col lg:items-center lg:gap-3 lg:text-center">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-emerald-500/30 bg-slate-900 text-[9px] font-bold text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.1)] transition-colors hover:border-emerald-400 sm:h-8 sm:w-8 sm:text-[10px]">
                      {step.num}
                    </div>
                    <div className="lg:max-w-[160px]">
                      <h5 className="text-[12px] font-bold text-white sm:text-[13px]">{step.title}</h5>
                      <p className="mt-1 text-[9px] leading-relaxed text-slate-400 sm:text-[10px]">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const IntegrationEcosystem = () => {
  const logos = [
    { name: 'SAP S/4HANA', url: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg', isSap: true },
    { name: 'SAP VC', url: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg', isSap: true },
    { name: 'SAP AVC', url: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg', isSap: true },
    { name: 'Salesforce', url: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg', isSap: false },
    { name: 'DocuSign', url: 'https://cdn.prod.website-files.com/67d160f23e7ffa1df49339fc/67dcd2c2202a4f1f69625b75_logo%20vertical.svg', isSap: false },
    { name: 'Adobe Acrobat Sign', url: 'https://helpx.adobe.com/content/dam/help/mnemonics/sign_app_RGB_2017.svg', isSap: false },
    {name: "Zuora", url: "https://companieslogo.com/img/orig/ZUO-b984fcf6.png?t=1720244494", isSap: false}
  ];

  return (
    <section id="integrations" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-sm font-black text-blue-600 uppercase tracking-widest mb-4">Integration ecosystem</h2>
        <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Connect the platforms revenue teams already depend on.</h3>
        <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
          We translate platform complexity into reliable business outcomes: cleaner handoffs, fewer pricing mismatches, faster quote approvals, and stronger integration observability across <strong className="text-blue-600">SAP CPQ</strong>, <strong className="text-blue-600">S/4HANA</strong>, Salesforce, CPI/BTP, contract workflows, and signing tools.
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

function WhyUs({ onContactClick }) {
  const cardIcons = [
    <Layers size={28} />,
    <Zap size={28} />,
    <Target size={28} />,
    <TrendingUp size={28} />
  ];

  const cardColors = [
    { bg: 'bg-blue-50', border: 'border-blue-200', icon: 'text-blue-600', accent: 'from-blue-500/10', dot: 'bg-blue-500' },
    { bg: 'bg-amber-50', border: 'border-amber-200', icon: 'text-amber-600', accent: 'from-amber-500/10', dot: 'bg-amber-500' },
    { bg: 'bg-emerald-50', border: 'border-emerald-200', icon: 'text-emerald-600', accent: 'from-emerald-500/10', dot: 'bg-emerald-500' },
    { bg: 'bg-violet-50', border: 'border-violet-200', icon: 'text-violet-600', accent: 'from-violet-500/10', dot: 'bg-violet-500' }
  ];

  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="mb-20 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.35em] text-blue-600">Why Connecting Cloud</p>
            <h2 className="text-5xl font-black tracking-tight text-slate-950 md:text-6xl leading-[1.1]">
              Enterprise quality, specialist focus.
            </h2>
          </div>
          <div>
            <p className="text-lg font-medium leading-relaxed text-slate-600 mb-4">
              We deliver large SI execution with the speed and accountability of a specialized team.
            </p>
            <div className="flex items-center gap-2">
              <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-transparent rounded-full" />
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Direct architect access</span>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {WHY_US.map((item, idx) => {
            const colors = cardColors[idx];
            return (
              <div 
                key={item.title} 
                className={`group relative rounded-[2rem] border-2 ${colors.border} ${colors.bg} p-8 transition-all duration-300 hover:shadow-xl hover:border-blue-300 cursor-pointer overflow-hidden`}
              >
                {/* Gradient accent background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.accent} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                {/* Animated dot indicator */}
                <div className={`absolute -top-2 -right-2 w-4 h-4 ${colors.dot} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-150`} />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className={`mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl ${colors.bg} ${colors.icon} group-hover:scale-110 transition-transform duration-300`}>
                    {cardIcons[idx]}
                  </div>
                  
                  <h4 className="mb-3 text-lg font-black text-slate-950 leading-tight">{item.title}</h4>
                  <p className="text-sm font-medium leading-relaxed text-slate-600 group-hover:text-slate-900 transition-colors duration-300">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 h-1 w-0 ${colors.dot} group-hover:w-full transition-all duration-500`} />
              </div>
            );
          })}
        </div>

        {/* CTA Section - Enhanced */}
        <div className="relative rounded-[2.5rem] border-2 border-gradient-to-r from-blue-200 to-blue-100 bg-gradient-to-br from-blue-50 via-white to-blue-50/30 p-1 overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-200/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-300/10 rounded-full blur-3xl" />
          
          <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl border border-white p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200">
                  <Sparkles size={14} className="text-blue-600" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">Free consultation</span>
                </div>
                <h3 className="mb-3 text-3xl font-black text-slate-950">Free Architecture Review</h3>
                <p className="text-base font-medium text-slate-600 mb-4 max-w-2xl">
                  Identify your CPQ, integration, or Quote-to-Cash bottleneck. We'll diagnose the root cause and outline your first improvement path.
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    30-minute deep dive
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    Architect-led analysis
                  </div>
                </div>
              </div>
              <button 
                onClick={onContactClick} 
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 text-xs font-black uppercase tracking-widest text-white transition-all hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-1 whitespace-nowrap"
              >
                Schedule Call
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-center">
          <div className="flex items-center gap-2">
            <Shield size={18} className="text-blue-600" />
            <span className="text-sm font-medium text-slate-600">Enterprise-grade delivery</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-slate-300 rounded-full" />
          <div className="flex items-center gap-2">
            <CheckCircle2 size={18} className="text-emerald-600" />
            <span className="text-sm font-medium text-slate-600">Architect-led execution</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-slate-300 rounded-full" />
          <div className="flex items-center gap-2">
            <Zap size={18} className="text-amber-600" />
            <span className="text-sm font-medium text-slate-600">Faster time-to-value</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function IndustryFocus({ onContactClick }) {
  const focusIcons = [
    <LayoutGrid size={24} />,
    <Receipt size={24} />,
    <FileText size={24} />,
    <Network size={24} />,
    <ShoppingCart size={24} />,
    <Share2 size={24} />
  ];

  const focusColors = [
    { bg: 'bg-blue-50', border: 'border-blue-200', icon: 'text-blue-600', dot: 'bg-blue-500' },
    { bg: 'bg-emerald-50', border: 'border-emerald-200', icon: 'text-emerald-600', dot: 'bg-emerald-500' },
    { bg: 'bg-purple-50', border: 'border-purple-200', icon: 'text-purple-600', dot: 'bg-purple-500' },
    { bg: 'bg-rose-50', border: 'border-rose-200', icon: 'text-rose-600', dot: 'bg-rose-500' },
    { bg: 'bg-amber-50', border: 'border-amber-200', icon: 'text-amber-600', dot: 'bg-amber-500' },
    { bg: 'bg-cyan-50', border: 'border-cyan-200', icon: 'text-cyan-600', dot: 'bg-cyan-500' }
  ];

  return (
    <section className="bg-gradient-to-b from-white via-slate-50/50 to-white py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="mb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 border border-blue-200 mb-6">
              <Sparkles size={14} className="text-blue-600" />
              <span className="text-xs font-black uppercase tracking-[0.2em] text-blue-600">SEO-Ready focus areas</span>
            </div>
            <h2 className="text-5xl font-black text-middle tracking-tight text-slate-950 md:text-6xl leading-[1.1] mb-6">
              Service tracks buyers search for.
            </h2>
            <p className="text-lg font-medium leading-relaxed text-slate-600">
              We specialize in these dedicated solution areas—each designed as a separate revenue driver and SEO landing page opportunity.
            </p>
          </div>
        </div>

        {/* Items Grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 mb-20">
          {INDUSTRY_FOCUS.map((item, idx) => {
            const colors = focusColors[idx];
            return (
              <div
                key={item}
                className={`group relative rounded-[1.75rem] border-2 ${colors.border} ${colors.bg} p-7 transition-all duration-300 hover:shadow-lg hover:shadow-${colors.dot.replace('bg-', '')}/20 cursor-pointer overflow-hidden`}
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Animated accent corner */}
                <div className={`absolute -top-1 -right-1 w-8 h-8 ${colors.dot} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-150`} />

                {/* Icon section */}
                <div className="mb-5 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white group-hover:scale-110 transition-transform duration-300">
                  <div className={`${colors.icon}`}>{focusIcons[idx]}</div>
                </div>

                {/* Content */}
                <div className="relative z-10 pr-6">
                  <h4 className="font-black text-slate-950 text-sm md:text-base leading-tight group-hover:text-slate-900 transition-colors">
                    {item}
                  </h4>
                </div>

                {/* Right arrow indicator */}
                <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ChevronRight size={20} className={`${colors.icon}`} />
                </div>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 h-1 w-0 ${colors.dot} group-hover:w-full transition-all duration-500`} />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="relative rounded-[2rem] overflow-hidden">
          {/* Background with gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(37,99,235,0.2),transparent_50%)]" />

          <div className="relative backdrop-blur-sm px-8 md:px-12 py-12 md:py-16">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center lg:gap-16">
              <div>
                <p className="text-blue-100 text-sm font-black uppercase tracking-wider mb-3">Roadmap ahead</p>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-4 leading-tight">
                  Dedicated landing pages in development.
                </h3>
                <p className="text-blue-50/90 font-medium leading-relaxed text-base">
                  Each track will become a specialized SEO landing page with FAQs, implementation patterns, architecture diagrams, and conversion-optimized forms tailored to your search intent.
                </p>
              </div>
              <button
                onClick={onContactClick}
                className="group relative inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 text-xs font-black uppercase tracking-widest text-blue-600 transition-all hover:shadow-xl hover:shadow-blue-950/30 hover:-translate-y-1 whitespace-nowrap"
              >
                Discuss Your Niche
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Feature Badges */}
        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-100">
              <Search size={18} className="text-blue-600" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-black uppercase tracking-wider text-slate-500">Buyer-focused</p>
              <p className="text-sm font-bold text-slate-900">Search intent aligned</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-100">
              <TrendingUp size={18} className="text-emerald-600" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-black uppercase tracking-wider text-slate-500">Conversion</p>
              <p className="text-sm font-bold text-slate-900">Revenue channel ready</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-purple-100">
              <Sparkles size={18} className="text-purple-600" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-black uppercase tracking-wider text-slate-500">Specialist</p>
              <p className="text-sm font-bold text-slate-900">Deep service tracks</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessTeaser({ onMoreClick, onContactClick }) {
  return (
    <section className="pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-slate-950 rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full -mr-48 -mt-48" />
          <div className="relative z-10">
            <h3 className="text-4xl md:text-6xl font-black text-white mb-8">Ready to reduce Quote-to-Cash risk?</h3>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-12">Get a practical architecture review for SAP CPQ, S/4HANA AVC, CPI/BTP, Salesforce, or revenue workflow bottlenecks.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button onClick={onMoreClick} className="px-10 py-5 bg-white text-slate-950 font-black rounded-3xl hover:bg-blue-50 transition-all uppercase tracking-widest text-[11px]">The CCT Methodology</button>
              <button onClick={onContactClick} className="px-10 py-5 border border-white/20 text-white font-black rounded-3xl hover:bg-white/5 transition-all uppercase tracking-widest text-[11px]">Schedule Discovery Call</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
