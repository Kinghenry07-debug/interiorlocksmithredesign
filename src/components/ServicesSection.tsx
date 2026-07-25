import React, { useState } from 'react';
import { SERVICES_LIST } from '../data/mockData';
import { ServiceItem } from '../types';
import { 
  ShieldAlert, KeyRound, LockKeyhole, Vault, Home, Cpu, 
  Flame, Scissors, Check, ArrowRight, Search, PhoneCall, Calendar
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenAppointment: (serviceTitle?: string) => void;
  onOpenEmergency: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenAppointment,
  onOpenEmergency,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'commercial', label: 'Commercial & Security' },
    { id: 'automotive', label: 'Automotive & Fobs' },
    { id: 'safes', label: 'Safes & Vaults' },
    { id: 'keys', label: 'Mul-T-Lock & Keys' },
    { id: 'residential', label: 'Residential Rekey' },
    { id: 'access-control', label: 'Access Control' },
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldAlert': return <ShieldAlert className="w-6 h-6 text-blue-400" />;
      case 'KeyRound': return <KeyRound className="w-6 h-6 text-blue-400" />;
      case 'LockKeyhole': return <LockKeyhole className="w-6 h-6 text-blue-400" />;
      case 'Vault': return <Vault className="w-6 h-6 text-blue-400" />;
      case 'Home': return <Home className="w-6 h-6 text-blue-400" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-blue-400" />;
      case 'Flame': return <Flame className="w-6 h-6 text-rose-400" />;
      case 'Scissors': return <Scissors className="w-6 h-6 text-blue-400" />;
      default: return <LockKeyhole className="w-6 h-6 text-blue-400" />;
    }
  };

  const filteredServices = SERVICES_LIST.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.fullDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="services" className="py-16 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="text-blue-400 font-bold text-xs uppercase tracking-widest bg-blue-950/80 px-3 py-1 rounded-full border border-blue-800/50">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Comprehensive Locksmith & Physical Security Solutions
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            From automotive transponder keys to high-security cylinder guards and safe openings, our 12 staff members and 6 service vehicles handle it all.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-slate-950 p-3 rounded-2xl border border-slate-800">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-900/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 text-slate-200 text-xs pl-9 pr-3 py-2 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-slate-950 border border-slate-800/90 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 hover:shadow-xl transition-all group"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center border border-slate-800 group-hover:border-blue-500/30 transition-colors">
                    {getIcon(service.iconName)}
                  </div>
                  {service.popular && (
                    <span className="bg-amber-500/20 text-amber-300 font-bold text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-amber-500/30">
                      High Demand
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-4">
                  {service.shortDesc}
                </p>

                <div className="space-y-1.5 mb-6">
                  {service.highlights.slice(0, 3).map((hl, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-900 flex items-center justify-between gap-2">
                <button
                  onClick={() => setActiveModalService(service)}
                  className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                >
                  Learn Details <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onOpenAppointment(service.title)}
                  className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                >
                  Request Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Detailed Service Info */}
        {activeModalService && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 shadow-2xl relative space-y-4">
              
              <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600/20 text-blue-400 rounded-xl flex items-center justify-center border border-blue-500/30">
                    {getIcon(activeModalService.iconName)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{activeModalService.title}</h3>
                    <span className="text-xs text-slate-400 capitalize">{activeModalService.category} Service</span>
                  </div>
                </div>
                <button
                  onClick={() => setActiveModalService(null)}
                  className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"
                >
                  ✕
                </button>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                {activeModalService.fullDesc}
              </p>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Key Features & Capabilities:</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
                  {activeModalService.highlights.map((hl, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-end gap-3">
                <a
                  href="tel:2503745625"
                  className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl border border-slate-700 flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-blue-400" /> Call 250-374-5625
                </a>

                <button
                  onClick={() => {
                    const title = activeModalService.title;
                    setActiveModalService(null);
                    onOpenAppointment(title);
                  }}
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" /> Schedule On-Site Service
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
