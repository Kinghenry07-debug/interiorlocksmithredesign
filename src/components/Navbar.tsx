import React, { useState } from 'react';
import { KeyRound, Menu, X, UserCheck, Shield, ChevronDown, Calendar, Phone } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenSignIn: () => void;
  onOpenAppointment: () => void;
  onOpenEmergency: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenSignIn,
  onOpenAppointment,
  onOpenEmergency,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'What We Do' },
    { id: 'business', label: 'Business Owners' },
    { id: 'service-area', label: 'Our Service Area' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-slate-950 text-white border-b border-slate-800 backdrop-blur-md bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group cursor-pointer"
          >
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-900/40 group-hover:bg-blue-500 transition-all border border-blue-400/30">
              {/* Keyhole Logo Icon */}
              <div className="relative flex flex-col items-center justify-center">
                <div className="w-4 h-4 rounded-full border-2 border-white bg-slate-950"></div>
                <div className="w-2.5 h-3.5 bg-white -mt-1 rounded-b-sm"></div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-blue-400 transition-colors">
                  INTERIOR
                </span>
                <span className="bg-blue-600/30 text-blue-300 text-[10px] font-bold px-1.5 py-0.5 rounded border border-blue-500/30">
                  LTD.
                </span>
              </div>
              <span className="text-xs tracking-widest text-slate-400 uppercase font-semibold block">
                LOCKSMITH
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                  activeTab === item.id
                    ? 'bg-blue-600/20 text-blue-300 font-bold border border-blue-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenAppointment}
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold px-3.5 py-2 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-blue-400" />
              Schedule Quote
            </button>

            <button
              onClick={onOpenSignIn}
              className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2 rounded-lg shadow-md hover:shadow-blue-600/30 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <UserCheck className="w-3.5 h-3.5" />
              Sign In
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenSignIn}
              className="text-xs bg-slate-800 text-slate-200 px-3 py-1.5 rounded-lg font-medium border border-slate-700"
            >
              Sign In
            </button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-2 shadow-2xl max-h-[80vh] overflow-y-auto">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                activeTab === item.id
                  ? 'bg-blue-600 text-white font-bold'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}

          <div className="pt-4 border-t border-slate-800 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEmergency();
              }}
              className="w-full bg-rose-600 hover:bg-rose-500 text-white font-bold py-3 rounded-lg text-center flex items-center justify-center gap-2 shadow-lg"
            >
              <Shield className="w-5 h-5" />
              24/7 Lockout Dispatch (250-374-5625)
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAppointment();
              }}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-lg text-center flex items-center justify-center gap-2 shadow-lg"
            >
              <Calendar className="w-5 h-5" />
              Book Appointment / Free Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
