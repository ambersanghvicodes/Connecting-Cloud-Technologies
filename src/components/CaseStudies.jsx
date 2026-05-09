import { useState } from 'react';
import { ChevronRight, Database, Link, TrendingUp, X } from 'lucide-react';
import { CASE_STUDIES } from '../data/siteContent';

export default function CaseStudies() {
  const [activeCase, setActiveCase] = useState(CASE_STUDIES[0]);

  return (
    <section id="cases" className="scroll-mt-28 py-24 bg-white min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="mb-12 text-center lg:text-left">
          <h2 className="text-xs font-black text-blue-600 uppercase tracking-[0.4em] mb-4">Implementation Briefs</h2>
          <h3 className="text-4xl font-black text-slate-900 tracking-tight">Enterprise Scale Success</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-2xl bg-slate-50/50">
          <div className="lg:col-span-4 bg-white border-r border-slate-200 p-6 space-y-3">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-4 mb-4">Architecture Type</p>
            {CASE_STUDIES.map((study) => (
              <button
                key={study.id}
                onClick={() => setActiveCase(study)}
                className={`w-full text-left p-5 rounded-2xl transition-all flex items-center justify-between group ${
                  activeCase.id === study.id ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'hover:bg-slate-50 text-slate-600'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      activeCase.id === study.id ? 'bg-white/20' : 'bg-slate-100'
                    }`}
                  >
                    <Database className={activeCase.id === study.id ? 'text-white' : 'text-blue-600'} size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm leading-tight">{study.client}</h4>
                    <p
                      className={`text-[10px] font-bold uppercase tracking-tighter ${
                        activeCase.id === study.id ? 'text-blue-100' : 'text-slate-400'
                      }`}
                    >
                      {study.tag}
                    </p>
                  </div>
                </div>
                <ChevronRight size={16} className={activeCase.id === study.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} />
              </button>
            ))}
          </div>

          <div className="lg:col-span-8 p-10 md:p-14 bg-white/40 backdrop-blur-md flex flex-col justify-between min-h-[500px]">
            <div className="animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <span className="px-4 py-1.5 bg-blue-600 text-white rounded-full text-[10px] font-black uppercase tracking-widest">
                  {activeCase.tag}
                </span>
                <span className="px-4 py-1.5 bg-slate-100 text-slate-500 rounded-full text-[10px] font-black uppercase tracking-widest">
                  Deliverable #0{activeCase.id}
                </span>
              </div>

              <h4 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 leading-tight">{activeCase.client}</h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                <div>
                  <h5 className="text-[11px] font-black text-blue-600 uppercase tracking-widest mb-4 border-b border-blue-100 pb-2 flex items-center">
                    <X className="w-3 h-3 mr-2 text-red-500" /> Operational Friction
                  </h5>
                  <p className="text-slate-600 leading-relaxed font-medium italic">"{activeCase.challenge}"</p>
                </div>
                <div>
                  <h5 className="text-[11px] font-black text-blue-600 uppercase tracking-widest mb-4 border-b border-blue-100 pb-2 flex items-center">
                    <Link className="w-3 h-3 mr-2 text-blue-600" /> Nexa Workflow
                  </h5>
                  <p className="text-slate-800 leading-relaxed font-bold">{activeCase.solution}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-slate-100">
              {activeCase.results.map((result) => (
                <div
                  key={result.label}
                  className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center space-x-4"
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                    <TrendingUp size={24} />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-slate-900 tracking-tighter">{result.value}</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{result.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
