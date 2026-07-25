import React, { useState } from 'react';
import { Calendar, Clock, MapPin, CheckCircle2, User, Phone, Mail, X } from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialService = '',
}) => {
  const [service, setService] = useState(initialService || 'Commercial Security & Cylinder Guard');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('Morning (8:30am - 12:00pm)');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('Kamloops HQ Store');
  const [details, setDetails] = useState('');
  const [booked, setBooked] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setBooked(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative space-y-6">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-xl hover:bg-slate-800"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
          <div className="w-10 h-10 bg-blue-600/20 text-blue-400 rounded-xl flex items-center justify-center border border-blue-500/30">
            <Calendar className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-400 bg-blue-950/60 px-2 py-0.5 rounded">
              Free Security Consultation & Service
            </span>
            <h3 className="text-xl font-black text-white">
              Schedule Your Free On-Site Quote
            </h3>
          </div>
        </div>

        {booked ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-black text-white">Appointment Request Sent!</h4>
            <p className="text-slate-300 text-xs">
              Thank you, <strong>{name}</strong>! One of our 12 qualified locksmith staff members will confirm your appointment for <strong>{preferredDate || 'requested time'}</strong> via phone call to <strong>{phone}</strong> within one business day.
            </p>
            <button
              onClick={() => {
                setBooked(false);
                onClose();
              }}
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-6 py-2.5 rounded-xl cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div>
              <label className="block text-slate-300 font-bold mb-1">Service Type</label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white focus:outline-none focus:border-blue-500"
              >
                <option value="Commercial Security & Cylinder Guard">Commercial Security & Cylinder Guard</option>
                <option value="Automotive Lost Key / Transponder">Automotive Lost Key / Transponder</option>
                <option value="Safe Opening, Service & Repair">Safe Opening, Service & Repair</option>
                <option value="Residential Rekeying & Locks">Residential Rekeying & Locks</option>
                <option value="Mul-T-Lock High Security Dealer">Mul-T-Lock High Security Dealer</option>
                <option value="Electronic Access Control & SMARTAIR">Electronic Access Control & SMARTAIR</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-300 font-bold mb-1">Preferred Date</label>
                <input
                  type="date"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-bold mb-1">Time Slot</label>
                <select
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-white focus:outline-none focus:border-blue-500"
                >
                  <option value="Morning (8:30am - 12:00pm)">Morning (8:30am - 12:00pm)</option>
                  <option value="Afternoon (12:00pm - 5:00pm)">Afternoon (12:00pm - 5:00pm)</option>
                  <option value="Evening On-Call Service">Evening On-Call Service</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-300 font-bold mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. David Miller"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-bold mb-1">Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 250-374-5625"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-white focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-300 font-bold mb-1">Location / Store Preference</label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-white focus:outline-none focus:border-blue-500"
              >
                <option value="Kamloops HQ Store">Kamloops HQ Store (1346 Battle St)</option>
                <option value="100 Mile House Store">100 Mile House Store (407 Alder Ave)</option>
                <option value="Mobile Van On-Site Service">Mobile Van On-Site Service (At My Location)</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-300 font-bold mb-1">Additional Notes</label>
              <textarea
                rows={3}
                placeholder="Specific lock type, key code, or address details..."
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-white focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm py-3.5 rounded-xl shadow-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              CONFIRM APPOINTMENT REQUEST
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
