import { redirect } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import ErrorState from '@/app/bite/[id]/ErrorState';

// Force dynamic rendering (don't pre-render at build time)
export const dynamic = 'force-dynamic';

interface PageProps {
  params: { id: string };
}

export default async function DeepDivePage({ params }: PageProps) {
  // Fetch the bite_id from the deep_dives table
  const { data: deepDive, error } = await supabase
    .from('deep_dives')
    .select('bite_id')
    .eq('id', params.id)
    .single();

  // If not found or error, show error state
  if (error || !deepDive) {
    return <ErrorState />;
  }

  // Redirect to the bite page
  redirect(`/bite/${deepDive.bite_id}`);
}
