'use client';

import { useState } from 'react';
import DownloadModal from './DownloadModal';

export default function BottomCTA() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Fixed bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-40">
        <div className="max-w-2xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-tb-text font-semibold text-base sm:text-lg">
              📱 Get 5 daily micro-lessons
            </p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="bg-tb-orange text-white px-6 py-3 rounded-lg font-semibold text-base hover:bg-orange-600 transition-colors whitespace-nowrap min-h-[44px]"
          >
            Download App
          </button>
        </div>
      </div>

      {/* Download modal */}
      {showModal && <DownloadModal onClose={() => setShowModal(false)} />}
    </>
  );
}
