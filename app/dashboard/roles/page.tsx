'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { fetchRoles } from '@/lib/roles/role-service';
import { RoleWithDetails } from '@/lib/supabase/types';
import { Building2, MapPin, Clock } from 'lucide-react';

export default function DashboardRolesPage() {
  const [roles, setRoles] = useState<RoleWithDetails[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadRoles = async () => {
      try {
        const data = await fetchRoles();
        setRoles(data);
      } catch (error) {
        console.error('Failed to load roles:', error);
      } finally {
        setLoading(false);
      }
    };

    loadRoles();
  }, []);

  if (loading) {
    return <div>Loading roles...</div>;
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Recommended Roles</h2>
        <p className="text-muted-foreground">
          Based on your skills and preferences
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {roles.map((role) => (
          <Card key={role.id} className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold">{role.title}</h3>
                <div className="flex items-center text-muted-foreground mt-1">
                  <Building2 className="w-4 h-4 mr-2" />
                  <span>{role.startup.name}</span>
                </div>
              </div>
              {role.is_urgent && (
                <Badge variant="destructive">Urgent</Badge>
              )}
            </div>

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
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {role.skills.map(({ skill }) => (
                <Badge key={skill.id} variant="secondary">
                  {skill.name}
                </Badge>
              ))}
            </div>

            <Button className="w-full">View Details</Button>
          </Card>
        ))}
      </div>
    </div>
  );
}