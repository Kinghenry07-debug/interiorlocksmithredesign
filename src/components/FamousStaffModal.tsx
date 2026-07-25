import React, { useState } from 'react';
import { FAMOUS_STAFF_MEMBER } from '../data/mockData';
import { Award, Heart, Sparkles, Shield, X, PhoneCall } from 'lucide-react';

interface FamousStaffModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAppointment: () => void;
}

export const FamousStaffModal: React.FC<FamousStaffModalProps> = ({
  isOpen,
  onClose,
  onOpenAppointment,
}) => {
  const [treatCount, setTreatCount] = useState<number>(142);
  const [wagging, setWagging] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleGiveTreat = () => {
    setTreatCount(prev => prev + 1);
    setWagging(true);
    setTimeout(() => setWagging(false), 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative space-y-6 overflow-hidden">
        
        {/* Background Decorative Accent */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-xl hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center space-y-2">
          <span className="bg-amber-500/20 text-amber-300 font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full border border-amber-500/30 inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            Our Most Famous Staff Member
          </span>
          <h3 className="text-3xl font-black text-white">
            Meet Barnaby! 🐶
          </h3>
          <p className="text-xs text-slate-400">
            {FAMOUS_STAFF_MEMBER.role}
          </p>
        </div>

        {/* Dog Profile Box */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 text-center space-y-4">
          <div className="relative inline-block mx-auto">
            <div className={`w-28 h-28 rounded-full bg-gradient-to-br from-amber-600 to-amber-800 p-1 shadow-xl transition-transform ${wagging ? 'scale-110 rotate-3' : ''}`}>
              <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center text-5xl">
                🐕
              </div>
            </div>
            {wagging && (
              <span className="absolute -top-2 -right-2 bg-amber-400 text-slate-950 font-black text-[10px] px-2 py-0.5 rounded-full shadow animate-bounce">
                Woof! 🍖
              </span>
            )}
          </div>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            {FAMOUS_STAFF_MEMBER.bio}
          </p>

          {/* Dog Stats Grid */}
          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-900">
            <div className="bg-slate-900 p-2 rounded-xl">
              <div className="text-xs font-bold text-amber-300">{FAMOUS_STAFF_MEMBER.stats.keysInspected}</div>
              <div className="text-[10px] text-slate-400">Keys Inspected</div>
            </div>

            <div className="bg-slate-900 p-2 rounded-xl">
              <div className="text-xs font-bold text-amber-300">{FAMOUS_STAFF_MEMBER.stats.tailWagsPerMin}</div>
              <div className="text-[10px] text-slate-400">Tail Wags/Min</div>
            </div>

            <div className="bg-slate-900 p-2 rounded-xl">
              <div className="text-xs font-bold text-amber-300">{treatCount}</div>
              <div className="text-[10px] text-slate-400">Treats Received</div>
            </div>
          </div>
        </div>

        {/* Interactive Treat Button */}
        <div className="text-center space-y-3">
          <button
            onClick={handleGiveTreat}
            className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm py-3 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-transform active:scale-95 cursor-pointer"
          >
            <Heart className="w-4 h-4 fill-slate-950" />
            Give Barnaby a Virtual Treat! ({treatCount})
          </button>

          <p className="text-[11px] text-slate-400">
            While Barnaby maintains shop morale, our <strong>12 certified human staff members</strong> are ready to assist you with all physical security needs!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row gap-2">
          <a
            href="tel:2503745625"
            className="flex-1 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs py-2.5 rounded-xl border border-slate-700 text-center flex items-center justify-center gap-1.5"
          >
            <PhoneCall className="w-3.5 h-3.5 text-blue-400" /> Call Kamloops Shop
          </a>

          <button
            onClick={() => {
              onClose();
              onOpenAppointment();
            }}
            className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs py-2.5 rounded-xl shadow cursor-pointer"
          >
            Book Locksmith Service
          </button>
        </div>

      </div>
    </div>
  );
};
