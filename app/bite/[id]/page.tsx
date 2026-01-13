import { Metadata } from 'next';
import { supabase } from '@/lib/supabase';
import { notFound } from 'next/navigation';
import BiteContent from './BiteContent';
import ErrorState from './ErrorState';

// Force dynamic rendering (don't pre-render at build time)
export const dynamic = 'force-dynamic';

interface PageProps {
  params: { id: string };
}

// Generate dynamic metadata for social sharing
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { data: bite } = await supabase
    .from('bites')
    .select('*')
    .eq('id', params.id)
    .single();

  if (!bite) {
    return {
      title: 'Content Not Found | Thought Bites',
    };
  }

  const url = `https://share.thoughtbites.app/bite/${params.id}`;

  return {
    title: `${bite.title} | Thought Bites`,
    description: bite.hook,
    openGraph: {
      title: bite.title,
      description: bite.hook,
      type: 'article',
      url: url,
      siteName: 'Thought Bites',
    },
    twitter: {
      card: 'summary_large_image',
      title: bite.title,
      description: bite.hook,
    },
  };
}

export default async function BitePage({ params }: PageProps) {
  // Fetch bite data on server
  const { data: bite, error } = await supabase
    .from('bites')
    .select('*')
    .eq('id', params.id)
    .single();

  // Handle error or not found
  if (error || !bite) {
    return <ErrorState />;
  }

  return <BiteContent bite={bite} biteId={params.id} />;
}
