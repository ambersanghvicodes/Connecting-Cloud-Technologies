import { Activity } from 'lucide-react';
import { SPECIALIZED_STACK } from '../data/siteContent';

export default function PlatformStack() {
  return (
    <section id="specialization" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-blue-600 font-bold text-[10px] uppercase tracking-[0.4em] mb-4">Core Competency</h2>
            <h3 className="text-4xl font-black text-slate-900 tracking-tight leading-none uppercase italic">
              Advanced Stack
            </h3>
          </div>
          <p className="text-slate-400 text-sm font-medium max-w-xs leading-relaxed">
            Specialized architecture for high-complexity Variant Configuration and multi-cloud orchestration.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-100 border border-slate-100 rounded-3xl overflow-hidden">
          {SPECIALIZED_STACK.map((item) => (
            <div key={item.id} className="group relative bg-white p-10 hover:bg-blue-600 transition-all duration-500">
              <div className="mb-6 text-blue-600 group-hover:text-white transition-colors">{item.icon}</div>
              <h4 className="text-lg font-black text-slate-900 group-hover:text-white uppercase italic tracking-tighter mb-1 transition-colors">
                {item.name}
              </h4>
              <p className="text-[10px] font-bold text-slate-400 group-hover:text-blue-100 uppercase tracking-widest transition-colors">
                {item.role}
              </p>
              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-20 transition-opacity">
                <Activity size={40} className="text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
