import { FileCheck2, HelpCircle } from 'lucide-react';
import { SPRINT } from '../data/content';
import { BookButton, CheckItem, Container, Eyebrow, PageHeader, SectionHeader } from '../components/ui';

export default function Sprint() {
  return (
    <>
      <PageHeader
        eyebrow="ERP Decision Sprint"
        title="A defensible ERP decision in three weeks."
        intro="For manufacturers and pharma companies choosing between extending their current ERP and implementing SAP S/4HANA, including plants being integrated after an acquisition. Fixed scope, and it ends in a decision pack your management can act on."
      >
        <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
          <BookButton source="sprint-hero" label="Book the working session" interest="ERP Decision Sprint" />
          <p className="text-sm font-semibold text-slate-500">Step one: a working session with your IT and Quality leads.</p>
        </div>
      </PageHeader>

      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 md:p-10">
              <HelpCircle className="text-blue-600 mb-6" size={28} />
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">The questions it answers</h2>
              <ul className="space-y-4">
                {SPRINT.questions.map((q) => <CheckItem key={q}>{q}</CheckItem>)}
              </ul>
            </div>
            <div className="rounded-[2rem] bg-blue-600 p-8 md:p-10 text-white">
              <FileCheck2 className="mb-6" size={28} />
              <h2 className="text-2xl md:text-3xl font-black mb-3">What you get: the decision pack</h2>
              <p className="text-blue-100 font-medium mb-6">Implementation proceeds only after the target path and scope are agreed.</p>
              <ul className="grid sm:grid-cols-2 gap-3">
                {SPRINT.deliverables.map((d) => (
                  <li key={d} className="rounded-xl bg-white/15 p-4 font-bold">{d}</li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-200">
        <Container>
          <SectionHeader
            eyebrow="How it runs"
            title="Discover, Prepare, Explore, then decide."
            intro="The first three phases of SAP Activate, compressed into three weeks and focused on a decision rather than a build."
          />
          <ol className="grid gap-5 md:grid-cols-3">
            {SPRINT.weeks.map((w) => (
              <li key={w.label} className="rounded-[1.5rem] bg-white border border-slate-200 p-7">
                <p className="text-[11px] font-black uppercase tracking-widest text-blue-600">{w.label}</p>
                <h3 className="text-2xl font-black text-slate-900 mb-5">{w.phase}</h3>
                <ul className="space-y-3">
                  {w.items.map((i) => <CheckItem key={i}>{i}</CheckItem>)}
                </ul>
              </li>
            ))}
          </ol>
          <div className="mt-6 rounded-[1.5rem] border-2 border-dashed border-blue-300 bg-blue-50 p-6 text-center">
            <p className="font-black text-blue-700">Decision gate: management review of the decision pack</p>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-white">
        <Container>
          <div className="rounded-[2.5rem] bg-slate-950 p-8 md:p-14 text-center">
            <Eyebrow className="text-blue-400">Next step</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Start with a working session.</h2>
            <p className="max-w-2xl mx-auto text-lg text-slate-400 font-medium mb-8">
              We meet your IT and Quality leads, confirm goals and constraints, and agree the decision criteria and sprint plan.
            </p>
            <BookButton variant="light" source="sprint-footer" label="Book the working session" interest="ERP Decision Sprint" />
          </div>
        </Container>
      </section>
    </>
  );
}
