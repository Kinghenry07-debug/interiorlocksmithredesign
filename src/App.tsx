import React, { useState } from 'react';
import { EmergencyHeaderBar } from './components/EmergencyHeaderBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { CommercialAlertSection } from './components/CommercialAlertSection';
import { ServiceAreaSection } from './components/ServiceAreaSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactQuoteSection } from './components/ContactQuoteSection';
import { FamousStaffModal } from './components/FamousStaffModal';
import { EmergencyDispatchModal } from './components/EmergencyDispatchModal';
import { AppointmentModal } from './components/AppointmentModal';
import { ClientAuthModal } from './components/ClientAuthModal';
import { AiAssistantWidget } from './components/AiAssistantWidget';
import { Footer } from './components/Footer';
import { PhoneCall, ShieldAlert, Key } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [showFamousModal, setShowFamousModal] = useState(false);
  const [showEmergencyModal, setShowEmergencyModal] = useState(false);
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState('');

  const handleOpenAppointment = (serviceTitle?: string) => {
    if (serviceTitle) {
      setSelectedServiceForBooking(serviceTitle);
    }
    setShowAppointmentModal(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-600 selection:text-white relative">
      
      {/* Sticky Top Header Container */}
      <header className="sticky top-0 z-40 w-full shadow-lg">
        <EmergencyHeaderBar
          onOpenEmergencyModal={() => setShowEmergencyModal(true)}
          onOpenFamousModal={() => setShowFamousModal(true)}
        />

        <Navbar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onOpenSignIn={() => setShowSignInModal(true)}
          onOpenAppointment={() => handleOpenAppointment()}
          onOpenEmergency={() => setShowEmergencyModal(true)}
        />
      </header>

      {/* Main Content View Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          onOpenAppointment={() => handleOpenAppointment()}
          onOpenEmergency={() => setShowEmergencyModal(true)}
          onSelectCategory={(cat) => {
            setActiveTab('services');
            const el = document.getElementById('services');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Services Section ("What We Do") */}
        <ServicesSection
          onOpenAppointment={handleOpenAppointment}
          onOpenEmergency={() => setShowEmergencyModal(true)}
        />

        {/* Commercial Business Security Alert Section */}
        <CommercialAlertSection
          onOpenAppointment={handleOpenAppointment}
        />

        {/* Service Area & Map Section */}
        <ServiceAreaSection
          onOpenAppointment={handleOpenAppointment}
        />

        {/* Customer Reviews Section */}
        <ReviewsSection />

        {/* Contact & Free Quote Inquiry Form Section */}
        <ContactQuoteSection
          preselectedService={selectedServiceForBooking}
        />
      </main>

      {/* Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onOpenSignIn={() => setShowSignInModal(true)}
        onOpenAppointment={() => handleOpenAppointment()}
        onOpenFamousModal={() => setShowFamousModal(true)}
      />

      {/* Persistent Floating Quick Phone Bar for Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 p-2.5 z-30 flex items-center justify-between gap-2 shadow-2xl">
        <a
          href="tel:2503745625"
          className="flex-1 bg-rose-600 hover:bg-rose-500 text-white font-extrabold text-xs py-2.5 rounded-xl flex items-center justify-center gap-1.5 shadow"
        >
          <PhoneCall className="w-4 h-4" /> Call 250-374-5625
        </a>

        <button
          onClick={() => handleOpenAppointment()}
          className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs py-2.5 rounded-xl flex items-center justify-center gap-1 shadow cursor-pointer"
        >
          <Key className="w-4 h-4" /> Book Service
        </button>
      </div>

      {/* Modals */}
      <FamousStaffModal
        isOpen={showFamousModal}
        onClose={() => setShowFamousModal(false)}
        onOpenAppointment={() => handleOpenAppointment('Locksmith Shop Visit')}
      />

      <EmergencyDispatchModal
        isOpen={showEmergencyModal}
        onClose={() => setShowEmergencyModal(false)}
      />

      <AppointmentModal
        isOpen={showAppointmentModal}
        onClose={() => setShowAppointmentModal(false)}
        initialService={selectedServiceForBooking}
      />

      <ClientAuthModal
        isOpen={showSignInModal}
        onClose={() => setShowSignInModal(false)}
      />

      {/* 24/7 Security AI Assistant Widget */}
      <AiAssistantWidget />

    </div>
  );
}
