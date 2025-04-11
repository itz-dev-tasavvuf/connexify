'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Code, 
  Rocket, 
  Target,
  Zap
} from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'All Tasks', icon: Target },
  { id: 'coding', label: 'Coding', icon: Code },
  { id: 'business', label: 'Business', icon: Rocket },
  { id: 'learning', label: 'Learning', icon: BookOpen },
  { id: 'challenge', label: 'Challenges', icon: Zap }
];

interface TaskFiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  counts: Record<string, number>;
}

export function TaskFilters({ 
  selectedCategory, 
  onCategoryChange,
  counts 
}: TaskFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {CATEGORIES.map(({ id, label, icon: Icon }) => (
        <Button
          key={id}
          variant={selectedCategory === id ? 'default' : 'outline'}
          className="flex items-center space-x-2"
          onClick={() => onCategoryChange(id)}
        >
          <Icon className="w-4 h-4" />
          <span>{label}</span>
          {counts[id] > 0 && (
            <Badge variant="secondary" className="ml-2">
              {counts[id]}
            </Badge>
          )}
        </Button>
      ))}
    </div>
  );
}