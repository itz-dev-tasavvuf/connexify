'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, MapPin, Briefcase } from 'lucide-react';
import { Startup } from '@/lib/types/startups';
import Link from 'next/link';

interface StartupCardProps {
  startup: Startup;
}

export function StartupCard({ startup }: StartupCardProps) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold">{startup.name}</h3>
          <div className="flex items-center text-muted-foreground mt-1">
            <Building2 className="w-4 h-4 mr-2" />
            <span>{startup.industry}</span>
          </div>
        </div>
        <Badge variant="secondary">{startup.funding_stage || 'Pre-seed'}</Badge>
      </div>

      <p className="text-muted-foreground mb-4 line-clamp-2">
        {startup.description}
      </p>

      {startup.location && (
        <div className="flex items-center text-muted-foreground mb-4">
          <MapPin className="w-4 h-4 mr-2" />
          <span>{startup.location}</span>
        </div>
      )}

      <Link 
        href={`/startups/${startup.id}`}
        className="text-primary hover:underline inline-flex items-center"
      >
        View Details
        <Briefcase className="w-4 h-4 ml-2" />
      </Link>
    </Card>
  );
}