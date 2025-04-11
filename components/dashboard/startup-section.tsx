'use client';

import { Button } from '@/components/ui/button';
import { StartupCard } from './startup-card';
import { Startup } from '@/lib/supabase/types';
import { Plus } from 'lucide-react';
import Link from 'next/link';

interface StartupSectionProps {
  startups: Startup[];
}

export function StartupSection({ startups }: StartupSectionProps) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Your Startups</h2>
        <Button asChild>
          <Link href="/startups/new">
            <Plus className="w-4 h-4 mr-2" />
            New Startup
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {startups.map((startup) => (
          <StartupCard key={startup.id} startup={startup} />
        ))}
        {startups.length === 0 && (
          <div className="col-span-full text-center py-8 text-muted-foreground">
            No startups yet. Create your first one!
          </div>
        )}
      </div>
    </div>
  );
}