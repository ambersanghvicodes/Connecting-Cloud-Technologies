import { useState } from 'react';
import { ArrowRight, Calendar, CheckCircle2, Cpu, Flame, Mail, Sparkles } from 'lucide-react';
import { navigate } from '../lib/router';

// SAP service and migration landing pages (ported from the previous site).

const goContact = (interest) => navigate(`/contact?interest=${encodeURIComponent(interest)}`);

const PAGE_ACCENTS = {
  'sap-cpq-implementation':      { primary:'#2563eb', soft:'rgba(37,99,235,.15)', border:'rgba(37,99,235,.35)', text:'#93C5FD', glow:'rgba(37,99,235,.25)' },
  'sap-avc-implementation':      { primary:'#0d9488', soft:'rgba(13,148,136,.15)', border:'rgba(13,148,136,.35)', text:'#5ECECE', glow:'rgba(13,148,136,.25)' },
  'sap-commissions-implementation':{ primary:'#d97706', soft:'rgba(217,119,6,.15)', border:'rgba(217,119,6,.35)', text:'#FCD34D', glow:'rgba(217,119,6,.25)' },
  'sap-vc-to-avc-migration':     { primary:'#0d9488', soft:'rgba(13,148,136,.15)', border:'rgba(13,148,136,.35)', text:'#5ECECE', glow:'rgba(13,148,136,.25)' },
  'sap-cpq-quote-2-migration':   { primary:'#2563eb', soft:'rgba(37,99,235,.15)', border:'rgba(37,99,235,.35)', text:'#93C5FD', glow:'rgba(37,99,235,.25)' },
  'ecc-to-s4hana-migration':     { primary:'#e85d26', soft:'rgba(232,93,38,.15)', border:'rgba(232,93,38,.35)', text:'#FFA07A', glow:'rgba(232,93,38,.25)' },
};

const LPHero = ({ eyebrow, h1, sub, badges, accent, onContact, ctaLabel, secondaryCta }) => {
  const a = accent || { primary:'#2563eb', soft:'rgba(37,99,235,.15)', border:'rgba(37,99,235,.35)', text:'#93C5FD', glow:'rgba(37,99,235,.25)' };
  return (
    <div className="relative overflow-hidden bg-slate-950 pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-10">
      {/* Grid texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{backgroundImage:'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)',backgroundSize:'48px 48px'}}/>
      {/* Glow blob */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full pointer-events-none blur-[120px]" style={{background:a.glow}}/>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none blur-[100px]" style={{background:a.soft}}/>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* eyebrow */}
        <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 mb-6 text-[11px] font-bold tracking-[.12em] uppercase" style={{background:a.soft,borderColor:a.border,color:a.text}}>
          {eyebrow}
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight mb-5" style={{letterSpacing:'-.025em'}}>{h1}</h1>
        <p className="text-base sm:text-xl text-white/50  leading-relaxed mb-8">{sub}</p>

        {/* Badge pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {badges.map((b,i)=>(
            <span key={i} className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1.5 rounded-full border" style={b.style}>
              {b.icon && <span>{b.icon}</span>}{b.label}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button onClick={onContact}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-black text-[12px] uppercase tracking-[.14em] text-white transition-all hover:scale-105 hover:shadow-xl"
            style={{background:a.primary,boxShadow:`0 0 24px ${a.glow}`}}>
            {ctaLabel || 'Book a Free Assessment'} <ArrowRight size={15}/>
          </button>
          {secondaryCta && (
            <button onClick={secondaryCta.onClick}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-black text-[12px] uppercase tracking-[.14em] text-white/70 border border-white/15 hover:border-white/30 hover:text-white transition-all">
              {secondaryCta.label}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// Stat bar under hero
const LPStats = ({ stats, accent }) => {
  const a = accent || { primary:'#2563eb', text:'#93C5FD' };
  return (
    <div className="bg-slate-900 border-b border-white/[.06]">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4">
        {stats.map((s,i)=>(
          <div key={i} className={`py-6 px-5 sm:px-8 text-center ${i < stats.length-1 ? 'border-r border-white/[.06]' : ''}`}>
            <div className="text-2xl sm:text-3xl font-black leading-none mb-1.5 tabular-nums" style={{color:s.color||a.text}}>{s.value}</div>
            <div className="text-[11px] text-white/35 leading-snug">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Section wrapper
const LPSection = ({ dark, tight, children }) => (
  <section className={`${tight?'py-12 sm:py-16':'py-16 sm:py-24'} px-4 sm:px-6 lg:px-10 ${dark ? 'bg-slate-900' : 'bg-white'}`}>
    <div className="max-w-6xl mx-auto">{children}</div>
  </section>
);

// Section label
const LPEye = ({ color, children }) => (
  <div className="inline-flex items-center gap-2 text-[10px] font-black tracking-[.18em] uppercase mb-3" style={{color}}>
    <span className="w-5 h-0.5 rounded inline-block" style={{background:color}}/>
    {children}
  </div>
);

const LPH2 = ({ dark, children }) => (
  <h2 className={`text-2xl sm:text-4xl font-black tracking-tight mb-3 leading-[1.1] ${dark?'text-white':'text-slate-900'}`} style={{letterSpacing:'-.02em'}}>{children}</h2>
);

const LPP = ({ dark, children }) => (
  <p className={`text-base sm:text-lg leading-relaxed mb-10 ${dark?'text-white/50':'text-slate-500'}`}>{children}</p>
);

// Feature card
const LPCard = ({ children, accent, dark, className='' }) => (
  <div className={`rounded-2xl border transition-all duration-200 hover:-translate-y-1 hover:shadow-xl overflow-hidden
    ${dark ? 'bg-white/[.04] border-white/[.08] hover:border-white/20' : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'}
    ${accent ? 'border-l-[3px]' : ''} ${className}`}
    style={accent ? {borderLeftColor:accent} : {}}>
    {children}
  </div>
);

// Bullet item
const LPLi = ({ color, dark, children }) => (
  <div className={`flex gap-3 text-sm leading-relaxed items-start ${dark?'text-white/65':'text-slate-600'}`}>
    <CheckCircle2 size={15} className="mt-0.5 shrink-0" style={{color}}/>
    <span>{children}</span>
  </div>
);

// Numbered steps
const LPSteps = ({ steps, color, dark }) => (
  <div className="relative mt-10">
    <div className="hidden lg:block absolute top-[22px] left-[calc(10%+22px)] right-[calc(10%+22px)] h-px" style={{background:`linear-gradient(90deg,${color}40,${color})`}}/>
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-5">
      {steps.map((s,i)=>(
        <div key={i} className="flex lg:flex-col items-start lg:items-center gap-4 relative z-10">
          <div className={`w-11 h-11 shrink-0 rounded-full flex items-center justify-center text-[13px] font-black border-2 ${dark?'bg-slate-900':'bg-white'}`}
            style={{color,borderColor:color}}>{s.n}</div>
          <div className="lg:text-center">
            <div className={`text-xs font-bold leading-tight mb-1 ${dark?'text-white':'text-slate-800'}`}>{s.t}</div>
            <div className={`text-[11px] leading-snug ${dark?'text-white/40':'text-slate-500'}`}>{s.s}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// FAQ accordion
const LPFaq = ({ items, dark }) => {
  const [open, setOpen] = useState(null);
  return (
    <div className="max-w-3xl space-y-2.5 mt-6">
      {items.map((item,i)=>(
        <div key={i} className={`rounded-2xl border overflow-hidden transition-all ${dark?'bg-white/[.04] border-white/[.08]':'bg-white border-slate-200'}`}>
          <button onClick={()=>setOpen(open===i?null:i)}
            className="w-full flex justify-between items-center gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left group">
            <span className={`text-sm font-semibold leading-snug ${dark?'text-white':'text-slate-900'}`}>{item.q}</span>
            <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all ${open===i?'rotate-45':'rotate-0'} ${dark?'bg-white/10':'bg-slate-100'}`}>
              <span className={`text-base font-bold ${dark?'text-white':'text-slate-600'}`}>+</span>
            </div>
          </button>
          {open===i && <div className={`px-5 sm:px-6 pb-5 text-sm leading-relaxed ${dark?'text-white/55':'text-slate-600'}`}>{item.a}</div>}
        </div>
      ))}
    </div>
  );
}

// CTA block
const LPCTA = ({ heading, sub, ctaLabel, onContact, accent }) => {
  const a = accent || { primary:'#2563eb', soft:'rgba(37,99,235,.1)', glow:'rgba(37,99,235,.3)' };
  return (
    <div className="relative rounded-[2rem] overflow-hidden">
      <div className="absolute inset-0 bg-slate-950"/>
      <div className="absolute inset-0" style={{background:`radial-gradient(ellipse 70% 60% at 30% 50%, ${a.soft}, transparent)`}}/>
      <div className="relative px-8 sm:px-14 py-14 sm:py-20 text-center">
        <h2 className="text-2xl sm:text-4xl font-black text-white mb-4 leading-tight" style={{letterSpacing:'-.02em'}}>{heading}</h2>
        <p className="text-base sm:text-lg text-white/50 max-w-lg mx-auto mb-10">{sub}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button onClick={onContact}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-black text-[12px] uppercase tracking-[.14em] text-white transition-all hover:scale-105 hover:shadow-xl"
            style={{background:a.primary,boxShadow:`0 8px 32px ${a.glow}`}}>
            <Calendar size={15}/> {ctaLabel}
          </button>
          <a href="mailto:info@connectingcloud.co"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-black text-[12px] uppercase tracking-[.14em] text-white/60 border border-white/15 hover:border-white/30 hover:text-white transition-all">
            <Mail size={14}/> info@connectingcloud.co
          </a>
        </div>
        <p className="text-[11px] text-white/25 mt-6">No commitment · Available globally</p>
      </div>
    </div>
  );
}

// Comparison card (dark-themed two column)
const LPCompareCard = ({ title, subtitle, items, color, dark }) => (
  <div className={`rounded-2xl border p-6 sm:p-8 ${dark ? 'bg-white/[.04] border-white/10' : 'bg-white border-slate-200 shadow-sm'}`}
    style={{borderTopWidth:3,borderTopColor:color}}>
    <div className="text-xs font-black uppercase tracking-widest mb-1" style={{color}}>{title}</div>
    {subtitle && <p className={`text-[11px] mb-5 ${dark?'text-white/40':'text-slate-500'}`}>{subtitle}</p>}
    <div className="space-y-3">
      {items.map((it,j)=><LPLi key={j} color={color} dark={dark}>{it}</LPLi>)}
    </div>
  </div>
);

// ─── 1. SAP CPQ Implementation ───────────────────────────────────────────
export function SapCpqImplementation() {
  const ac = PAGE_ACCENTS['sap-cpq-implementation'];
  return (
    <div className="bg-white min-h-screen">
      <LPHero
        accent={ac}
        eyebrow="SAP CPQ · New Implementation"
        h1="SAP CPQ Implementation Services"
        sub="Full configure-to-quote delivery — from product modelling and IronPython scripting to Responsive UI, pricing engine, and CRM/ERP integration. Quote 1.0 and Quote 2.0."
        badges={[
          {label:'Quote 1.0 & 2.0',style:{background:'rgba(37,99,235,.15)',borderColor:'rgba(37,99,235,.35)',color:'#93C5FD'}},
          {label:'IronPython Scripting',style:{background:'rgba(13,148,136,.15)',borderColor:'rgba(13,148,136,.35)',color:'#5ECECE'}},
          {label:'Responsive UI',style:{background:'rgba(37,99,235,.15)',borderColor:'rgba(37,99,235,.35)',color:'#93C5FD'}},
          {label:'S/4HANA & ECC Integration',style:{background:'rgba(100,116,139,.15)',borderColor:'rgba(100,116,139,.35)',color:'#94A3B8'}},
        ]}
        onContact={()=>goContact('SAP CPQ / VC / AVC')}
        ctaLabel="Book a Free CPQ Scoping Call"
        secondaryCta={{label:'SAP Practice', onClick:()=>navigate('/sap')}}
      />

      <LPStats accent={ac} stats={[
        {value:'50+', label:'CPQ implementations delivered', color:ac.text},
        {value:'Q1.0 & Q2.0', label:'Both CPQ release models supported', color:'#5ECECE'},
        {value:'6–16 wk', label:'Typical go-live timeline', color:ac.text},
        {value:'Full stack', label:'CRM · ERP · Commerce integration', color:'#5ECECE'},
      ]}/>

      {/* Scope */}
      <LPSection>
        <LPEye color={ac.primary}>Scope</LPEye>
        <LPH2>What a CCT CPQ Implementation Includes</LPH2>
        <LPP>We cover every layer — from product model and pricing logic through IronPython scripting, Responsive UI, and the integrations that connect CPQ to your CRM and ERP.</LPP>
        <div className="grid md:grid-cols-2 gap-5">
          {[
            {title:'Product & Pricing Model', items:['Product hierarchy, attribute definition, and option set configuration','Guided selling flows — conditional logic, dependency rules, intelligent defaults','Multi-tier pricing: list price, volume tiers, discounts, surcharges, margin floors','IronPython script development: calculation scripts, constraint logic, event-based automation','Approval workflow engine: routing by margin, discount depth, and deal value thresholds']},
            {title:'UI, Documents & Integration', items:['Responsive UI template build: DealViewPage, Quote Custom Sections, product pages','Document generation: Responsive Design output templates, proposal branding','CRM integration: SAP Sales Cloud CCV2, Salesforce, Microsoft Dynamics via CPI','ERP integration: SAP S/4HANA or ECC — order creation, pricing conditions, material master','SAP Commerce Cloud: embedded configurator via CPS and REST API']},
          ].map((card,i)=>(
            <LPCard key={i} accent={ac.primary}>
              <div className="p-6 sm:p-8">
                <h3 className="text-sm font-black mb-5" style={{color:ac.primary}}>{card.title}</h3>
                <div className="space-y-3">{card.items.map((it,j)=><LPLi key={j} color={ac.primary}>{it}</LPLi>)}</div>
              </div>
            </LPCard>
          ))}
        </div>
      </LPSection>

      {/* Quote 1 vs 2 */}
      <LPSection dark>
        <LPEye color={ac.text}>Platform</LPEye>
        <LPH2 dark>Quote 1.0 vs Quote 2.0 — We Deliver Both</LPH2>
        <LPP dark>SAP no longer issues new Quote 1.0 licences. All new implementations should target Quote 2.0, with its stateless architecture, Responsive UI, and native S/4HANA alignment.</LPP>
        <div className="grid md:grid-cols-2 gap-5">
          <LPCompareCard dark color="#2563eb" title="SAP CPQ Quote 2.0 — Strategic Release"
            items={['Stateless, event-driven architecture — IronPython via context object API','Responsive Design UI — fully mobile-ready, replaces deprecated Classic Design','Business Partners (Sold-To, Bill-To, Ship-To) replacing flat Customer records','Solution Design for multi-section quotes with team assignments','Supports up to 100,000 line items — no memory degradation at scale']}/>
          <LPCompareCard dark color="#64748b" title="SAP CPQ Quote 1.0 — Legacy Support"
            items={['Stateful architecture — full quote loaded into memory on every click','Classic Design UI — deprecated, no new SAP investment','Customer-based data model — not aligned with S/4HANA Business Partner structure','Still in active use — CCT provides full support','Migration to Quote 2.0 available as a separate workstream']}/>
        </div>
      </LPSection>

      {/* Methodology */}
      <LPSection>
        <LPEye color={ac.primary}>Methodology</LPEye>
        <LPH2>CPQ Implementation Methodology</LPH2>
        <LPP>Five phases from discovery to hypercare — designed to minimise risk and compress time-to-value.</LPP>
        <LPSteps color={ac.primary} steps={[
          {n:'01',t:'Discovery & Design',s:'Pricing model, product catalogue, integration landscape, approval rules'},
          {n:'02',t:'Model Build',s:'Products, attributes, IronPython scripts, pricing engine, Responsive UI'},
          {n:'03',t:'Integration Build',s:'CRM, ERP, Commerce Cloud via CPI — end-to-end data flows'},
          {n:'04',t:'UAT & Training',s:'User acceptance testing, sales team enablement, document sign-off'},
          {n:'05',t:'Go-Live & Hypercare',s:'Cutover, hypercare support, performance monitoring'},
        ]}/>
      </LPSection>

      {/* FAQ */}
      <LPSection>
        <LPEye color="#64748b">FAQ</LPEye>
        <LPH2>Frequently Asked Questions</LPH2>
        <LPFaq items={[
          {q:'How long does an SAP CPQ implementation take?',a:'A standard SAP CPQ Quote 2.0 implementation typically takes 8–16 weeks depending on product catalogue complexity, the number of IronPython scripts required, and integration scope. Simple deployments can go live in 6–8 weeks; complex ones with multi-level hierarchies and S/4HANA integration run 14–20 weeks.'},
          {q:'What scripting language does SAP CPQ use?',a:'SAP CPQ uses IronPython for all scripting — calculation scripts, constraint logic, event handlers, and automation. In Quote 2.0, scripts fire on discrete events via the context object API rather than on every user click as in Quote 1.0.'},
          {q:'What is the Responsive UI in SAP CPQ Quote 2.0?',a:'Responsive Design is the modern SAP CPQ UI framework used in Quote 2.0. It replaces the deprecated Classic Design (obsolete end of 2025), supports mobile/tablet natively, and uses a component-based template structure. All custom templates must be built on this framework.'},
          {q:'Can SAP CPQ integrate with Salesforce or Microsoft Dynamics?',a:'Yes — SAP CPQ integrates with Salesforce CRM, Microsoft Dynamics, and SAP Sales Cloud CCV2 via pre-built connectors and custom CPI integration flows. ConnectingCloud uses SAP BTP Integration Suite as the integration middleware.'},
          {q:'Do we need SAP AVC and CPS for CPQ to work?',a:'Not for basic functionality — CPQ can run with its own configuration engine. However, for complex manufacturing products modelled in AVC, connecting CPQ to AVC via CPS on BTP enables real-time BOM validation during quoting.'},
        ]}/>
      </LPSection>

      <LPSection tight>
        <LPCTA accent={ac} heading="Ready to Implement SAP CPQ?" sub="Book a free 30-minute scoping call. We'll review your product catalogue, pricing model, and integration landscape." ctaLabel="Book a Free CPQ Scoping Call" onContact={()=>goContact('SAP CPQ / VC / AVC')}/>
      </LPSection>
    </div>
  );
}

// ─── 2. SAP AVC Implementation ───────────────────────────────────────────
export function SapAvcImplementation() {
  const ac = PAGE_ACCENTS['sap-avc-implementation'];
  return (
    <div className="bg-white min-h-screen">
      <LPHero
        accent={ac}
        eyebrow="SAP VC · SAP AVC · SAP CPS · Priority Implementation"
        h1="SAP Variant Configuration & Advanced Variant Configuration Implementation"
        sub="Full implementation of SAP VC (LO-VC) in ECC/S4 and SAP AVC in S/4HANA 2020+ — including CPS setup on BTP for CPQ integration, BOM/routing explosion, and SD/PP configure-to-order."
        badges={[
          {label:'SAP AVC · S/4HANA 2020+',style:{background:ac.soft,borderColor:ac.border,color:ac.text}},
          {label:'SAP VC · ECC & S/4HANA',style:{background:ac.soft,borderColor:ac.border,color:ac.text}},
          {label:'SAP CPS on BTP',style:{background:'rgba(13,148,136,.15)',borderColor:'rgba(13,148,136,.35)',color:'#5ECECE'}},
          {label:'CPQ Integration',style:{background:ac.soft,borderColor:ac.border,color:ac.text}},
        ]}
        onContact={()=>goContact('SAP CPQ / VC / AVC')}
        ctaLabel="Book a Free AVC Scoping Call"
        secondaryCta={{label:'View Methodology', onClick:()=>navigate('/approach')}}
      />

      <LPStats accent={ac} stats={[
        {value:'AVC + CPS', label:'Required for CPQ deep integration', color:ac.text},
        {value:'S/4 2020+', label:'AVC available from this release', color:ac.text},
        {value:'ECC & S/4', label:'VC supported on both platforms', color:ac.text},
        {value:'Priority', label:'Our highest-demand specialism', color:ac.text},
      ]}/>

      {/* VC vs AVC */}
      <LPSection>
        <LPEye color={ac.primary}>Products</LPEye>
        <LPH2>VC vs AVC — Understanding the Difference</LPH2>
        <LPP>SAP VC and SAP AVC serve the same fundamental purpose — enabling complex product configuration in the ERP — but differ substantially in architecture, integration capability, and strategic direction.</LPP>
        <div className="grid md:grid-cols-2 gap-5">
          <LPCard accent="#64748b">
            <div className="p-6 sm:p-8">
              <h3 className="text-sm font-black text-slate-700 mb-1">SAP Variant Configuration (VC / LO-VC)</h3>
              <p className="text-[11px] text-slate-400 mb-5">SAP ECC and S/4HANA · Back-End Configuration Engine</p>
              <div className="space-y-3">
                <LPLi color="#64748b">Characteristic-value assignment with dependency rules: constraints, procedures, selection conditions</LPLi>
                <LPLi color="#64748b">BOM and routing explosion via Super-BOM — supports multi-level, engineer-to-order models</LPLi>
                <LPLi color="#64748b">Deep SD (sales order) and PP (production) integration for CTO and ETO manufacturing</LPLi>
                <LPLi color="#64748b">Knowledge Base (KB) managed via Classification System and VC workbench</LPLi>
              </div>
            </div>
          </LPCard>
          <LPCard accent={ac.primary}>
            <div className="p-6 sm:p-8">
              <h3 className="text-sm font-black mb-1" style={{color:ac.primary}}>SAP Advanced Variant Configuration (AVC)</h3>
              <p className="text-[11px] text-slate-400 mb-5">S/4HANA 2020+ · Cloud-Ready · Strategic Next Generation</p>
              <div className="space-y-3">
                <LPLi color={ac.primary}>Enhanced constraint modelling with BOL/BOPF architecture and SAP Fiori UI</LPLi>
                <LPLi color={ac.primary}>Full CPQ integration via CPS on BTP — real-time configuration validation during quoting</LPLi>
                <LPLi color={ac.primary}>API-first design for integration with Commerce Cloud and external portals</LPLi>
                <LPLi color={ac.primary}>High-volume, real-time performance — outperforms legacy VC at enterprise scale</LPLi>
                <LPLi color={ac.primary}>Strategic replacement for LO-VC in new S/4HANA deployments</LPLi>
              </div>
            </div>
          </LPCard>
        </div>
      </LPSection>

      {/* CPS */}
      <LPSection dark>
        <LPEye color={ac.text}>CPS</LPEye>
        <LPH2 dark>SAP CPS — The Integration Bridge Between AVC and CPQ</LPH2>
        <LPP dark>SAP Configuration, Pricing & Simulation (CPS) is a BTP-hosted microservice that exposes AVC configuration models as REST APIs — enabling SAP CPQ and Commerce Cloud to validate configurations and simulate pricing in real time.</LPP>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            {title:'AVC → CPQ', body:'CPS exposes AVC configuration models as REST APIs. When a sales rep configures a product in SAP CPQ, CPS validates the configuration against AVC rules and returns pricing in real time.'},
            {title:'AVC → Commerce', body:'CPS enables B2B self-service configuration in SAP Commerce Cloud — customers configure complex products in the portal, validated against the same AVC model used by the sales team.'},
            {title:'Session Management', body:'CPS manages configuration session state for complex multi-step, multi-user workflows — ensuring consistency across CPQ, Commerce, and S/4HANA without direct AVC coupling.'},
          ].map((c,i)=>(
            <div key={i} className="bg-white/[.04] rounded-2xl border border-white/[.08] p-6 hover:border-white/20 transition-all">
              <div className="text-[11px] font-black uppercase tracking-widest mb-3" style={{color:ac.text}}>{c.title}</div>
              <p className="text-sm text-white/55 leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </LPSection>

      <LPSection>
        <LPEye color={ac.primary}>Methodology</LPEye>
        <LPH2>AVC Implementation Methodology</LPH2>
        <LPSteps color={ac.primary} steps={[
          {n:'01',t:'Requirements & Model Design',s:'Product complexity, class hierarchy, constraint analysis'},
          {n:'02',t:'AVC Model Build',s:'Classes, constraints, configuration profiles, variant pricing'},
          {n:'03',t:'CPS Setup on BTP',s:'API configuration, session management, CPQ & Commerce mapping'},
          {n:'04',t:'BOM & SD/PP Integration',s:'Routing explosion, sales order flow, production confirmation'},
          {n:'05',t:'UAT & Go-Live',s:'Configure-to-order end-to-end validation and cutover'},
        ]}/>
      </LPSection>

      <LPSection>
        <LPEye color="#64748b">FAQ</LPEye>
        <LPH2>Frequently Asked Questions</LPH2>
        <LPFaq items={[
          {q:'What is SAP Advanced Variant Configuration (AVC)?',a:'SAP AVC is the next-generation product configuration engine for SAP S/4HANA, replacing legacy LO-VC. It uses a class-based model with BOL/BOPF architecture, SAP Fiori UI, and API-first design enabling deep CPQ integration via CPS on BTP. Available from S/4HANA 2020 onwards.'},
          {q:'What is the difference between SAP VC and SAP AVC?',a:'SAP VC (LO-VC) is the original ERP-embedded engine available in ECC and S/4HANA. AVC is the cloud-ready successor with modern architecture and REST APIs. AVC is required for full CPQ integration via CPS on BTP — VC alone cannot deliver real-time CPQ-to-ERP configuration validation.'},
          {q:'Do I need CPS to use AVC with CPQ?',a:'Yes — SAP CPS (Configuration, Pricing & Simulation) is the required integration layer between AVC and SAP CPQ. CPS is deployed on BTP and exposes AVC models as REST APIs that CPQ consumes for real-time product validation and pricing simulation during quote creation.'},
          {q:'Can SAP VC and AVC run in parallel during a migration?',a:'Yes — and parallel running is a key phase of every VC-to-AVC migration. During parallel validation, configured orders are processed through both VC and AVC to confirm correctness before cutover. This phase typically runs for 4–8 weeks.'},
          {q:'Is AVC available on S/4HANA Cloud Public Edition?',a:'SAP AVC is supported on S/4HANA on-premise and Private Edition. Support on Public Edition is limited. If you are on Public Cloud, discuss your configuration requirements with ConnectingCloud before committing to an AVC implementation approach.'},
        ]}/>
      </LPSection>

      <LPSection tight>
        <LPCTA accent={ac} heading="Ready to Implement SAP AVC?" sub="Book a free scoping call. We'll assess your product complexity, BOM structure, and integration requirements." ctaLabel="Book a Free AVC Scoping Call" onContact={()=>goContact('SAP CPQ / VC / AVC')}/>
      </LPSection>
    </div>
  );
}

// ─── 3. SAP Commissions Implementation ───────────────────────────────────
export function SapCommissionsImplementation() {
  const ac = PAGE_ACCENTS['sap-commissions-implementation'];
  const features = [
    {icon:'💰',title:'Incentive Plan Administration',body:'Define complex compensation plans with quotas, accelerators, draws, splits, clawbacks, and multi-currency payout rules.'},
    {icon:'⚡',title:'Commission Calculation Engine',body:'Process millions of transactions at enterprise scale — eliminating spreadsheet errors and the shadow accounting that follows them.'},
    {icon:'🗺',title:'Territory & Quota Management',body:'Align sales territories and quota distribution with business strategy — with versioning, approval workflows, and rep-level visibility.'},
    {icon:'👁',title:'Real-Time Earnings Visibility',body:'Sales reps see projected and actual commissions live — reducing disputes, shadow accounting, and morale issues from comp uncertainty.'},
    {icon:'🔄',title:'Dispute Management',body:'Structured workflow for payee disputes and inquiries — traceable back to the source transaction with full audit history.'},
    {icon:'📊',title:'Analytics & Reporting',body:'Attainment dashboards, earnings projections, comp cost modelling, and pipeline performance — for reps, managers, and finance.'},
  ];
  return (
    <div className="bg-white min-h-screen">
      <LPHero
        accent={ac}
        eyebrow="SAP Commissions · Formerly Callidus Cloud · ICM"
        h1="SAP Commissions Implementation Services"
        sub="End-to-end SAP Commissions implementation — commission plan design, territory & quota management, real-time earnings visibility, and CPQ-to-Commissions integration via BTP and CPI."
        badges={[
          {label:'Incentive Compensation',style:{background:ac.soft,borderColor:ac.border,color:ac.text}},
          {label:'Territory & Quota',style:{background:ac.soft,borderColor:ac.border,color:ac.text}},
          {label:'CPQ Integration',style:{background:'rgba(13,148,136,.15)',borderColor:'rgba(13,148,136,.35)',color:'#5ECECE'}},
          {label:'Acquired by SAP 2018',style:{background:ac.soft,borderColor:ac.border,color:ac.text}},
        ]}
        onContact={()=>goContact('SAP Commissions')}
        ctaLabel="Book a Free Commissions Discovery Call"
      />

      <LPStats accent={ac} stats={[
        {value:'#1', label:'Cloud ICM platform globally', color:ac.text},
        {value:'2018', label:'SAP acquired Callidus for $2.4B', color:ac.text},
        {value:'CPQ→Pay', label:'Full Quote-to-Commission workflow', color:'#5ECECE'},
        {value:'Zero', label:'Manual comp entry — fully automated', color:ac.text},
      ]}/>

      <LPSection>
        <LPEye color={ac.primary}>Platform</LPEye>
        <LPH2>What is SAP Commissions?</LPH2>
        <LPP>SAP Commissions (formerly Callidus Cloud) is the world's leading cloud-based Incentive Compensation Management platform — part of the SAP Sales Cloud and Customer Experience portfolio since the $2.4B acquisition in 2018.</LPP>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((c,i)=>(
            <div key={i} className="bg-white rounded-2xl border border-slate-200 border-t-4 p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-200" style={{borderTopColor:ac.primary}}>
              <div className="text-2xl mb-4">{c.icon}</div>
              <h3 className="text-sm font-black mb-2" style={{color:ac.primary}}>{c.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </LPSection>

      <LPSection dark>
        <LPEye color={ac.text}>Integration</LPEye>
        <LPH2 dark>SAP Commissions + SAP CPQ: Quote → Win → Pay</LPH2>
        <LPP dark>ConnectingCloud connects SAP CPQ and SAP Commissions via BTP and CPI to create a fully automated Quote-to-Commission workflow — when a CPQ quote is approved and a sales order created, commission is calculated automatically.</LPP>
        <div className="grid md:grid-cols-2 gap-5">
          {[
            {title:'How the integration works', items:['CPQ quote approved → sales order created in S/4HANA','CPI flow ingests deal data: product lines, revenue, discount, territory, rep/payee','SAP Commissions calculates commission based on active plan rules','Rep sees updated earnings projection in real time via Commissions portal','Finance sees comp cost vs forecast — no manual reconciliation']},
            {title:'Business outcomes', items:['Zero manual commission entry — eliminated across the sales org','Disputes traced to exact CPQ quote and line items — fully auditable','Business Partners in CPQ map directly to Payees in Commissions','Commission calculations run in minutes, not month-end batch','Sales reps close deals faster — comp uncertainty no longer a distraction']},
          ].map((card,i)=>(
            <div key={i} className="bg-white/[.04] rounded-2xl border border-white/[.08] p-6 sm:p-8">
              <h3 className="text-sm font-black mb-5" style={{color:ac.text}}>{card.title}</h3>
              <div className="space-y-3">{card.items.map((it,j)=><LPLi key={j} color={ac.primary} dark>{it}</LPLi>)}</div>
            </div>
          ))}
        </div>
      </LPSection>

      <LPSection>
        <LPEye color={ac.primary}>Methodology</LPEye>
        <LPH2>SAP Commissions Implementation Methodology</LPH2>
        <LPSteps color={ac.primary} steps={[
          {n:'01',t:'Plan Design Workshop',s:'Comp plan structure, quotas, accelerators, territory model'},
          {n:'02',t:'Data Model Setup',s:'Payees, products, transaction types, credit rules'},
          {n:'03',t:'Plan Build & T&Q',s:'Plan rules, formulas, quota distribution, territory hierarchy'},
          {n:'04',t:'Integration (CPQ/CRM/ERP)',s:'CPI flows for transaction ingestion from CPQ and S/4HANA'},
          {n:'05',t:'UAT & Parallel Calc',s:'Validate calculations vs manual comp — go-live enablement'},
        ]}/>
      </LPSection>

      <LPSection>
        <LPEye color="#64748b">FAQ</LPEye>
        <LPH2>Frequently Asked Questions</LPH2>
        <LPFaq items={[
          {q:'What is SAP Commissions (formerly Callidus)?',a:'SAP Commissions is the enterprise Incentive Compensation Management platform in the SAP Sales Cloud portfolio. Originally Callidus Software (founded 1996), acquired by SAP in 2018 for ~$2.4B. It automates the full compensation lifecycle — plan design through calculation, dispute resolution, and analytics.'},
          {q:'How does SAP Commissions integrate with SAP CPQ?',a:'When a CPQ quote is approved and converted to a sales order, SAP CPI on BTP ingests the deal data and passes it to SAP Commissions as a commission-eligible transaction. Commissions calculates payout based on the active comp plan and updates the rep\'s earnings portal in real time. Business Partners in CPQ map directly to Payees in Commissions.'},
          {q:'Can SAP Commissions replace our spreadsheet-based comp process?',a:'Yes — and this is the most common driver for implementation. Spreadsheet-based compensation suffers from errors, disputes, and shadow accounting. SAP Commissions eliminates all three: calculations are automated and auditable, disputes trace to source transactions, and reps see earnings in real time.'},
          {q:'How long does a SAP Commissions implementation take?',a:'A standard implementation typically takes 12–20 weeks, covering plan design, data model setup, plan build, integration, UAT with parallel calculation validation, and go-live. Timeline varies based on comp plan complexity, number of payees, and integration scope.'},
          {q:'Can ConnectingCloud migrate our existing comp plans from Xactly or Anaplan?',a:'Yes — ConnectingCloud delivers implementations including migration from Xactly, Anaplan, Oracle ICM, and spreadsheets. The migration scope covers comp plan redesign, historical data migration for reporting continuity, and integration rewiring.'},
        ]}/>
      </LPSection>

      <LPSection tight>
        <LPCTA accent={ac} heading="Ready to Implement SAP Commissions?" sub="Book a free 30-minute discovery call. We'll review your comp plans, territory structure, and CPQ integration requirements." ctaLabel="Book a Free Commissions Discovery Call" onContact={()=>goContact('SAP Commissions')}/>
      </LPSection>
    </div>
  );
}

// ─── 4. SAP VC to AVC Migration ──────────────────────────────────────────
export function SapVcToAvcMigration() {
  const ac = PAGE_ACCENTS['sap-vc-to-avc-migration'];
  const drivers = [
    {icon:<Flame size={20}/>, title:'2027 ECC Deadline', body:'SAP ECC mainstream maintenance ends December 2027. Every configure-to-order business on ECC must migrate VC — the question is whether to migrate to AVC at the same time or face a second major migration later.'},
    {icon:<Cpu size={20}/>, title:'CPQ Integration Requires AVC', body:'SAP CPQ real-time configuration validation via CPS on BTP requires AVC. Legacy VC cannot deliver this capability — without AVC + CPS, CPQ cannot perform real-time ERP configuration validation during quoting.'},
    {icon:<Sparkles size={20}/>, title:'AI & Joule Readiness', body:'SAP Joule and BTP AI Core configuration capabilities require AVC as the underlying engine. Customers on legacy VC are excluded from the configuration AI roadmap until they migrate.'},
  ];
  return (
    <div className="bg-white min-h-screen">
      <LPHero
        accent={ac}
        eyebrow="🔥 Most Requested · Highest Complexity"
        h1="SAP Variant Configuration → Advanced Variant Configuration Migration"
        sub="The #1 complex migration in the SAP configure-to-order space. CCT has migrated Super-BOM VC models with thousands of dependency rules — including models other teams declined to scope."
        badges={[
          {label:'VC / LO-VC → AVC',style:{background:ac.soft,borderColor:ac.border,color:ac.text}},
          {label:'2027 ECC Deadline',style:{background:'rgba(232,93,38,.15)',borderColor:'rgba(232,93,38,.35)',color:'#FFA07A'}},
          {label:'3–6 Month Timeline',style:{background:ac.soft,borderColor:ac.border,color:ac.text}},
          {label:'CPS Setup Included',style:{background:ac.soft,borderColor:ac.border,color:ac.text}},
        ]}
        onContact={()=>goContact('SAP CPQ / VC / AVC')}
        ctaLabel="Book a Free VC Assessment"
        secondaryCta={{label:'See ECC Migration', onClick:()=>navigate('/ecc-to-s4hana-migration')}}
      />

      <LPStats accent={ac} stats={[
        {value:'2027', label:'SAP ECC mainstream maintenance ends', color:'#FFA07A'},
        {value:'3–6 mo', label:'Typical timeline for mid-complexity KB', color:ac.text},
        {value:'AVC + CPS', label:'Required for SAP CPQ deep integration', color:ac.text},
        {value:'AI-Ready', label:'AVC + BTP AI Core unlocks Joule', color:ac.text},
      ]}/>

      {/* Why migrate */}
      <LPSection>
        <LPEye color={ac.primary}>Why Migrate</LPEye>
        <LPH2>Why the VC-to-AVC Migration Window is Open Right Now</LPH2>
        <LPP>Three forces are converging to make VC-to-AVC migration the most commercially critical SAP decision for configure-to-order businesses in 2025–2027.</LPP>
        <div className="grid md:grid-cols-3 gap-5">
          {drivers.map((d,i)=>(
            <div key={i} className="bg-white rounded-2xl border border-slate-200 border-t-4 p-6 hover:-translate-y-1 hover:shadow-lg transition-all" style={{borderTopColor:ac.primary}}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{background:ac.soft,color:ac.primary}}>{d.icon}</div>
              <h3 className="text-sm font-black mb-2" style={{color:ac.primary}}>{d.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{d.body}</p>
            </div>
          ))}
        </div>
      </LPSection>

      {/* What we deliver */}
      <LPSection dark>
        <LPEye color={ac.text}>Scope</LPEye>
        <LPH2 dark>What CCT Delivers in a VC to AVC Migration</LPH2>
        <LPP dark>We scope, design, build, and validate the full migration — from Knowledge Base assessment through AVC model build, CPS setup, parallel validation, and production cutover.</LPP>
        <div className="grid md:grid-cols-2 gap-5">
          {[
            {title:'Assessment & Strategy', items:['Full KB complexity assessment — classes, characteristics, dependency rules, procedures','Custom code identification: user exits, BADIs, Z-table lookups within dependency procedures','Migration path recommendation: lift-and-shift vs model redesign','Parallel validation plan and cutover risk assessment']},
            {title:'Build & Go-Live', items:['AVC model build: class hierarchy, constraint nets, configuration profiles, variant pricing','CPS setup on BTP: REST API configuration, session management, CPQ & Commerce mapping','BOM rationalisation and Super-BOM validation in AVC','Parallel validation: AVC vs VC output matching for all configured scenarios','Production cutover and VC knowledge base archiving']},
          ].map((card,i)=>(
            <div key={i} className="bg-white/[.04] rounded-2xl border border-white/[.08] p-6 sm:p-8">
              <h3 className="text-sm font-black mb-5" style={{color:ac.text}}>{card.title}</h3>
              <div className="space-y-3">{card.items.map((it,j)=><LPLi key={j} color={ac.primary} dark>{it}</LPLi>)}</div>
            </div>
          ))}
        </div>
      </LPSection>

      <LPSection>
        <LPEye color={ac.primary}>Methodology</LPEye>
        <LPH2>VC to AVC Migration Methodology</LPH2>
        <LPSteps color={ac.primary} steps={[
          {n:'01',t:'KB Assessment',s:'Complexity, custom code, dependency rule inventory'},
          {n:'02',t:'Strategy & Design',s:'Lift-and-shift vs redesign, risk plan'},
          {n:'03',t:'AVC Model Build',s:'Classes, CPS API setup, BOM validation'},
          {n:'04',t:'Parallel Validation',s:'AVC vs VC output matching — all scenarios'},
          {n:'05',t:'Cutover & Decom.',s:'Go-live, KB archiving, hypercare'},
        ]}/>
      </LPSection>

      <LPSection>
        <LPEye color="#64748b">FAQ</LPEye>
        <LPH2>Frequently Asked Questions</LPH2>
        <LPFaq items={[
          {q:'What is the difference between SAP VC and AVC?',a:'SAP VC (LO-VC) is the classic configuration engine embedded in ECC and early S/4HANA. AVC is the next-generation engine with REST API-first design, Fiori UI, and superior performance. AVC is required for CPS on BTP which enables real-time SAP CPQ integration.'},
          {q:'How long does a VC to AVC migration take?',a:'A mid-complexity Knowledge Base typically migrates in 3–6 months. Simple models (few characteristics, low dependency rule count) can complete in 6–8 weeks. Very complex Super-BOM models with thousands of dependencies can take 6–9 months. CCT provides a realistic scope after the initial KB assessment.'},
          {q:'What is parallel validation in a VC to AVC migration?',a:'Parallel validation is the phase where configured orders are processed through both the legacy VC model and the new AVC model simultaneously. Output is compared to confirm that AVC produces identical configuration results and BOM explosions. This phase typically runs 4–8 weeks before production cutover.'},
          {q:'Why does CPQ integration require AVC and not just VC?',a:'SAP CPQ\'s real-time configuration integration requires CPS on BTP, which exposes AVC models via REST API. Legacy VC does not have this API-first capability — without AVC + CPS, CPQ cannot perform real-time ERP configuration validation during quoting.'},
          {q:'Can the VC to AVC migration run in parallel with an ECC to S/4HANA programme?',a:'Yes — and CCT strongly recommends this approach. Running both as a coordinated programme avoids a second major configuration migration on a live production S/4HANA system after ECC go-live. It also means you arrive at S/4HANA with CPS and CPQ integration ready from day one.'},
        ]}/>
      </LPSection>

      <LPSection tight>
        <LPCTA accent={ac} heading="Start Your VC to AVC Migration" sub="Book a free VC Assessment Call. We'll score your KB complexity, identify the hard problems early, and give you an honest migration scope." ctaLabel="Book a Free VC Assessment Call" onContact={()=>goContact('SAP CPQ / VC / AVC')}/>
      </LPSection>
    </div>
  );
}

// ─── 5. SAP CPQ Quote 2.0 Migration ──────────────────────────────────────
export function SapCpqQuote2Migration() {
  const ac = PAGE_ACCENTS['sap-cpq-quote-2-migration'];
  const changes = [
    {tag:'IronPython Scripts', body:'Event-based execution — rewrite required. Q2.0 scripts access the quote via the context object and fire only on discrete events — not on every click. Every existing script must be adapted.'},
    {tag:'Responsive UI', body:'Classic Design → Responsive Design. Classic is deprecated (obsolete end of 2025). All custom page templates, DealViewPage layouts, Quote Custom Sections, and navigation must be rebuilt.'},
    {tag:'Business Partners', body:'Customers replaced by Business Partners. Q2.0 adopts the S/4HANA Business Partner model. Sold-To, Bill-To, Ship-To, and Contact are all Involved Parties. Customer data migration is required.'},
    {tag:'Architecture', body:'Stateless vs stateful. Q1.0 loads the entire quote into memory — performance degrades at scale. Q2.0 is stateless and supports up to 100,000 line items.'},
    {tag:'Solution Design', body:'New collaboration model. Q2.0 introduces Solution Design — structuring quotes into sections with team assignments for parallel working. Unavailable in Q1.0.'},
    {tag:'Document Generation', body:'Redesigned GenDoc engine. Q2.0 ships a new document generation preprocessor. Templates from Q1.0 are not supported and must be rebuilt for the responsive template engine.'},
  ];
  return (
    <div className="bg-white min-h-screen">
      <LPHero
        accent={ac}
        eyebrow="⚡ CPQ Platform Upgrade · No New 1.0 Licences · IronPython + Responsive UI"
        h1="SAP CPQ Quote 1.0 → Quote 2.0 Migration"
        sub="Both versions use IronPython — but the execution model changes fundamentally. Scripts must adapt to event-based firing via the context object API. Classic Design is deprecated. Responsive Design is mandatory."
        badges={[
          {label:'IronPython Event Model',style:{background:ac.soft,borderColor:ac.border,color:ac.text}},
          {label:'Responsive UI Rebuild',style:{background:ac.soft,borderColor:ac.border,color:ac.text}},
          {label:'Business Partners',style:{background:'rgba(13,148,136,.15)',borderColor:'rgba(13,148,136,.35)',color:'#5ECECE'}},
          {label:'6–12 Week Timeline',style:{background:ac.soft,borderColor:ac.border,color:ac.text}},
        ]}
        onContact={()=>goContact('SAP CPQ / VC / AVC')}
        ctaLabel="Book a Free Quote 2.0 Assessment"
        secondaryCta={{label:'CPQ Implementation', onClick:()=>navigate('/sap-cpq-implementation')}}
      />

      <LPStats accent={ac} stats={[
        {value:'90%', label:'Of new CPQ features are Quote 2.0-only', color:ac.text},
        {value:'IronPython', label:'Both versions — but execution model changes', color:ac.text},
        {value:'Responsive', label:'Classic Design deprecated — end of 2025', color:'#5ECECE'},
        {value:'100K', label:'Max line items in Quote 2.0', color:ac.text},
      ]}/>

      {/* 6 changes */}
      <LPSection>
        <LPEye color={ac.primary}>Key Changes</LPEye>
        <LPH2>What Actually Changes in Quote 2.0 — The Six Critical Differences</LPH2>
        <LPP>The Quote 1.0 to 2.0 migration is not a cosmetic upgrade. Six areas require deliberate migration work — led by IronPython script adaptation and Responsive UI rebuild.</LPP>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {changes.map((c,i)=>(
            <div key={i} className="bg-white rounded-2xl border border-slate-200 p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-200 group">
              <div className="text-[11px] font-black uppercase tracking-widest mb-3 group-hover:opacity-100 transition-opacity" style={{color:ac.primary}}>{c.tag}</div>
              <p className="text-sm text-slate-600 leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </LPSection>

      {/* Methodology */}
      <LPSection dark>
        <LPEye color={ac.text}>Methodology</LPEye>
        <LPH2 dark>Quote 1.0 → 2.0 Migration Methodology</LPH2>
        <LPSteps dark color={ac.primary} steps={[
          {n:'01',t:'Readiness Assessment',s:'IronPython script inventory, Responsive UI gap, integration map'},
          {n:'02',t:'Q2.0 Environment Setup',s:'Tenant config, Business Partners, Sales Area, feature flags'},
          {n:'03',t:'IronPython Script Migration',s:'Adapt all scripts to event model and context object API'},
          {n:'04',t:'Responsive UI & Doc Rebuild',s:'Templates, DealViewPage, GenDoc for responsive engine'},
          {n:'05',t:'Integration Retest & Go-Live',s:'CRM, ERP, Commerce regression · UAT · Cutover · Enablement'},
        ]}/>
      </LPSection>

      {/* Q1 vs Q2 comparison table */}
      <LPSection>
        <LPEye color={ac.primary}>Comparison</LPEye>
        <LPH2>Quote 1.0 vs Quote 2.0 at a Glance</LPH2>
        <div className="overflow-x-auto mt-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-950 text-white">
                <th className="text-left px-5 py-4 text-[11px] font-black uppercase tracking-widest rounded-tl-xl w-1/3">Area</th>
                <th className="text-left px-5 py-4 text-[11px] font-black uppercase tracking-widest text-slate-400">Quote 1.0</th>
                <th className="text-left px-5 py-4 text-[11px] font-black uppercase tracking-widest rounded-tr-xl" style={{color:ac.text}}>Quote 2.0</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Architecture','Stateful — full quote in memory on every click','Stateless — event-driven, scales to 100K line items'],
                ['UI Framework','Classic Design (deprecated end 2025)','Responsive Design (mandatory)'],
                ['Scripting API','Direct quote object access','Context object API — fires on discrete events only'],
                ['Customer Model','Flat Customer record','Business Partners (Sold-To, Bill-To, Ship-To)'],
                ['Collaboration','Single-user quote editing','Solution Design — multi-section, multi-user'],
                ['Document Engine','Legacy GenDoc preprocessor','Redesigned responsive document engine'],
                ['New licences','No longer issued by SAP','All new CPQ deployments'],
              ].map(([area,q1,q2],i)=>(
                <tr key={i} className={`border-b border-slate-100 ${i%2===0?'bg-white':'bg-slate-50/50'}`}>
                  <td className="px-5 py-4 font-semibold text-slate-700">{area}</td>
                  <td className="px-5 py-4 text-slate-500">{q1}</td>
                  <td className="px-5 py-4 font-medium" style={{color:ac.primary}}>{q2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </LPSection>

      <LPSection>
        <LPEye color="#64748b">FAQ</LPEye>
        <LPH2>Frequently Asked Questions</LPH2>
        <LPFaq items={[
          {q:'Do IronPython scripts work in SAP CPQ Quote 2.0?',a:'Yes — both versions use IronPython. However, the execution model changes fundamentally. In Q1.0, scripts fire on every click and access the quote object directly. In Q2.0, scripts fire only on discrete events and access the quote via the context object API. All existing scripts must be adapted — not rewritten from scratch, but updated for the new API and execution trigger model.'},
          {q:'What is the Responsive UI in SAP CPQ Quote 2.0?',a:'Responsive Design is SAP CPQ\'s modern UI framework — the only one supported in Quote 2.0. It replaces Classic Design (deprecated, scheduled for removal end of 2025). All custom page templates must be rebuilt for Responsive Design during migration.'},
          {q:'What is the context object in SAP CPQ Quote 2.0?',a:'The context object is the central API object in Quote 2.0\'s IronPython scripting model. It provides access to the quote data and the event that triggered the script — e.g., context.Quote, context.CurrentLineItem, context.Product. This is the core API change that requires every Q1.0 script to be adapted.'},
          {q:'How long does Quote 1.0 to 2.0 migration take?',a:'A simple deployment with few custom scripts can migrate in 4–6 weeks. Mid-complexity deployments with 20–50 IronPython scripts typically take 8–12 weeks. Heavily customised deployments with 100+ scripts run to 14–20 weeks.'},
          {q:'Does SAP still support Quote 1.0?',a:'SAP continues to maintain Quote 1.0 for existing customers but is no longer issuing new licences. ~90% of new SAP CPQ features released are exclusive to Quote 2.0. Classic Design is fully deprecated by end of 2025.'},
        ]}/>
      </LPSection>

      <LPSection tight>
        <LPCTA accent={ac} heading="Ready to Migrate to CPQ Quote 2.0?" sub="Book a free Quote 2.0 Readiness Assessment. We'll inventory your IronPython scripts, Responsive UI gap, and integration touchpoints." ctaLabel="Book a Free Quote 2.0 Assessment" onContact={()=>goContact('SAP CPQ / VC / AVC')}/>
      </LPSection>
    </div>
  );
}

// ─── 6. ECC to S/4HANA Migration ─────────────────────────────────────────
export function EccToS4HanaMigration() {
  const ac = PAGE_ACCENTS['ecc-to-s4hana-migration'];
  const paths = [
    {color:'#3A506B', title:'Brownfield (System Conversion)', desc:'Convert ECC to S/4HANA in-place. Existing VC KB and custom code are preserved — but must be remediated for S/4HANA compatibility. Fastest path, lowest data migration risk.', items:['VC KB migrates with the system — must be validated for AVC readiness','Custom code assessed via Readiness Check and ATC','Best for stable, low-customisation ECC landscapes']},
    {color:'#0d9488', title:'Bluefield (Selective Data Transfer)', desc:'Selective migration of data and processes to a new S/4HANA system. Combines the speed of brownfield with the cleanliness of greenfield.', items:['VC KB can be selectively migrated and rationalised in the process','Opportunity to clean historical configured order data before transfer','Best for businesses with significant legacy data or org changes']},
    {color:'#2563eb', title:'Greenfield (New Implementation)', desc:'Implement S/4HANA from scratch, migrating only required master data and open transactions. Maximum flexibility — highest implementation effort.', items:['VC model rebuilt as AVC from the start — clean slate advantage','No legacy customisation baggage — fit-to-standard approach possible','Best for significant business transformation or major process redesign']},
  ];
  return (
    <div className="bg-white min-h-screen">
      <LPHero
        accent={ac}
        eyebrow="⚠️ 2027 ECC Deadline · ERP Transformation · VC Must Migrate in Parallel"
        h1="SAP ECC to S/4HANA Migration"
        sub="SAP ECC mainstream maintenance ends 2027. For configure-to-order businesses, this is doubly complex — VC must move to AVC simultaneously, and every SD/PP custom enhancement needs assessment. CCT delivers both workstreams as a coordinated programme."
        badges={[
          {label:'2027 ECC Deadline',style:{background:ac.soft,borderColor:ac.border,color:ac.text}},
          {label:'Brownfield · Bluefield · Greenfield',style:{background:'rgba(58,80,107,.15)',borderColor:'rgba(58,80,107,.35)',color:'#9BB4CC'}},
          {label:'VC→AVC in Parallel',style:{background:'rgba(13,148,136,.15)',borderColor:'rgba(13,148,136,.35)',color:'#5ECECE'}},
          {label:'18–36 Month Programme',style:{background:'rgba(58,80,107,.15)',borderColor:'rgba(58,80,107,.35)',color:'#9BB4CC'}},
        ]}
        onContact={()=>goContact('SAP S/4HANA implementation or rollout')}
        ctaLabel="Book a Free ECC Readiness Assessment"
        secondaryCta={{label:'VC to AVC Migration', onClick:()=>navigate('/sap-vc-to-avc-migration')}}
      />

      <LPStats accent={ac} stats={[
        {value:'2027', label:'SAP ECC mainstream maintenance ends', color:ac.text},
        {value:'18–36 mo', label:'Typical full programme duration', color:ac.text},
        {value:'3 paths', label:'Brownfield · Bluefield · Greenfield', color:'#5ECECE'},
        {value:'VC + S4', label:'Run VC→AVC migration from day one', color:'#5ECECE'},
      ]}/>

      {/* 3 paths */}
      <LPSection>
        <LPEye color={ac.primary}>Migration Paths</LPEye>
        <LPH2>Three Migration Paths — Different VC Implications for Each</LPH2>
        <LPP>The choice of migration path is the most consequential decision in an ECC-to-S/4HANA programme. Each path has fundamentally different implications for VC knowledge base migration, custom code, and data.</LPP>
        <div className="grid md:grid-cols-3 gap-5">
          {paths.map((c,i)=>(
            <div key={i} className="bg-white rounded-2xl border border-slate-200 border-t-4 p-6 sm:p-8 hover:-translate-y-1 hover:shadow-lg transition-all" style={{borderTopColor:c.color}}>
              <h3 className="text-sm font-black mb-2" style={{color:c.color}}>{c.title}</h3>
              <p className="text-xs text-slate-500 mb-5 leading-relaxed">{c.desc}</p>
              <div className="space-y-3">{c.items.map((it,j)=><LPLi key={j} color={c.color}>{it}</LPLi>)}</div>
            </div>
          ))}
        </div>
      </LPSection>

      {/* Why run together */}
      <LPSection dark>
        <LPEye color={ac.text}>Why Both Together</LPEye>
        <LPH2 dark>Why ECC-to-S/4 and VC-to-AVC Should Run as One Programme</LPH2>
        <LPP dark>CCT strongly recommends planning the VC-to-AVC migration as a coordinated workstream within the ECC-to-S/4HANA programme — not as a separate project after the fact.</LPP>
        <div className="grid md:grid-cols-2 gap-5">
          {[
            {title:'Programme risk & cost', items:['Avoid dual-migration overhead — running VC-to-AVC after S/4HANA go-live means a major configuration migration on a live production ERP','Arrive at S/4HANA AI-ready — customers who migrate VC to AVC within the programme are immediately ready for SAP Joule and BTP AI Core','Unlock CPQ integration from go-live — AVC + CPS is the prerequisite for SAP CPQ real-time integration']},
            {title:'Delivery efficiency', items:['Custom code assessment covers both — Readiness Check and ATC analysis surfaces VC enhancements that need remediation for both workstreams','BOM rationalisation delivers value to both — data cleansing benefits both the S/4HANA data migration and the AVC model build','Single cutover event — a coordinated programme results in one go-live, not two separate, high-risk cutovers']},
          ].map((card,i)=>(
            <div key={i} className="bg-white/[.04] rounded-2xl border border-white/[.08] p-6 sm:p-8">
              <h3 className="text-sm font-black mb-5" style={{color:ac.text}}>{card.title}</h3>
              <div className="space-y-3">{card.items.map((it,j)=><LPLi key={j} color={ac.primary} dark>{it}</LPLi>)}</div>
            </div>
          ))}
        </div>
      </LPSection>

      <LPSection>
        <LPEye color={ac.primary}>Methodology</LPEye>
        <LPH2>ECC-to-S/4HANA Migration Methodology</LPH2>
        <LPSteps color={ac.primary} steps={[
          {n:'01',t:'Readiness Assessment',s:'VC complexity, custom code, data volume, path selection'},
          {n:'02',t:'Code Remediation',s:'ATC findings, deprecated APIs, VC enhancement rebuild'},
          {n:'03',t:'AVC Build (Parallel)',s:'AVC model build, CPS setup, BOM rationalisation'},
          {n:'04',t:'Data Migration & Testing',s:'Master data, open orders, SD-PP-CO integration testing'},
          {n:'05',t:'Cutover & Hypercare',s:'Go-live, parallel run, ECC decommission'},
        ]}/>
      </LPSection>

      <LPSection>
        <LPEye color="#64748b">FAQ</LPEye>
        <LPH2>Frequently Asked Questions</LPH2>
        <LPFaq items={[
          {q:'When does SAP ECC mainstream maintenance end?',a:'SAP ECC mainstream maintenance ends on December 31, 2027. After this date, SAP will no longer release standard support packages, legal change updates, or new functionality for ECC. Extended maintenance is available but at additional cost and with limitations.'},
          {q:'What are the three ECC-to-S/4HANA migration paths?',a:'Brownfield (system conversion): converts the existing ECC system to S/4HANA in place — fastest, preserves customisations. Bluefield (selective data transfer): selectively migrates data and processes to a new S/4HANA system. Greenfield (new implementation): builds S/4HANA from scratch with master data migration only — maximum flexibility, highest effort.'},
          {q:'Should VC-to-AVC migration happen at the same time as ECC-to-S/4HANA?',a:'Yes — CCT strongly recommends running VC-to-AVC as a parallel workstream. Arriving at S/4HANA with AVC means you are immediately ready for SAP CPQ real-time integration via CPS and for SAP Joule AI configuration capabilities.'},
          {q:'What custom code issues arise for configure-to-order businesses?',a:'Configure-to-order ECC landscapes typically have significant custom code in the VC area: custom user exits and BADIs extending the Knowledge Base, Z-table lookups within dependency procedures, custom SD exits for configured pricing, and custom PP exits for production order handling.'},
          {q:'How long does an ECC to S/4HANA migration take?',a:'A Brownfield migration for a mid-complexity configure-to-order system typically takes 18–24 months. Bluefield programmes run similarly. Greenfield implementations for complex environments often take 24–36 months. CCT\'s Readiness Assessment completes within 4–6 weeks and provides a reliable timeline estimate.'},
        ]}/>
      </LPSection>

      <LPSection tight>
        <LPCTA accent={ac} heading="Beat the 2027 Deadline. Start Now." sub="Book a free ECC Readiness Assessment. We'll score your VC complexity, custom code volume, and migration path options." ctaLabel="Book a Free ECC Readiness Assessment" onContact={()=>goContact('SAP S/4HANA implementation or rollout')}/>
      </LPSection>
    </div>
  );
}
