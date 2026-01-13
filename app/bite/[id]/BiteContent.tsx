'use client';

import { useState, useEffect } from 'react';
import { Bite, categoryIcons } from '@/lib/supabase';
import DownloadModal from '@/app/components/DownloadModal';

interface BiteContentProps {
  bite: Bite;
  biteId: string;
}

export default function BiteContent({ bite, biteId }: BiteContentProps) {
  const [showDeepLinkButton, setShowDeepLinkButton] = useState(false);
  const [showDownloadModal, setShowDownloadModal] = useState(false);

  // iOS deep link detection
  useEffect(() => {
    const isIOS = /iPhone|iPad|iPod/.test(navigator.userAgent);

    if (isIOS) {
      setShowDeepLinkButton(true);
    }
  }, []);

  const handleDeepLink = () => {
    const urlScheme = process.env.NEXT_PUBLIC_IOS_URL_SCHEME || 'thoughtbites';
    window.location.href = `${urlScheme}://bite/${biteId}`;

    // If user returns after 2s, they don't have the app installed
    setTimeout(() => {
      setShowDeepLinkButton(false);
    }, 2000);
  };

  const categoryIcon = categoryIcons[bite.category] || '💡';

  return (
    <main className="min-h-screen px-4 py-8">
      <div className="max-w-2xl mx-auto">
        {/* Deep Link Button for iOS (shows at top if app is installed) */}
        {showDeepLinkButton && (
          <div className="mb-4 animate-fade-in">
            <button
              onClick={handleDeepLink}
              className="w-full bg-white text-tb-purple-dark px-6 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 min-h-[44px]"
            >
              <span>📱</span>
              <span>Open in Thought Bites</span>
            </button>
          </div>
        )}

        {/* Bite Content Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-6">
          {/* Category Icon */}
          <div className="text-3xl mb-4">{categoryIcon}</div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-bold text-tb-text mb-4 leading-tight">
            {bite.title}
          </h1>

          {/* Hook */}
          <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
            {bite.hook}
          </p>

          {/* Bullets */}
          <div className="mb-8 space-y-4">
            {bite.bullets.map((bullet, index) => (
              <div key={index} className="flex gap-3">
                <span className="text-tb-purple-dark text-xl font-bold mt-1">•</span>
                <p className="text-base sm:text-lg text-tb-text leading-relaxed flex-1">
                  {bullet}
                </p>
              </div>
            ))}
          </div>

          {/* Example Section */}
          {bite.example && (
            <div className="mb-8 pl-4 border-l-4 border-gray-200">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed italic">
                {bite.example}
              </p>
            </div>
          )}

          {/* Micro Action Box */}
          {bite.micro_action && (
            <div className="bg-tb-green-light border-2 border-green-200 rounded-xl p-6">
              <h3 className="text-sm font-bold text-tb-text uppercase tracking-wide mb-2">
                Try This Today
              </h3>
              <p className="text-base sm:text-lg text-tb-text leading-relaxed">
                {bite.micro_action}
              </p>
            </div>
          )}
        </div>

        {/* Deep Dive CTA Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 text-center">
          <p className="text-gray-700 text-lg mb-4">
            Want to read the full 500-word article?
          </p>
          <button
            onClick={() => setShowDownloadModal(true)}
            className="bg-tb-purple-dark text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-tb-purple-light transition-colors min-h-[44px] shadow-md"
          >
            See Deep Dive in the App
          </button>
          <p className="text-gray-500 text-sm mt-4">
            This insight is one of 5 daily Thought Bites
          </p>
        </div>
      </div>

      {/* Download Modal */}
      {showDownloadModal && (
        <DownloadModal
          biteId={biteId}
          onClose={() => setShowDownloadModal(false)}
        />
      )}
    </main>
  );
}
