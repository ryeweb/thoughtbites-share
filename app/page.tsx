'use client';

import { useState } from 'react';
import DownloadModal from './components/DownloadModal';

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        {/* White card container */}
        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 text-center">
          {/* Logo / Branding */}
          <div className="mb-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-tb-text mb-3">
              💡 Thought Bites
            </h1>
            <p className="text-xl text-gray-600">
              5 daily micro-lessons to expand your mind
            </p>
          </div>

          {/* Description */}
          <div className="mb-8">
            <p className="text-lg text-gray-700 mb-4">
              Each day, get bite-sized insights on entrepreneurship, psychology,
              productivity, and more—delivered right to your phone.
            </p>
            <p className="text-base text-gray-600">
              Shared content will appear here when users share their favorite bites.
            </p>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => setShowModal(true)}
            className="bg-tb-orange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors min-h-[44px] shadow-lg"
          >
            Download the App
          </button>

          {/* Features */}
          <div className="mt-10 pt-8 border-t border-gray-200">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl mb-2">📚</div>
                <div className="text-sm font-semibold text-tb-text">5 Daily Lessons</div>
              </div>
              <div>
                <div className="text-3xl mb-2">⚡</div>
                <div className="text-sm font-semibold text-tb-text">Quick Reads</div>
              </div>
              <div>
                <div className="text-3xl mb-2">🎯</div>
                <div className="text-sm font-semibold text-tb-text">Actionable Insights</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Download modal */}
      {showModal && <DownloadModal onClose={() => setShowModal(false)} />}
    </main>
  );
}
