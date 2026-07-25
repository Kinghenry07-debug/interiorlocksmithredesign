import React from 'react';
import { ShieldAlert, Newspaper, AlertTriangle, ArrowRight, Lock, CheckCircle2 } from 'lucide-react';

interface CommercialAlertSectionProps {
  onOpenAppointment: (serviceTitle?: string) => void;
}

export const CommercialAlertSection: React.FC<CommercialAlertSectionProps> = ({
  onOpenAppointment,
}) => {
  return (
    <section id="business" className="py-16 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white relative overflow-hidden border-b border-slate-800">
      
      {/* Decorative Warning Backdrop Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-rose-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner Pill */}
        <div className="inline-flex items-center gap-2 bg-rose-500/10 border border-rose-500/30 px-3.5 py-1.5 rounded-full text-rose-300 font-bold text-xs uppercase tracking-wider mb-6">
          <AlertTriangle className="w-4 h-4 text-rose-400" />
          Kamloops & Regional Business Security Notice
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Copy */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              Commercial Break-Ins Are On The Rise
            </h2>

            <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl flex items-start gap-3">
              <Newspaper className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <div className="text-xs text-slate-300">
                <strong className="text-white block font-semibold mb-0.5">RECENT LOCAL NEWS STORY:</strong>
                <em>"Kamloops This Week: Kamloops Mounties say property crime is trending up"</em>
              </div>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              With commercial properties facing increased vulnerability during evening hours and weekends, thieves are targeting storefront entrance doors by forcibly pulling out standard lock cylinders.
            </p>

            <div className="bg-blue-950/40 border border-blue-800/60 p-5 rounded-2xl space-y-3">
              <h3 className="text-base font-bold text-blue-200 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-blue-400" />
                The Defense: High-Security Cylinder Guards
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Prevent thieves from pulling off your lock cylinder (YES - this is happening frequently in Kamloops) with a heavy-duty high security cylinder guard installed by our certified technicians.
              </p>
              
              <ul className="space-y-2 pt-2 text-xs text-slate-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Hardened steel ring barrier blocks pipe wrenches and pulling tools</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Mul-T-Lock high security cylinder upgrade options available</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Free on-site commercial security assessment for business owners</span>
                </li>
              </ul>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenAppointment('Commercial Cylinder Guard Assessment')}
                className="bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm px-6 py-3.5 rounded-xl shadow-xl shadow-blue-900/30 flex items-center gap-2 transition-transform active:scale-98 cursor-pointer"
              >
                FIND OUT HOW WE CAN HELP SECURE YOUR BUSINESS
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Visual Interactive Box */}
          <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 p-6 rounded-2xl space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Business Owner Checklist
              </span>
              <Lock className="w-4 h-4 text-amber-400" />
            </div>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="font-bold text-white">Storefront Cylinder Shield</div>
                  <div className="text-slate-400 text-[11px]">Protects main entry doors</div>
                </div>
                <span className="text-emerald-400 font-bold bg-emerald-950/60 px-2 py-1 rounded">Recommended</span>
              </div>

              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="font-bold text-white">Restricted Key Control</div>
                  <div className="text-slate-400 text-[11px]">Mul-T-Lock Integrator</div>
                </div>
                <span className="text-emerald-400 font-bold bg-emerald-950/60 px-2 py-1 rounded">Restricted</span>
              </div>

              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="font-bold text-white">Timed Electronic Access</div>
                  <div className="text-slate-400 text-[11px]">Auto-lock / unlock doors</div>
                </div>
                <span className="text-blue-400 font-bold bg-blue-950/60 px-2 py-1 rounded">SMARTAIR</span>
              </div>
            </div>

            <div className="bg-amber-500/10 border border-amber-500/30 p-3 rounded-xl text-center">
              <span className="text-xs font-bold text-amber-300">
                Call 250-374-5625 for 24/7 Urgent Commercial Lockout & B&E Repair
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
