import React, { useState } from 'react';
import { Lock, Mail, User, X, CheckCircle2, ShieldCheck } from 'lucide-react';

interface ClientAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClientAuthModal: React.FC<ClientAuthModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [company, setCompany] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    setLoggedIn(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative space-y-6">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-xl hover:bg-slate-800"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-2">
          <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto border border-blue-400/30 shadow-lg">
            <ShieldCheck className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl font-black text-white">
            Welcome to Interior Locksmith Ltd.
          </h3>
          <p className="text-xs text-slate-400">
            {isSignUp ? 'Create a client account for commercial key management' : 'Client & Business Account Sign In'}
          </p>
        </div>

        {loggedIn ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-white">Successfully Authenticated!</h4>
            <p className="text-xs text-slate-300">
              Welcome back, <strong>{email}</strong>. Your master key authorization levels and commercial cylinder records are active.
            </p>
            <button
              onClick={() => {
                setLoggedIn(false);
                onClose();
              }}
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-6 py-2.5 rounded-xl cursor-pointer"
            >
              Enter Client Portal Dashboard
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            {isSignUp && (
              <div>
                <label className="block text-slate-300 font-bold mb-1">Company / Business Name</label>
                <input
                  type="text"
                  placeholder="e.g. Kamloops Property Management"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white focus:outline-none focus:border-blue-500"
                />
              </div>
            )}

            <div>
              <label className="block text-slate-300 font-bold mb-1">Email Address *</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-3 text-white focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-300 font-bold mb-1">Password *</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-3 text-white focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm py-3.5 rounded-xl shadow-lg cursor-pointer"
            >
              {isSignUp ? 'Create Business Account' : 'Sign In'}
            </button>

            <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2">
              <button
                type="button"
                onClick={() => setIsSignUp(!isSignUp)}
                className="hover:text-blue-300 underline"
              >
                {isSignUp ? 'Already have an account? Sign In' : 'Create an account'}
              </button>

              {!isSignUp && (
                <button type="button" className="hover:text-blue-300 underline">
                  Forgot Password?
                </button>
              )}
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
