import { Fragment } from 'react';
import { APPROACH_PHASES, DECISION_GATE_AFTER } from '../data/content';
import { CheckItem, Container, CtaBand, PageHeader } from '../components/ui';

export default function Approach() {
  return (
    <>
      <PageHeader
        eyebrow="Our approach"
        title="Decide first. Then deliver, integrate and support."
        intro="An SAP Activate-based approach. Discover, Prepare and Explore produce a defensible decision; Realize, Deploy and Run start only once the target path and scope are approved."
      />

      <section className="py-16 md:py-24 bg-white">
        <Container>
          <ol className="grid gap-5 md:grid-cols-3">
            {APPROACH_PHASES.map((p, i) => (
              <Fragment key={p.id}>
                <li className={`rounded-[1.5rem] border p-7 ${i <= DECISION_GATE_AFTER ? 'bg-blue-50 border-blue-100' : 'bg-slate-50 border-slate-200'}`}>
                  <div className="flex items-baseline justify-between mb-4">
                    <h2 className="text-2xl font-black text-slate-900">{p.name}</h2>
                    <span className="text-3xl font-black text-slate-300">{p.id}</span>
                  </div>
                  <p className="text-[11px] font-black uppercase tracking-widest text-blue-600 mb-5">{p.focus}</p>
                  <ul className="space-y-3">
                    {p.items.map((item) => <CheckItem key={item}>{item}</CheckItem>)}
                  </ul>
                </li>
                {i === DECISION_GATE_AFTER ? (
                  <li className="md:col-span-3 rounded-[1.5rem] border-2 border-dashed border-blue-400 bg-white p-6 text-center">
                    <p className="text-[11px] font-black uppercase tracking-widest text-blue-600 mb-1">Decision gate</p>
                    <p className="font-bold text-slate-800">
                      Decision pack: platform recommendation, roadmap, timeline, cost model and risks. Build starts only after approval.
                    </p>
                  </li>
                ) : null}
              </Fragment>
            ))}
          </ol>
        </Container>
      </section>

      <CtaBand
        source="approach-footer"
        title="Start at Discover."
        text="The first three phases run as a fixed-scope, three-week ERP Decision Sprint."
      />
    </>
  );
}
