import { PHARMA_CAPABILITIES, PHARMA_PROOF, PHARMA_PROOF_NOTE } from '../data/content';
import { BookButton, Container, CtaBand, PageHeader, SectionHeader, SprintButton } from '../components/ui';

export default function Pharma() {
  return (
    <>
      <PageHeader
        eyebrow="Pharma & life sciences"
        title="Validated SAP for regulated manufacturing."
        intro="For pharma and life-sciences manufacturers, an ERP decision is also a validation, data-integrity and audit decision. Our team has delivered SAP where batch, quality and export compliance come first."
      >
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <BookButton source="pharma-hero" />
          <SprintButton source="pharma-hero" />
        </div>
      </PageHeader>

      <section className="py-16 md:py-20 bg-white">
        <Container>
          <SectionHeader eyebrow="What we bring" title="Built for batch, quality and audit requirements." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PHARMA_CAPABILITIES.map((c) => (
              <div key={c.title} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-7">
                <h3 className="text-lg font-black text-slate-900 mb-2">{c.title}</h3>
                <p className="text-slate-600 font-medium leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-slate-950">
        <Container>
          <SectionHeader
            dark
            eyebrow="Proof points"
            title="Pharma and life-sciences programs our team has delivered."
            intro="And what each one teaches for the next plant."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {PHARMA_PROOF.map((p) => (
              <article key={p.client} className="flex flex-col rounded-[1.5rem] border border-white/10 bg-white/5 p-7">
                <p className="text-[11px] font-black uppercase tracking-widest text-blue-400 mb-2">{p.tag}</p>
                <h3 className="text-xl font-black text-white mb-3">{p.client}</h3>
                <p className="text-slate-300 font-medium leading-relaxed mb-6 flex-1">{p.what}</p>
                <p className="rounded-xl bg-blue-600/15 border border-blue-500/20 p-4 text-sm font-semibold text-blue-100">
                  <span className="font-black text-white">Lesson: </span>{p.lesson}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-8 text-sm text-slate-500 font-medium">{PHARMA_PROOF_NOTE}</p>
        </Container>
      </section>

      <CtaBand
        source="pharma-footer"
        title="Integrating a plant or choosing an ERP path?"
        text="Plan validation from day one. Start with a working session with your IT and Quality leads, then a three-week decision sprint."
      />
    </>
  );
}
