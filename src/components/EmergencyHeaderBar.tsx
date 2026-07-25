import React from 'react';
import { PhoneCall, ShieldAlert, Clock, MapPin, Sparkles } from 'lucide-react';

interface EmergencyHeaderBarProps {
  onOpenEmergencyModal: () => void;
  onOpenFamousModal: () => void;
}

export const EmergencyHeaderBar: React.FC<EmergencyHeaderBarProps> = ({
  onOpenEmergencyModal,
  onOpenFamousModal,
}) => {
  return (
    <div className="bg-slate-900 text-slate-100 text-xs sm:text-sm border-b border-slate-800 py-2 px-4 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        
        {/* Left: 24/7 Hotline Status */}
        <div className="flex items-center gap-3 flex-wrap justify-center md:justify-start">
          <span className="inline-flex items-center gap-1.5 bg-rose-500/20 text-rose-300 font-semibold px-2.5 py-0.5 rounded-full border border-rose-500/30 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-rose-500 inline-block"></span>
            24/7 Locksmith ALWAYS On Call!
          </span>

          <a 
            href="tel:2503745625"
            className="flex items-center gap-1.5 text-blue-300 hover:text-white font-bold transition-colors"
            title="Call Kamloops Hotline"
          >
            <PhoneCall className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-slate-300">Kamloops:</span>
            <span className="underline decoration-blue-400/50 underline-offset-2">250-374-5625</span>
          </a>

          <span className="hidden sm:inline text-slate-600">|</span>

          <a 
            href="tel:2503954728"
            className="hidden sm:flex items-center gap-1.5 text-blue-300 hover:text-white font-bold transition-colors"
            title="Call 100 Mile House Hotline"
          >
            <PhoneCall className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-slate-300">100 Mile House:</span>
            <span className="underline decoration-blue-400/50 underline-offset-2">250-395-4728</span>
          </a>
        </div>

        {/* Right: Quick Action Triggers */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenFamousModal}
            className="text-amber-300 hover:text-amber-200 text-xs font-medium flex items-center gap-1 hover:underline transition-all"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Meet Our Famous Staff Member 🐾
          </button>

          <button
            onClick={onOpenEmergencyModal}
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-3 py-1 rounded-md shadow flex items-center gap-1.5 transition-transform active:scale-95 cursor-pointer"
          >
            <ShieldAlert className="w-3.5 h-3.5" />
            Request Rapid Lockout Dispatch
          </button>
        </div>

      </div>
    </div>
  );
};
