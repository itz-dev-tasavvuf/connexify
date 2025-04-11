'use client';

import { Button } from '@/components/ui/button';
import { 
  Presentation, 
  GraduationCap, 
  Users,
  CalendarDays
} from 'lucide-react';

const EVENT_TYPES = [
  { id: 'all', label: 'All Events', icon: CalendarDays },
  { id: 'pitch', label: 'Pitch Events', icon: Presentation },
  { id: 'workshop', label: 'Workshops', icon: GraduationCap },
  { id: 'networking', label: 'Networking', icon: Users }
];

interface EventFiltersProps {
  selectedType: string;
  onTypeChange: (type: string) => void;
}

export function EventFilters({ selectedType, onTypeChange }: EventFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {EVENT_TYPES.map(({ id, label, icon: Icon }) => (
        <Button
          key={id}
          variant={selectedType === id ? 'default' : 'outline'}
          className="flex items-center space-x-2"
          onClick={() => onTypeChange(id)}
        >
          <Icon className="w-4 h-4" />
          <span>{label}</span>
        </Button>
      ))}
    </div>
  );
}