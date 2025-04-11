'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { 
  Search,
  MapPin,
  Monitor,
  Briefcase
} from 'lucide-react';

interface RoleFiltersProps {
  onFilterChange: (filters: {
    search?: string;
    location?: string;
    isRemote?: boolean;
    roleType?: string;
  }) => void;
}

const ROLE_TYPES = [
  'Full-time',
  'Part-time',
  'Contract',
  'Internship'
];

export function RoleFilters({ onFilterChange }: RoleFiltersProps) {
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('');
  const [isRemote, setIsRemote] = useState(false);
  const [roleType, setRoleType] = useState<string>();

  const handleFilterChange = () => {
    onFilterChange({
      search: search || undefined,
      location: location || undefined,
      isRemote: isRemote || undefined,
      roleType: roleType
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search roles..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                handleFilterChange();
              }}
              className="pl-9"
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="relative">
            <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Location..."
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
                handleFilterChange();
              }}
              className="pl-9"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Monitor className="h-4 w-4" />
          <span>Remote Only</span>
          <Switch
            checked={isRemote}
            onCheckedChange={(checked) => {
              setIsRemote(checked);
              handleFilterChange();
            }}
          />
        </div>

        <div className="flex items-center space-x-2">
          <Briefcase className="h-4 w-4" />
          <div className="flex flex-wrap gap-2">
            {ROLE_TYPES.map((type) => (
              <Badge
                key={type}
                variant={roleType === type ? 'default' : 'outline'}
                className="cursor-pointer"
                onClick={() => {
                  setRoleType(roleType === type ? undefined : type);
                  handleFilterChange();
                }}
              >
                {type}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}