'use client';

import { useEffect } from 'react';

interface DownloadModalProps {
  onClose: () => void;
  biteId?: string; // Optional bite ID for tracking
}

export default function DownloadModal({ onClose, biteId }: DownloadModalProps) {
  // Close modal on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const appStoreId = process.env.NEXT_PUBLIC_IOS_APP_STORE_ID || 'YOUR_APP_STORE_ID';
  const campaignParams = biteId
    ? `?ct=shared_bite&pt=${biteId}`
    : '?ct=web_share';

  const appStoreUrl = `https://apps.apple.com/app/id${appStoreId}${campaignParams}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-tb-purple-dark/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl w-8 h-8 flex items-center justify-center"
          aria-label="Close"
        >
          ×
        </button>

        {/* Content */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-tb-text mb-3">
            Download Thought Bites to continue reading
          </h2>
          <p className="text-gray-600 mb-6">
            Get 5 daily micro-lessons delivered to your phone
          </p>

          {/* iOS App Store Button */}
          <a
            href={appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mb-4"
          >
            <div className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-3 min-h-[44px]">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-lg font-semibold">App Store</div>
              </div>
            </div>
          </a>

          {/* Android (Coming Soon) */}
          <div className="opacity-50 cursor-not-allowed">
            <div className="bg-gray-200 text-gray-500 px-6 py-3 rounded-lg flex items-center gap-3 min-h-[44px]">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.6,9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88,3.24c-2.86-1.21-6.08-1.21-8.94,0L5.65,5.67c-.19-.28-.55-.37-.83-.22-.3.16-.42.54-.26.85L6.4,9.48C3.3,11.25,1.28,14.44,1,18h22C22.72,14.44,20.7,11.25,17.6,9.48z M7,15.25c-.69,0-1.25-.56-1.25-1.25s.56-1.25,1.25-1.25,1.25.56,1.25,1.25-.56,1.25-1.25,1.25z M17,15.25c-.69,0-1.25-.56-1.25-1.25s.56-1.25,1.25-1.25,1.25.56,1.25,1.25-.56,1.25-1.25,1.25z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs">Coming Soon</div>
                <div className="text-lg font-semibold">Google Play</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
