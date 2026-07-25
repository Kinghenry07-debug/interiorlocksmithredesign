import React, { useState } from 'react';
import { CUSTOMER_REVIEWS } from '../data/mockData';
import { Star, MessageSquarePlus, Quote, ThumbsUp, ShieldCheck } from 'lucide-react';
import { Review } from '../types';

export const ReviewsSection: React.FC = () => {
  const [reviewsList, setReviewsList] = useState<Review[]>(CUSTOMER_REVIEWS);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [newAuthor, setNewAuthor] = useState('');
  const [newText, setNewText] = useState('');
  const [newCategory, setNewCategory] = useState('General Locksmithing');

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor || !newText) return;

    const created: Review = {
      id: Date.now().toString(),
      author: newAuthor,
      rating: 5,
      badge: '5 STAR REVIEW',
      text: newText,
      serviceCategory: newCategory,
    };

    setReviewsList([created, ...reviewsList]);
    setNewAuthor('');
    setNewText('');
    setShowReviewModal(false);
  };

  return (
    <section id="reviews" className="py-16 bg-slate-950 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-amber-400 font-bold text-xs uppercase tracking-widest bg-amber-950/60 px-3 py-1 rounded-full border border-amber-800/50">
            What Others Say...
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Our Famous 5-Star Customer Reviews
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Once you meet any one of our 12 staff members, you will see why more and more people return for our famous customer service.
          </p>

          <div className="flex items-center justify-center gap-2 pt-2">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
            </div>
            <span className="text-sm font-bold text-white">5.0 / 5.0 Rating</span>
            <span className="text-xs text-slate-400">(BC Interior Locksmith Testimonials)</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {reviewsList.map((review) => (
            <div
              key={review.id}
              className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between shadow-xl hover:border-slate-700 transition-all relative group"
            >
              <Quote className="w-8 h-8 text-slate-800 absolute top-4 right-4 pointer-events-none group-hover:text-blue-900/30 transition-colors" />

              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="bg-amber-500/10 text-amber-300 font-bold text-[10px] uppercase px-2 py-0.5 rounded border border-amber-500/20">
                    {review.badge}
                  </span>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 italic">
                  "{review.text}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <div className="font-bold text-white text-sm">— {review.author}</div>
                  {review.serviceCategory && (
                    <div className="text-[11px] text-blue-400 font-medium">
                      {review.serviceCategory}
                    </div>
                  )}
                </div>
                <ThumbsUp className="w-4 h-4 text-slate-600" />
              </div>
            </div>
          ))}
        </div>

        {/* Add Review Trigger */}
        <div className="text-center">
          <button
            onClick={() => setShowReviewModal(true)}
            className="bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-xs px-6 py-3 rounded-xl inline-flex items-center gap-2 transition-all cursor-pointer"
          >
            <MessageSquarePlus className="w-4 h-4 text-blue-400" />
            Share Your Experience With Interior Locksmith
          </button>
        </div>

        {/* New Review Submission Modal */}
        {showReviewModal && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl relative space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-blue-400" />
                  Leave a 5-Star Review
                </h3>
                <button
                  onClick={() => setShowReviewModal(false)}
                  className="text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleAddReview} className="space-y-4 text-xs">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Your Name or Initials *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah M."
                    value={newAuthor}
                    onChange={(e) => setNewAuthor(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">Service Provided</label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="Automotive Key Replacement">Automotive Key Replacement</option>
                    <option value="Commercial Cylinder Guard">Commercial Cylinder Guard</option>
                    <option value="Safe Opening & Repair">Safe Opening & Repair</option>
                    <option value="24/7 Lockout Service">24/7 Lockout Service</option>
                    <option value="Residential Rekeying">Residential Rekeying</option>
                    <option value="General Locksmithing">General Locksmithing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">Your Feedback *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your experience with our locksmith team..."
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-white focus:outline-none focus:border-blue-500"
                  ></textarea>
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowReviewModal(false)}
                    className="flex-1 bg-slate-800 text-slate-300 py-2.5 rounded-lg font-bold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-blue-600 hover:bg-blue-500 text-white py-2.5 rounded-lg font-bold shadow"
                  >
                    Post Review
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
