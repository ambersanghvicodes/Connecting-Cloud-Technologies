import { SYSTEMS } from '../data/siteContent';
import { ArrowRight, FileText, LayoutGrid, Target } from 'lucide-react';

export default function EnterpriseSystems({ onCapSelect }) {
  const SYSTEMS = [
    { 
      name: 'CRM', 
      role: 'Front End', 
      targetId: 'sf',
      icon: <Target size={22} />, 
      desc: 'Seamlessly connected customer data and Salesforce Revenue Cloud flows.' 
    },
    { 
      name: 'CPQ', 
      role: 'Engine Room', 
      targetId: 'cpq',
      icon: <FileText size={22} />, 
      desc: 'Connecting complex pricing logic with high-speed quoting performance.' 
    },
    { 
      name: 'ERP', 
      role: 'Digital Core', 
      targetId: 'avc',
      icon: <LayoutGrid size={22} />, 
      desc: 'The configuration backbone for industrial leaders within the SAP S/4HANA core.' 
    },
  ];

  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
          {SYSTEMS.map((item, idx) => (
            <div 
              key={idx} 
              onClick={() => onCapSelect(item.targetId)}
              className="group cursor-pointer rounded-[2.5rem] border border-slate-200 bg-white p-8 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-600/5 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:bg-blue-50 transition-all mb-8">
                {item.icon}
              </div>
              <h4 className="font-black text-2xl text-slate-900 mb-2">{item.name}</h4>
              <p className="text-[10px] uppercase tracking-widest text-blue-600 font-black mb-4">{item.role}</p>
              <p className="text-sm text-slate-500 leading-relaxed font-medium mb-4">{item.desc}</p>
              <div className="flex items-center gap-2 text-[10px] font-black text-blue-600 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                View Architecture <ArrowRight size={14} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
