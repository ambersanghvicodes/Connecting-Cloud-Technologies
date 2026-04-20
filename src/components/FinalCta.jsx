export default function FinalCta() {
  return (
    <section id="contact" className="scroll-mt-28 py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-r from-blue-700 to-indigo-800 rounded-[4rem] p-12 md:p-24 relative overflow-hidden text-center text-white shadow-3xl">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight uppercase italic leading-[0.9]">
              Stop leaking <br />
              margin.
            </h2>
            <p className="text-xl text-blue-100/70 font-medium mb-12">
              Our <strong>L2C Readiness Audit</strong> identifies the specific technical bottlenecks costing you revenue. Get your integration roadmap today.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center bg-white/10 p-2 rounded-3xl backdrop-blur-md border border-white/20 max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Work Email"
                className="bg-transparent border-none px-6 py-4 rounded-2xl w-full text-white placeholder:text-blue-200 focus:ring-0"
              />
              <button className="bg-white text-blue-700 font-black px-10 py-4 rounded-2xl transition-all hover:bg-blue-50 whitespace-nowrap uppercase italic tracking-tighter">
                Book L2C Audit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
