import React, { useState } from 'react';
import { PhoneCall, ShieldAlert, Clock, MapPin, CheckCircle2, Car, Key, Home, Flame, X, AlertTriangle } from 'lucide-react';
import { SERVICE_AREAS } from '../data/mockData';

interface EmergencyDispatchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EmergencyDispatchModal: React.FC<EmergencyDispatchModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [step, setStep] = useState<number>(1);
  const [issueType, setIssueType] = useState<string>('Auto Lockout / Key Lost');
  const [town, setTown] = useState<string>('Kamloops');
  const [phone, setPhone] = useState<string>('');
  const [dispatched, setDispatched] = useState<boolean>(false);

  if (!isOpen) return null;

  const issues = [
    { id: 'Auto Lockout / Key Lost', label: 'Car / Truck Lockout or Lost Transponder Key', icon: Car },
    { id: 'Commercial Break-In / Frame Repair', label: 'Commercial Break-In or Damaged Door Cylinder', icon: Flame },
    { id: 'Home Lockout / Locked Out', label: 'House Lockout / Locked Out of Home', icon: Home },
    { id: 'Safe Opening Emergency', label: 'Locked Out of Safe / Lost Combination', icon: Key },
    { id: 'Broken Key Extraction', label: 'Key Broken Off In Ignition or Lock Cylinder', icon: ShieldAlert },
  ];

  const handleDispatchRequest = (e: React.FormEvent) => {
    e.preventDefault();
    setDispatched(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative space-y-6">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-xl hover:bg-slate-800"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
          <div className="w-10 h-10 bg-rose-500/20 text-rose-400 rounded-xl flex items-center justify-center border border-rose-500/30">
            <ShieldAlert className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-rose-400 bg-rose-950/60 px-2 py-0.5 rounded">
              24/7 Rapid Dispatch
            </span>
            <h3 className="text-xl font-black text-white">
              Emergency Locksmith Dispatch
            </h3>
          </div>
        </div>

        {dispatched ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h4 className="text-2xl font-black text-white">Dispatch Request Signal Sent!</h4>

            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-xs text-slate-300 space-y-2 text-left">
              <div className="flex justify-between border-b border-slate-800 pb-1">
                <span className="text-slate-400">Issue:</span>
                <span className="font-bold text-white">{issueType}</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-1">
                <span className="text-slate-400">Location:</span>
                <span className="font-bold text-white">{town}, BC</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Est. Mobile Van ETA:</span>
                <span className="font-bold text-emerald-400">20 - 35 Mins</span>
              </div>
            </div>

            <p className="text-xs text-amber-300 font-semibold bg-amber-500/10 p-3 rounded-xl border border-amber-500/20">
              ⚡ For immediate priority connection with our on-call locksmith on duty, tap the button below to call 250-374-5625 right now!
            </p>

            <a
              href="tel:2503745625"
              className="w-full bg-rose-600 hover:bg-rose-500 text-white font-extrabold text-sm py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-xl shadow-rose-900/40"
            >
              <PhoneCall className="w-5 h-5" /> CALL ON-CALL LOCKSMITH NOW (250-374-5625)
            </a>
          </div>
        ) : (
          <form onSubmit={handleDispatchRequest} className="space-y-4 text-xs">
            <div>
              <label className="block text-slate-300 font-bold mb-2">1. Select Emergency Type:</label>
              <div className="space-y-2">
                {issues.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setIssueType(item.id)}
                      className={`w-full p-3 rounded-xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
                        issueType === item.id
                          ? 'bg-blue-600/20 border-blue-500 text-white font-bold'
                          : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      <Icon className="w-4 h-4 text-blue-400 shrink-0" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-300 font-bold mb-1">2. BC Town / City:</label>
                <select
                  value={town}
                  onChange={(e) => setTown(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white focus:outline-none focus:border-blue-500"
                >
                  {SERVICE_AREAS.map((t, i) => (
                    <option key={i} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-slate-300 font-bold mb-1">3. Callback Phone *</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 250-555-0199"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="pt-2 space-y-2">
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm py-3.5 rounded-xl shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                REQUEST RAPID MOBILE DISPATCH
              </button>

              <a
                href="tel:2503745625"
                className="w-full bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs py-3 rounded-xl border border-slate-700 flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-rose-400" /> Direct Dial 250-374-5625
              </a>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
