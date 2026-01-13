'use client';

import { useState } from 'react';
import DownloadModal from '@/app/components/DownloadModal';

export default function ErrorState() {
  const [showDownloadModal, setShowDownloadModal] = useState(false);

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-2xl font-bold text-tb-text mb-3">
            Content Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            This bite doesn't exist or has been removed.
          </p>
          <button
            onClick={() => setShowDownloadModal(true)}
            className="bg-tb-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors min-h-[44px]"
          >
            Explore More in the App
          </button>
        </div>
      </div>
      {showDownloadModal && (
        <DownloadModal onClose={() => setShowDownloadModal(false)} />
      )}
    </main>
  );
}
