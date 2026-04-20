import { ArrowRight, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-24 lg:pb-32 bg-gradient-to-b from-blue-50 via-white to-slate-100 scroll-mt-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.18),_transparent_40%)]" />
      <div className="pointer-events-none absolute right-0 top-24 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl" />
      <div className="pointer-events-none absolute left-0 bottom-0 h-64 w-64 rounded-full bg-slate-900/10 blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 bg-blue-600/10 text-blue-700 px-4 py-2 rounded-full text-xs font-black uppercase tracking-[0.3em] mb-6">
              <Zap size={16} />
              <span>Lead-to-Cash Excellence</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.0] max-w-3xl">
              Turn your lead-to-cash process into <span className="text-blue-600">predictable revenue.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
              We design and connect CRM,CPQ, and ERP workflows so every lead converts cleanly into cash, without manual handoffs or lost margin.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#cases"
                className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-blue-600 transition-all shadow-2xl flex items-center justify-center"
              >
                View Case Studies <ArrowRight className="ml-2" />
              </a>
              <a
                href="#process"
                className="bg-white border-2 border-slate-200 px-10 py-5 rounded-2xl font-black text-lg hover:bg-slate-50 transition-all text-center"
              >
                Our L2C Framework
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-blue-100 rounded-[3rem] -rotate-3"></div>
            <div className="relative bg-slate-900 p-8 rounded-[3rem] shadow-2xl border-4 border-white">
              <div className="space-y-6">
                <div className="flex items-center justify-between text-white/50 text-xs font-black uppercase tracking-widest">
                  <span>Network Health</span>
                  <span className="text-emerald-400">Stable</span>
                </div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 w-[88%]"></div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-800 p-4 rounded-2xl">
                    <p className="text-blue-500 text-xl font-black">92%</p>
                    <p className="text-white/40 text-[10px] uppercase font-bold">Automation</p>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-2xl">
                    <p className="text-emerald-400 text-xl font-black">0.0</p>
                    <p className="text-white/40 text-[10px] uppercase font-bold">Error Margin</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
