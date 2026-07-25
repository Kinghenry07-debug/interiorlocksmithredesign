import React from 'react';
import { PhoneCall, MapPin, Mail, ShieldCheck, Heart, ArrowUp } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onOpenSignIn: () => void;
  onOpenAppointment: () => void;
  onOpenFamousModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  setActiveTab,
  onOpenSignIn,
  onOpenAppointment,
  onOpenFamousModal,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Col 1: Brand & Details */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                🔒
              </div>
              <span className="font-extrabold text-base text-white tracking-tight">
                INTERIOR LOCKSMITH LTD.
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Serving the British Columbia interior with TWO STORE LOCATIONS, TWELVE STAFF MEMBERS, and SIX SERVICE VEHICLES. Your trusted 24/7 physical security partner.
            </p>
            <div className="pt-1">
              <button
                onClick={onOpenFamousModal}
                className="text-amber-400 hover:underline font-semibold text-xs flex items-center gap-1"
              >
                🐾 Meet Barnaby - Our Famous Staff Member
              </button>
            </div>
          </div>

          {/* Col 2: Kamloops HQ */}
          <div className="space-y-2">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              Kamloops HQ Store
            </h4>
            <div className="space-y-1.5 text-slate-300">
              <div className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                <span>1346 Battle St., Kamloops, BC V2C 2N8</span>
              </div>
              <div className="flex items-center gap-1.5 font-bold text-white">
                <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
                <a href="tel:2503745625" className="hover:underline">250-374-5625</a>
              </div>
              <div className="text-[11px] text-slate-400">
                Mon-Fri: 8:30am - 5:00pm<br />
                <span className="text-amber-300 font-medium">On Call Evenings & Weekends</span>
              </div>
            </div>
          </div>

          {/* Col 3: 100 Mile House Store */}
          <div className="space-y-2">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              100 Mile House Location
            </h4>
            <div className="space-y-1.5 text-slate-300">
              <div className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                <span>Box 82, #2 - 407 Alder Ave., 100 Mile House, BC V0K 2E0</span>
              </div>
              <div className="flex items-center gap-1.5 font-bold text-white">
                <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
                <a href="tel:2503954728" className="hover:underline">250-395-4728</a>
              </div>
              <div className="text-[11px] text-slate-400">
                Mon-Fri: 9:00am - 4:00pm<br />
                <span className="text-amber-300 font-medium">Cariboo Mobile Service</span>
              </div>
            </div>
          </div>

          {/* Col 4: Quick Navigation & Services */}
          <div className="space-y-2">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-1">
              <li>
                <button onClick={() => setActiveTab('services')} className="hover:text-white transition-colors cursor-pointer">
                  What We Do (Services)
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('business')} className="hover:text-white transition-colors cursor-pointer">
                  Commercial Business Security
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('service-area')} className="hover:text-white transition-colors cursor-pointer">
                  Our BC Service Area
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('reviews')} className="hover:text-white transition-colors cursor-pointer">
                  Customer 5-Star Reviews
                </button>
              </li>
              <li>
                <button onClick={onOpenSignIn} className="hover:text-white transition-colors cursor-pointer">
                  Client & Business Sign In
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <div>
            © {new Date().getFullYear()} Interior Locksmith Ltd. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenAppointment}
              className="text-slate-400 hover:text-white transition-colors"
            >
              Book Consultation
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 bg-slate-900 hover:bg-slate-800 rounded-lg text-slate-300 hover:text-white transition-colors flex items-center gap-1"
            >
              <ArrowUp className="w-3.5 h-3.5" /> Back To Top
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
