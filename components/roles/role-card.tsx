'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { RoleWithDetails } from '@/lib/supabase/types';
import { 
  Building2, 
  MapPin, 
  Clock, 
  Briefcase,
  AlertCircle
} from 'lucide-react';
import { RoleApplyDialog } from './role-apply-dialog';

interface RoleCardProps {
  role: RoleWithDetails;
  onApply: (roleId: string, coverLetter?: string) => Promise<void>;
}

export function RoleCard({ role, onApply }: RoleCardProps) {
  const [showApplyDialog, setShowApplyDialog] = useState(false);

  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold">{role.title}</h3>
          <div className="flex items-center text-muted-foreground mt-1">
            <Building2 className="w-4 h-4 mr-2" />
            <span>{role.startup.name}</span>
          </div>
        </div>
        {role.is_urgent && (
          <Badge variant="destructive" className="flex items-center">
            <AlertCircle className="w-3 h-3 mr-1" />
            Urgent
          </Badge>
        )}
      </div>

      <p className="text-muted-foreground mb-4 line-clamp-2">
        {role.description}
      </p>

      <div className="space-y-2 mb-4">
        <div className="flex items-center text-muted-foreground">
          <MapPin className="w-4 h-4 mr-2" />
          <span>{role.location || 'Remote'}</span>
        </div>
        {role.experience_years && (
          <div className="flex items-center text-muted-foreground">
            <Clock className="w-4 h-4 mr-2" />
            <span>{role.experience_years}+ years experience</span>
          </div>
        )}
        <div className="flex items-center text-muted-foreground">
          <Briefcase className="w-4 h-4 mr-2" />
          <span>{role.role_type}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {role.skills.map(({ skill }) => (
          <Badge key={skill.id} variant="secondary">
            {skill.name}
          </Badge>
        ))}
      </div>

      <div className="flex justify-between items-center">
        <span className="text-sm text-muted-foreground">
          {role.application_count} applications
        </span>
        <Button onClick={() => setShowApplyDialog(true)}>
          Quick Apply
        </Button>
      </div>

      <RoleApplyDialog
        role={role}
        open={showApplyDialog}
        onOpenChange={setShowApplyDialog}
        onApply={onApply}
      />
    </Card>
  );
}