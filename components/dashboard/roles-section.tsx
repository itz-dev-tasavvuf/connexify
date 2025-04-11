'use client';

import { RoleCard } from '@/components/roles/role-card';
import { RoleWithDetails } from '@/lib/supabase/types';

interface RolesSectionProps {
  roles: RoleWithDetails[];
  onApply: (roleId: string, coverLetter?: string) => Promise<void>;
}

export function RolesSection({ roles, onApply }: RolesSectionProps) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Recent Roles</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {roles.map((role) => (
          <RoleCard
            key={role.id}
            role={role}
            onApply={onApply}
          />
        ))}
        {roles.length === 0 && (
          <div className="col-span-full text-center py-8 text-muted-foreground">
            No open roles available
          </div>
        )}
      </div>
    </div>
  );
}