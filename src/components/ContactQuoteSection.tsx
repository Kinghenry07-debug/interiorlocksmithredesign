import React, { useState } from 'react';
import { PhoneCall, Mail, MapPin, Send, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';
import { STORE_LOCATIONS } from '../data/mockData';

interface ContactQuoteSectionProps {
  preselectedService?: string;
}

export const ContactQuoteSection: React.FC<ContactQuoteSectionProps> = ({
  preselectedService = '',
}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('Kamloops Location (1346 Battle St)');
  const [service, setService] = useState(preselectedService || 'Commercial Security & Cylinder Guard');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !lastName || !phone) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-blue-400 font-bold text-xs uppercase tracking-widest bg-blue-950/80 px-3 py-1 rounded-full border border-blue-800/50">
              We Are Here For You
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              Get Your Free Security Consultation & Quote
            </h2>

            <p className="text-slate-300 text-sm leading-relaxed">
              We make it easy! Let us know what your locksmith or physical security needs are and one of our 12 qualified team members will help you out. We reply within one business day.
            </p>

            {/* Direct Urgent Call Box */}
            <div className="bg-rose-500/10 border border-rose-500/30 p-5 rounded-2xl space-y-3">
              <div className="flex items-center gap-2 text-rose-300 font-bold text-sm">
                <Clock className="w-4 h-4 text-rose-400 animate-pulse" />
                Need Immediate Emergency Assistance?
              </div>
              <p className="text-xs text-slate-300">
                For active lockouts, break-in repairs, or urgent on-site dispatch, call our 24/7 hotline directly:
              </p>

              <div className="space-y-2 pt-1">
                <a
                  href="tel:2503745625"
                  className="bg-rose-600 hover:bg-rose-500 text-white font-extrabold text-xs px-4 py-2.5 rounded-xl flex items-center justify-between transition-colors shadow"
                >
                  <span>📞 Call Kamloops (24/7):</span>
                  <span className="underline font-mono">250-374-5625</span>
                </a>

                <a
                  href="tel:2503954728"
                  className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-extrabold text-xs px-4 py-2.5 rounded-xl border border-slate-700 flex items-center justify-between transition-colors"
                >
                  <span>📞 Call 100 Mile House:</span>
                  <span className="underline font-mono">250-395-4728</span>
                </a>
              </div>
            </div>

            {/* Store Addresses list */}
            <div className="space-y-4 pt-2">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1">
                <div className="font-bold text-white text-sm flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-blue-400" /> Kamloops Store & HQ
                </div>
                <div className="text-xs text-slate-300">1346 Battle St., Kamloops, BC, V2C 2N8</div>
                <div className="text-xs text-blue-300 font-mono">250-374-5625</div>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1">
                <div className="font-bold text-white text-sm flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-blue-400" /> 100 Mile House Location
                </div>
                <div className="text-xs text-slate-300">Box 82, #2 - 407 Alder Ave., 100 Mile House, BC, V0K 2E0</div>
                <div className="text-xs text-blue-300 font-mono">250-395-4728</div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7 bg-slate-950 border border-slate-800 p-6 sm:p-8 rounded-3xl shadow-2xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-white">Quote Request Received!</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Thank you, <strong>{firstName}</strong>. One of our 12 qualified locksmith staff members will review your details and contact you at <strong>{phone}</strong> within one business day!
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold px-6 py-2.5 rounded-xl border border-slate-700"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="border-b border-slate-800 pb-3 mb-2">
                  <h3 className="text-xl font-bold text-white">Online Inquiry & Quote Form</h3>
                  <p className="text-slate-400 text-xs">Fill out the details below for a fast, free estimate.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">First Name (required) *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Last Name (required) *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Smith"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">Company Name (if applicable)</label>
                  <input
                    type="text"
                    placeholder="e.g. Kamloops Business Ltd."
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Phone Number (required) *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 250-555-0199"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="e.g. john@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Preferred Location</label>
                    <select
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-white focus:outline-none focus:border-blue-500"
                    >
                      <option value="Kamloops Location (1346 Battle St)">Kamloops Location (1346 Battle St)</option>
                      <option value="100 Mile House Location (407 Alder Ave)">100 Mile House Location (407 Alder Ave)</option>
                      <option value="Mobile Van On-Site Service">Mobile Van On-Site Service</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Service Requested</label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-white focus:outline-none focus:border-blue-500"
                    >
                      <option value="Commercial Security & Cylinder Guard">Commercial Security & Cylinder Guard</option>
                      <option value="Automotive Lost Key / Transponder">Automotive Lost Key / Transponder</option>
                      <option value="Safe Opening & Repair">Safe Opening & Repair</option>
                      <option value="Residential Rekeying & Locks">Residential Rekeying & Locks</option>
                      <option value="Mul-T-Lock Key System">Mul-T-Lock Key System</option>
                      <option value="Electronic Access Control">Electronic Access Control</option>
                      <option value="Other Security Inquiry">Other Security Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">Details / Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your lock, keys, vehicle model, or security requirements..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-white focus:outline-none focus:border-blue-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm py-3.5 rounded-xl shadow-xl shadow-blue-900/30 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  SUBMIT FREE QUOTE REQUEST
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
