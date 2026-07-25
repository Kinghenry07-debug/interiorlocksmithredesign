import React, { useState } from 'react';
import { SERVICE_AREAS, STORE_LOCATIONS } from '../data/mockData';
import { MapPin, PhoneCall, CheckCircle2, Search, Truck, Navigation } from 'lucide-react';

interface ServiceAreaSectionProps {
  onOpenAppointment: (locationName?: string) => void;
}

export const ServiceAreaSection: React.FC<ServiceAreaSectionProps> = ({
  onOpenAppointment,
}) => {
  const [activeLocationId, setActiveLocationId] = useState<string>('kamloops');
  const [searchTown, setSearchTown] = useState<string>('');

  const activeStore = STORE_LOCATIONS.find(loc => loc.id === activeLocationId) || STORE_LOCATIONS[0];

  const matchedTowns = SERVICE_AREAS.filter(town =>
    town.toLowerCase().includes(searchTown.toLowerCase().trim())
  );

  return (
    <section id="service-area" className="py-16 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-blue-400 font-bold text-xs uppercase tracking-widest bg-blue-950/80 px-3 py-1 rounded-full border border-blue-800/50">
            Regional Coverage
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Our Service Area & Physical Store Locations
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            With two store locations in Kamloops and 100 Mile House and 6 mobile service vehicles, we cover the largest locksmith service area in the BC interior.
          </p>
        </div>

        {/* Location Switcher & Interactive Map */}
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left Column: Store Details & Switcher */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex rounded-xl bg-slate-950 p-1 border border-slate-800">
              {STORE_LOCATIONS.map((loc) => (
                <button
                  key={loc.id}
                  onClick={() => setActiveLocationId(loc.id)}
                  className={`flex-1 py-2.5 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activeLocationId === loc.id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {loc.city} Store
                </button>
              ))}
            </div>

            {/* Active Store Details Card */}
            <div className="bg-slate-950 border border-slate-800 p-6 rounded-2xl space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white">{activeStore.name}</h3>
                <span className="bg-blue-600/20 text-blue-300 text-xs px-2.5 py-1 rounded font-bold border border-blue-500/30">
                  {activeStore.city}
                </span>
              </div>

              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Address:</strong>
                    {activeStore.address}, {activeStore.city}, BC {activeStore.postalCode}
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <PhoneCall className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Direct Phone:</strong>
                    <a href={`tel:${activeStore.phoneRaw}`} className="text-blue-300 hover:underline font-bold text-sm">
                      {activeStore.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Truck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Store Hours & On-Call Dispatch:</strong>
                    <div>{activeStore.hours}</div>
                    <div className="text-amber-300 font-semibold">{activeStore.onCallInfo}</div>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex gap-3">
                <a
                  href={`tel:${activeStore.phoneRaw}`}
                  className="flex-1 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold py-2.5 rounded-xl text-center flex items-center justify-center gap-1.5 shadow"
                >
                  <PhoneCall className="w-3.5 h-3.5" /> Call Store
                </a>
                <button
                  onClick={() => onOpenAppointment(activeStore.name)}
                  className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold py-2.5 rounded-xl border border-slate-700 cursor-pointer"
                >
                  Book On-Site Service
                </button>
              </div>
            </div>

            {/* Live Service Check Search */}
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3">
              <label className="text-xs font-bold text-slate-300 flex items-center gap-2">
                <Navigation className="w-4 h-4 text-blue-400" />
                Check Mobile Service Availability in Your Town:
              </label>

              <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Type your town e.g. Cache Creek, Merritt..."
                  value={searchTown}
                  onChange={(e) => setSearchTown(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 text-xs text-white pl-9 pr-3 py-2.5 rounded-xl focus:outline-none focus:border-blue-500"
                />
              </div>

              {searchTown.trim().length > 0 && (
                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs">
                  {matchedTowns.length > 0 ? (
                    <div className="text-emerald-400 font-bold flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>YES! Mobile locksmith service is fully available in {matchedTowns.join(', ')}!</span>
                    </div>
                  ) : (
                    <div className="text-amber-300 font-medium">
                      We serve virtually all BC Interior communities surrounding {searchTown}! Call 250-374-5625 to confirm dispatch.
                    </div>
                  )}
                </div>
              )}
            </div>

          </div>

          {/* Right Column: Embedded Interactive Map */}
          <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden h-96 sm:h-[420px] shadow-2xl relative">
            <iframe
              title={`Map for ${activeStore.name}`}
              src={activeStore.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              className="w-full h-full grayscale-[0.3] contrast-[1.1]"
            ></iframe>
            
            <div className="absolute bottom-3 left-3 bg-slate-900/90 backdrop-blur px-3 py-1.5 rounded-lg border border-slate-800 text-[11px] text-slate-300 font-medium shadow">
              📍 Map Location: {activeStore.address}, {activeStore.city}, BC
            </div>
          </div>

        </div>

        {/* All Covered Communities Directory Grid */}
        <div className="bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Truck className="w-5 h-5 text-blue-400" />
            Full BC Interior Regional Coverage Directory
          </h3>
          <p className="text-xs text-slate-400">
            Our 6 mobile service vans are outfitted with key cutting machinery and transponder programmers to travel directly to your home, business, or roadside location:
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {SERVICE_AREAS.map((town, idx) => (
              <span
                key={idx}
                className="bg-slate-900 border border-slate-800 text-slate-200 text-xs px-3 py-1.5 rounded-lg hover:border-blue-500/50 hover:text-blue-300 transition-colors inline-flex items-center gap-1.5"
              >
                <CheckCircle2 className="w-3 h-3 text-blue-400" />
                {town}
              </span>
            ))}
            <span className="bg-blue-600/20 border border-blue-500/30 text-blue-300 font-bold text-xs px-3 py-1.5 rounded-lg">
              + AND MORE RURAL COMMUNITIES
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
