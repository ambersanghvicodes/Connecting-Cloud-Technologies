import { ArrowRight, Bot, Cloud, Database, FlaskConical, LifeBuoy, ShieldCheck } from 'lucide-react';
import Link from '../components/Link';
import { APPROACH_PHASES, EXPERIENCE, EXPERIENCE_NOTE, PRACTICES, SPRINT, TEAM_LEADERSHIP, WHY_US } from '../data/content';
import { BookButton, Container, CtaBand, Eyebrow, Initials, SectionHeader, SprintButton } from '../components/ui';

const PRACTICE_ICONS = { sap: Database, salesforce: Cloud, ai: Bot, ams: LifeBuoy };

export default function Home() {
  return (
    <>
      <Hero />

      <section className="py-20 md:py-24 bg-slate-50 border-y border-slate-200">
        <Container>
          <SectionHeader
            eyebrow="Our practices"
            title="One partner across your enterprise applications."
            intro="Solution architecture and hands-on delivery across SAP, Salesforce, AI and ongoing application support."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PRACTICES.map((p) => {
              const Icon = PRACTICE_ICONS[p.id];
              return (
                <Link key={p.id} to={p.path} className="group flex flex-col rounded-[2rem] border border-slate-200 bg-white p-7 hover:border-blue-300 hover:shadow-xl transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6"><Icon size={22} /></div>
                  <h3 className="font-black text-2xl text-slate-900 mb-1">{p.name}</h3>
                  <p className="text-[11px] font-black uppercase tracking-widest text-blue-600 mb-4">{p.tagline}</p>
                  <p className="text-slate-600 font-medium text-sm leading-relaxed mb-6 flex-1">{p.summary}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-black text-slate-900 group-hover:text-blue-600">
                    Explore <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-24 bg-white">
        <Container>
          <SectionHeader eyebrow="Why Connecting Cloud" title="An enterprise application partner, not a single-module vendor." />
          <div className="grid gap-px bg-slate-200 border border-slate-200 rounded-[2rem] overflow-hidden sm:grid-cols-2 lg:grid-cols-3">
            {WHY_US.map((w) => (
              <div key={w.title} className="bg-white p-8">
                <h3 className="text-lg font-black text-slate-900 mb-2">{w.title}</h3>
                <p className="text-slate-600 font-medium leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-24 bg-slate-950 text-white">
        <Container>
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 items-center">
            <div>
              <Eyebrow className="text-blue-400">Pharma & life sciences</Eyebrow>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight mb-6">Validated SAP for regulated manufacturing.</h2>
              <p className="text-lg text-slate-400 font-medium leading-relaxed mb-8">
                Our team has delivered SAP for multi-dosage makers, export-led generics manufacturers and plants integrated after acquisition,
                with CSV and IQ/OQ/PQ, batch and expiry control, and batch-level traceability.
              </p>
              <Link to="/industries/pharma" className="inline-flex items-center gap-2 rounded-2xl bg-white text-slate-950 px-7 py-4 text-sm font-black hover:bg-blue-50">
                See pharma experience <ArrowRight size={18} />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {['Validated SAP delivery (CSV, IQ/OQ/PQ)', 'Batch, lot and expiry control', 'Export and regulated-market compliance', 'Integrating a plant under a new owner'].map((t) => (
                <div key={t} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <FlaskConical className="text-blue-400 mb-4" size={22} />
                  <p className="font-bold leading-snug">{t}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-24 bg-white">
        <Container>
          <SectionHeader
            eyebrow="Enterprise experience"
            title="Industries and organizations our team has supported."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {EXPERIENCE.map((e) => (
              <div key={e.industry} className="rounded-[1.5rem] border border-slate-200 p-6">
                <h3 className="text-[11px] font-black uppercase tracking-widest text-blue-600 mb-3">{e.industry}</h3>
                <p className="font-bold text-slate-800 leading-relaxed">{e.clients.join(' · ')}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-4xl text-sm text-slate-500 font-medium leading-relaxed">{EXPERIENCE_NOTE}</p>
        </Container>
      </section>

      <section className="py-20 md:py-24 bg-slate-50 border-y border-slate-200">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-3xl">
              <Eyebrow>Leadership</Eyebrow>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight text-slate-950">Senior people, named owners.</h2>
            </div>
            <Link to="/team" className="inline-flex flex-shrink-0 whitespace-nowrap items-center gap-2 text-sm font-black text-blue-600 hover:text-blue-700">
              Meet the full team <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM_LEADERSHIP.map((m) => (
              <div key={m.name} className="rounded-[1.5rem] bg-white border border-slate-200 p-6">
                <Initials>{m.initials}</Initials>
                <h3 className="mt-5 text-lg font-black text-slate-900">{m.name}</h3>
                <p className="text-sm font-bold text-blue-600 mb-3">{m.role}</p>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">{m.points[0]}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-24 bg-white">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-3xl">
              <Eyebrow>How we deliver</Eyebrow>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight text-slate-950 mb-4">Decide first. Then deliver, integrate and support.</h2>
              <p className="text-lg text-slate-600 font-medium">An SAP Activate-based approach with a decision gate before any build starts.</p>
            </div>
            <Link to="/approach" className="inline-flex flex-shrink-0 whitespace-nowrap items-center gap-2 text-sm font-black text-blue-600 hover:text-blue-700">
              Our approach <ArrowRight size={16} />
            </Link>
          </div>
          <ol className="grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {APPROACH_PHASES.map((p, i) => (
              <li key={p.id} className={`rounded-2xl p-5 border ${i < 3 ? 'bg-blue-50 border-blue-100' : 'bg-slate-50 border-slate-200'}`}>
                <span className="text-xs font-black text-slate-400">{p.id}</span>
                <p className="text-lg font-black text-slate-900">{p.name}</p>
                <p className="text-xs font-semibold text-slate-500">{p.focus}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <CtaBand
        source="home-footer"
        title="Facing an ERP platform decision?"
        text="Start with a working session with your IT and Quality leads, then a three-week decision sprint that ends in a recommendation you can defend."
      />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="absolute inset-0 bg-[radial-gradient(#dbeafe_1px,transparent_1px)] [background-size:30px_30px] opacity-50" />
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-indigo-200/40 blur-3xl" />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="mb-8 inline-flex flex-wrap items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-[11px] font-black uppercase tracking-widest text-blue-600">
              <ShieldCheck size={14} /> SAP · Salesforce · AI & Automation · Managed Services
            </p>
            <h1 className="mb-8 text-4xl font-black leading-[1] tracking-tight text-slate-950 sm:text-5xl md:text-7xl">
              Enterprise applications,
              <br />
              <span className="text-blue-600">architected and delivered.</span>
            </h1>
            <p className="mb-10 max-w-2xl text-lg font-medium leading-relaxed text-slate-600 md:text-xl">
              Architecture-led consulting and hands-on delivery for complex enterprise landscapes: from the S/4HANA platform decision
              through implementation, integration and long-term application support.
            </p>
            <div className="mb-12 flex flex-col gap-4 sm:flex-row">
              <BookButton source="home-hero" />
              <SprintButton source="home-hero" />
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                ['End to end', 'Discover → Implement → Go-live → Support'],
                ['Validated SAP', 'CSV · GxP · IQ/OQ/PQ experience'],
                ['Support', '8x5, extended and 24x7 options'],
              ].map(([k, v]) => (
                <div key={k} className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-lg font-black text-slate-900">{k}</p>
                  <p className="text-xs font-bold text-slate-500">{v}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-2xl shadow-slate-200/70">
            <Eyebrow>ERP Decision Sprint</Eyebrow>
            <h2 className="mb-4 text-2xl md:text-3xl font-black leading-tight text-slate-900">
              Extend your current ERP, or move to S/4HANA?
            </h2>
            <p className="text-slate-600 font-medium mb-6">
              In three weeks we answer the questions management actually asks, and hand over a decision pack:
            </p>
            <ul className="grid grid-cols-2 gap-3 mb-6">
              {SPRINT.deliverables.map((d) => (
                <li key={d} className="rounded-xl bg-slate-50 p-3 text-sm font-bold text-slate-700">{d}</li>
              ))}
            </ul>
            <Link to="/erp-decision-sprint" className="flex items-center justify-between rounded-2xl bg-slate-900 p-5 text-white hover:bg-blue-600 transition-colors">
              <span className="text-sm font-black">How the sprint works</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
