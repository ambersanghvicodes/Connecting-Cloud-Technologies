import { TEAM_LEADERSHIP, TEAM_PODS, TEAM_SHARED_ROLES } from '../data/content';
import { CheckItem, Container, CtaBand, Initials, PageHeader, SectionHeader } from '../components/ui';

export default function Team() {
  return (
    <>
      <PageHeader
        eyebrow="Our team"
        title="A senior-led team with named capability owners."
        intro="Across SAP functional, SAP technical and BTP, Salesforce, AI automation, data migration and support. You work with the people named here."
      />

      <section className="py-16 md:py-20 bg-white">
        <Container>
          <SectionHeader eyebrow="Core leadership" title="Leadership" />
          <div className="grid gap-5 md:grid-cols-2">
            {TEAM_LEADERSHIP.map((m) => (
              <article key={m.name} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
                <div className="flex items-center gap-4 mb-6">
                  <Initials>{m.initials}</Initials>
                  <div>
                    <h3 className="text-xl font-black text-slate-900">{m.name}</h3>
                    <p className="text-sm font-bold text-blue-600">{m.role}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {m.points.map((p) => <CheckItem key={p}>{p}</CheckItem>)}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20 bg-slate-50 border-y border-slate-200">
        <Container>
          <SectionHeader eyebrow="Delivery pods" title="Capability leads" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM_PODS.map((m) => (
              <article key={m.name} className="rounded-[1.5rem] bg-white border border-slate-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Initials size="sm">{m.initials}</Initials>
                  <div>
                    <h3 className="font-black text-slate-900">{m.name}</h3>
                    <p className="text-xs font-bold text-blue-600">{m.role}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">{m.desc}</p>
              </article>
            ))}
          </div>
          <div className="grid gap-5 md:grid-cols-2 mt-5">
            {TEAM_SHARED_ROLES.map((r) => (
              <article key={r.role} className="rounded-[1.5rem] bg-white border border-slate-200 p-6">
                <h3 className="font-black text-slate-900">{r.role}</h3>
                <p className="text-xs font-bold text-blue-600 mb-3">{r.owners}</p>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">{r.desc}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        source="team-footer"
        title="Meet the people who would run your program."
        text="Book a working session with the leads relevant to your landscape."
      />
    </>
  );
}
