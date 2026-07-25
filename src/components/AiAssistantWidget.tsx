import React, { useState } from 'react';
import { Bot, Send, X, MessageSquare, Sparkles, PhoneCall, ShieldCheck, Loader2 } from 'lucide-react';

export const AiAssistantWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'bot'; text: string }>>([
    {
      sender: 'bot',
      text: 'Hello! I am Interior Locksmith\'s 24/7 Security & Locksmith AI Assistant. Ask me about vehicle transponder keys, commercial cylinder guards, safe openings, or emergency dispatch!',
    },
  ]);

  const presetQuestions = [
    "I'm locked out of my car in Kamloops, what should I do?",
    "How do cylinder guards protect businesses?",
    "Can you cut restricted Mul-T-Lock keys?",
    "How do I open an antique safe with a lost combination?",
  ];

  const handleSend = async (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim() || loading) return;

    const userMsg = query;
    setInput('');
    setMessages((prev) => [...prev, { sender: 'user', text: userMsg }]);
    setLoading(true);

    try {
      const res = await fetch('/api/ai-assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: userMsg }),
      });
      const data = await res.json();
      if (data.response) {
        setMessages((prev) => [...prev, { sender: 'bot', text: data.response }]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            sender: 'bot',
            text: 'For immediate assistance with your lock issue, please call our 24/7 emergency dispatch line directly at 250-374-5625!',
          },
        ]);
      }
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: 'Our 12 staff members and mobile service vans are always on call! Call 250-374-5625 (Kamloops) or 250-395-4728 (100 Mile House).',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-16 md:bottom-5 right-4 md:right-5 z-40">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-500 text-white font-bold p-4 rounded-full shadow-2xl flex items-center gap-2 border-2 border-blue-400/40 transition-transform hover:scale-105 cursor-pointer group"
          title="Ask 24/7 AI Locksmith Advisor"
        >
          <div className="relative">
            <Bot className="w-6 h-6" />
            <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full absolute -top-1 -right-1 border-2 border-slate-900 animate-pulse"></span>
          </div>
          <span className="hidden md:inline text-xs font-bold pr-1">24/7 AI Security Advisor</span>
        </button>
      ) : (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl w-80 sm:w-96 shadow-2xl flex flex-col h-[480px] overflow-hidden">
          
          {/* Header */}
          <div className="bg-slate-950 p-4 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-1">
                  24/7 Security Advisor <Sparkles className="w-3 h-3 text-amber-400" />
                </h4>
                <p className="text-[10px] text-emerald-400 font-semibold">Interior Locksmith AI Assistant</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs bg-slate-950/50">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-xl leading-relaxed whitespace-pre-wrap ${
                    m.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-br-none font-medium'
                      : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-bl-none'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-slate-900 border border-slate-800 text-slate-400 p-3 rounded-xl flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin text-blue-400" />
                  <span>Consulting Locksmith Knowledgebase...</span>
                </div>
              </div>
            )}
          </div>

          {/* Quick Presets */}
          <div className="p-2 bg-slate-950 border-t border-slate-800/80 flex flex-wrap gap-1">
            {presetQuestions.map((q, i) => (
              <button
                key={i}
                onClick={() => handleSend(q)}
                className="text-[10px] bg-slate-900 hover:bg-slate-800 text-slate-300 px-2 py-1 rounded-md border border-slate-800 text-left truncate max-w-full"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <div className="p-3 bg-slate-950 border-t border-slate-800 flex items-center gap-2">
            <input
              type="text"
              placeholder="Ask a security question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 bg-slate-900 border border-slate-800 text-xs text-white px-3 py-2.5 rounded-xl focus:outline-none focus:border-blue-500"
            />
            <button
              onClick={() => handleSend()}
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-500 text-white p-2.5 rounded-xl transition-colors cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}
    </div>
  );
};
