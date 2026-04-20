import { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { L2C_STAGES } from '../data/siteContent';

export default function L2CExplorer() {
  const [activeStage, setActiveStage] = useState(L2C_STAGES[0]);

  return (
    <section id="process" className="scroll-mt-28 py-24 bg-white overflow-hidden">
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
}
