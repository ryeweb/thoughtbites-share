import type { Metadata } from 'next';
import './globals.css';
import BottomCTA from './components/BottomCTA';

export const metadata: Metadata = {
  title: 'Thought Bites - Daily Micro-Lessons',
  description: '5 daily micro-lessons to expand your mind',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-tb-purple-light to-tb-purple-dark min-h-screen">
        {/* Main content with padding at bottom to prevent overlap with fixed CTA */}
        <div className="pb-32">
          {children}
        </div>

        {/* Floating bottom CTA bar */}
        <BottomCTA />
      </body>
    </html>
  );
}
