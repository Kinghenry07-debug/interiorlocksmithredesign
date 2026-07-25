import React from 'react';
import { PhoneCall, ShieldCheck, MapPin, Truck, Users, Award, ArrowRight, Clock, Key } from 'lucide-react';
import { STORE_LOCATIONS } from '../data/mockData';

interface HeroProps {
  onOpenAppointment: () => void;
  onOpenEmergency: () => void;
  onSelectCategory: (category: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenAppointment,
  onOpenEmergency,
  onSelectCategory,
}) => {
  return (
    <section id="home" className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden pt-8 pb-16 border-b border-slate-800">
      
      {/* Background Subtle Grid & Security Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-slate-800/80 border border-slate-700/80 rounded-full px-4 py-1.5 shadow-inner">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="text-xs sm:text-sm font-semibold text-slate-200">
              Trusted 24/7 Security Partner in British Columbia
            </span>
          </div>
        </div>

        {/* Hero Title & Main Hook */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            Full Service <span className="text-blue-500 underline decoration-blue-500/40 underline-offset-8">24 Hour Locksmith</span>
          </h1>

          <div className="text-2xl sm:text-3xl font-extrabold text-blue-300 font-mono tracking-tight pt-1">
            <a href="tel:2503745625" className="hover:text-white transition-colors inline-flex items-center gap-2">
              <PhoneCall className="w-6 h-6 text-emerald-400 animate-bounce" />
              250-374-5625
            </a>
          </div>

          <p className="text-sm sm:text-lg text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
            Call Us Anytime — Locksmith <strong className="text-amber-300">ALWAYS On Call!</strong> Whether it is an emergency nighttime break-in repair, vehicle or residential lockout, planned maintenance, or high-security cylinder upgrade, <strong className="text-white">WE CAN HELP!!</strong>
          </p>
        </div>

        {/* Big Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
          <a
            href="tel:2503745625"
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-center px-8 py-4 rounded-xl shadow-xl shadow-blue-900/40 border border-blue-400/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3 text-base sm:text-lg cursor-pointer"
          >
            <PhoneCall className="w-5 h-5" />
            CLICK HERE TO SPEAK TO OUR LOCKSMITHS NOW
          </a>

          <button
            onClick={onOpenAppointment}
            className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold px-7 py-4 rounded-xl border border-slate-700 transition-all flex items-center justify-center gap-2 text-base cursor-pointer hover:border-slate-500"
          >
            <Key className="w-5 h-5 text-blue-400" />
            HOW CAN WE HELP YOU TODAY?
          </button>
        </div>

        {/* Core Stats Bar */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl text-center shadow-md">
            <div className="w-10 h-10 bg-blue-500/10 text-blue-400 rounded-lg flex items-center justify-center mx-auto mb-2 border border-blue-500/20">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="text-2xl font-black text-white">2 LOCATIONS</div>
            <div className="text-xs text-slate-400 font-medium mt-0.5">Kamloops & 100 Mile House</div>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl text-center shadow-md">
            <div className="w-10 h-10 bg-blue-500/10 text-blue-400 rounded-lg flex items-center justify-center mx-auto mb-2 border border-blue-500/20">
              <Users className="w-5 h-5" />
            </div>
            <div className="text-2xl font-black text-white">12 STAFF</div>
            <div className="text-xs text-slate-400 font-medium mt-0.5">Knowledgeable Certified Team</div>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl text-center shadow-md">
            <div className="w-10 h-10 bg-blue-500/10 text-blue-400 rounded-lg flex items-center justify-center mx-auto mb-2 border border-blue-500/20">
              <Truck className="w-5 h-5" />
            </div>
            <div className="text-2xl font-black text-white">6 VEHICLES</div>
            <div className="text-xs text-slate-400 font-medium mt-0.5">Mobile On-Site Dispatch Units</div>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl text-center shadow-md">
            <div className="w-10 h-10 bg-amber-500/10 text-amber-400 rounded-lg flex items-center justify-center mx-auto mb-2 border border-amber-500/20">
              <Award className="w-5 h-5" />
            </div>
            <div className="text-2xl font-black text-white">5-STAR</div>
            <div className="text-xs text-slate-400 font-medium mt-0.5">Famous Customer Service</div>
          </div>
        </div>

        {/* Storefront Cards Showcase */}
        <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          
          {/* Kamloops Store Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl hover:border-slate-700 transition-all flex flex-col justify-between">
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="bg-blue-600/20 text-blue-300 font-bold text-xs px-3 py-1 rounded-full border border-blue-500/30">
                  Kamloops HQ Store
                </span>
                <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> 8:30am - 5:00pm Mon-Fri
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Interior Locksmith Ltd.</h3>
              <p className="text-slate-300 text-sm mb-4">
                1346 Battle St., Kamloops, BC V2C 2N8
              </p>
              
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800/80 mb-4 text-xs text-slate-300 space-y-1">
                <div><strong className="text-white">Daytime Phone:</strong> 250-374-5625</div>
                <div><strong className="text-white">24/7 Mobile Dispatch:</strong> Always On Call Evenings & Weekends</div>
              </div>
            </div>

            <div className="p-4 bg-slate-950/60 border-t border-slate-800/80 flex items-center justify-between">
              <a 
                href="tel:2503745625"
                className="text-blue-400 hover:text-white text-sm font-bold flex items-center gap-1.5"
              >
                <PhoneCall className="w-4 h-4" /> Call Kamloops Store
              </a>
              <button
                onClick={onOpenAppointment}
                className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded-lg font-semibold transition-colors cursor-pointer"
              >
                Book Kamloops Tech
              </button>
            </div>
          </div>

          {/* 100 Mile House Store Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl hover:border-slate-700 transition-all flex flex-col justify-between">
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="bg-blue-600/20 text-blue-300 font-bold text-xs px-3 py-1 rounded-full border border-blue-500/30">
                  100 Mile House Location
                </span>
                <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> 9:00am - 4:00pm Mon-Fri
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">100 Mile House Store</h3>
              <p className="text-slate-300 text-sm mb-4">
                Box 82, #2 - 407 Alder Ave., 100 Mile House, BC V0K 2E0
              </p>

              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800/80 mb-4 text-xs text-slate-300 space-y-1">
                <div><strong className="text-white">Direct Phone:</strong> 250-395-4728</div>
                <div><strong className="text-white">Coverage:</strong> Entire Cariboo Area & Regional Mobile Van</div>
              </div>
            </div>

            <div className="p-4 bg-slate-950/60 border-t border-slate-800/80 flex items-center justify-between">
              <a 
                href="tel:2503954728"
                className="text-blue-400 hover:text-white text-sm font-bold flex items-center gap-1.5"
              >
                <PhoneCall className="w-4 h-4" /> Call 100 Mile House
              </a>
              <button
                onClick={onOpenAppointment}
                className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded-lg font-semibold transition-colors cursor-pointer"
              >
                Book Cariboo Tech
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
