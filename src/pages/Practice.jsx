import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from '../components/Link';
import { L2C_STAGES, PRACTICE_PAGES, PRACTICES, SAP_SPECIALIST_SERVICES } from '../data/content';
import { BookButton, CheckItem, Container, CtaBand, PageHeader, SectionHeader } from '../components/ui';

export default function Practice({ id }) {
  const page = PRACTICE_PAGES[id];
  const others = PRACTICES.filter((p) => p.id !== id);

  return (
    <>
      <PageHeader eyebrow={page.eyebrow} title={page.title} intro={page.intro}>
        <div className="mt-10">
          <BookButton source={`practice-${id}`} label="Talk to a practice lead" />
        </div>
      </PageHeader>

      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {page.groups.map((g) => (
              <div key={g.title} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
                <h2 className="text-xl font-black text-slate-900 mb-6">{g.title}</h2>
                <ul className="space-y-3">
                  {g.items.map((item) => <CheckItem key={item}>{item}</CheckItem>)}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20 bg-slate-950">
        <Container>
          <SectionHeader dark eyebrow={page.eyebrow} title={page.highlightsTitle || 'What we bring'} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {page.highlights.map((h) => (
              <div key={h.title} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-7">
                <h3 className="text-lg font-black text-white mb-3">{h.title}</h3>
                <p className="text-slate-400 font-medium leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {page.showL2C ? <QuoteToCash /> : null}
      {id === 'sap' ? <SpecialistServices /> : null}

      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <Container>
          <p className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-500 mb-6">Other practices</p>
          <div className="grid gap-4 sm:grid-cols-3">
            {others.map((p) => (
              <Link key={p.id} to={p.path} className="group flex items-center justify-between rounded-2xl bg-white border border-slate-200 p-5 hover:border-blue-300">
                <span>
                  <span className="block font-black text-slate-900">{p.name}</span>
                  <span className="block text-sm text-slate-500 font-medium">{p.tagline}</span>
                </span>
                <ArrowRight size={18} className="text-slate-400 group-hover:text-blue-600" />
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        source={`practice-${id}`}
        title="Let's look at your landscape."
        text="A working session with the right practice lead: your current systems, where they hurt, and what a sensible next step looks like."
      />
    </>
  );
}

function QuoteToCash() {
  const [active, setActive] = useState(L2C_STAGES[0]);
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <SectionHeader
          eyebrow="Quote-to-cash specialism"
          title="CPQ and VC/AVC connected to the S/4HANA core."
          intro="For manufacturers of configurable products, the hardest handoff is from what sales can quote to what production can build. We design that flow end to end."
        />
        <div className="grid lg:grid-cols-[1fr_2fr] gap-8">
          <div className="space-y-3" role="tablist" aria-label="Quote-to-cash stages">
            {L2C_STAGES.map((s, i) => (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={active.id === s.id}
                onClick={() => setActive(s)}
                className={`w-full flex items-center gap-4 text-left p-4 rounded-2xl border transition-all ${
                  active.id === s.id ? 'bg-blue-600 border-blue-600 text-white shadow-lg' : 'bg-white border-slate-200 text-slate-700 hover:border-blue-300'
                }`}
              >
                <span className={`w-10 h-10 rounded-xl flex items-center justify-center font-black ${active.id === s.id ? 'bg-white/20' : 'bg-slate-100'}`}>{i + 1}</span>
                <span>
                  <span className="block font-black">{s.title}</span>
                  <span className={`block text-xs font-bold ${active.id === s.id ? 'text-blue-100' : 'text-slate-400'}`}>{s.platform}</span>
                </span>
              </button>
            ))}
          </div>
          <div className="rounded-[2rem] bg-slate-50 border border-slate-200 p-8 md:p-10" role="tabpanel">
            <p className="text-[11px] font-black uppercase tracking-widest text-blue-600 mb-3">{active.platform}</p>
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">{active.title}</h3>
            <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8">{active.description}</p>
            <ul className="grid sm:grid-cols-3 gap-4">
              {active.deliverables.map((d) => (
                <li key={d} className="rounded-2xl bg-white border border-slate-200 p-4 font-bold text-slate-800 text-sm">{d}</li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

function SpecialistServices() {
  return (
    <section className="py-16 md:py-20 bg-white border-t border-slate-200">
      <Container>
        <SectionHeader eyebrow="Specialist services" title="Implementations and migrations we run end to end." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SAP_SPECIALIST_SERVICES.map((s) => (
            <Link key={s.path} to={s.path} className="group flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 hover:border-blue-300 hover:bg-white">
              <span>
                <span className="block font-black text-slate-900">{s.name}</span>
                <span className="block text-sm text-slate-500 font-medium">{s.desc}</span>
              </span>
              <ArrowRight size={18} className="flex-shrink-0 text-slate-400 group-hover:text-blue-600" />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
