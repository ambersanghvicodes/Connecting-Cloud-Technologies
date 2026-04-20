import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { ShieldCheck, Zap } from 'lucide-react';
import { EFFICIENCY_DATA } from '../data/siteContent';

export default function EfficiencySection() {
  return (
    <section id="efficiency" className="scroll-mt-28 py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              We don't sell software.
              <br />
              We sell <span className="text-blue-500 underline">Time.</span>
            </h2>
            <p className="text-slate-400 text-xl leading-relaxed mb-10">
              Our implementations focus on removing the "friction" between departments. Here is how we accelerate the L2C cycle compared to traditional siloed setups.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4 p-4 rounded-2xl bg-slate-800/50 border border-slate-700">
                <Zap className="text-blue-500 flex-shrink-0" />
                <div>
                  <p className="font-bold">Automated Handoffs</p>
                  <p className="text-sm text-slate-400">
                    Zero human intervention from contract signed to SAP ERP order entry.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-2xl bg-slate-800/50 border border-slate-700">
                <ShieldCheck className="text-blue-400 flex-shrink-0" />
                <div>
                  <p className="font-bold">Financial Compliance</p>
                  <p className="text-sm text-slate-400">
                    Automatic revenue recognition rules compliant with ASC 606 standards.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl h-[400px]">
            <h4 className="text-slate-900 font-black mb-6 flex items-center text-sm uppercase tracking-widest">
              Cycle Time Comparison (Hours)
            </h4>
            <ResponsiveContainer width="100%" height="90%">
              <BarChart data={EFFICIENCY_DATA}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="stage" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip cursor={{ fill: '#f8fafc' }} />
                <Bar dataKey="legacy" name="Legacy Silos" fill="#e2e8f0" radius={[4, 4, 0, 0]} />
                <Bar dataKey="nexa" name="Nexa Optimized" fill="#d97706" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
