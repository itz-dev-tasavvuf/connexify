'use client';

import { useState, useEffect } from 'react';
import { RoleWithDetails } from '@/lib/types/roles';
import { Startup } from '@/lib/types/startups';
import { Card } from '@/components/ui/card';
import { StartupSection } from '@/components/dashboard/startup-section';
import { RolesSection } from '@/components/dashboard/roles-section';
import { fetchRoles } from '@/lib/roles/role-service';
import { fetchStartups } from '@/lib/startups/startup-service';
import { useToast } from '@/hooks/use-toast';
import { 
  BarChart3, 
  Users, 
  Target,
  Trophy
} from 'lucide-react';

export default function DashboardPage() {
  const [roles, setRoles] = useState<RoleWithDetails[]>([]);
  const [startups, setStartups] = useState<Startup[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const loadData = async () => {
      try {
        const [rolesData, startupsData] = await Promise.all([
          fetchRoles(),
          fetchStartups()
        ]);
        setRoles(rolesData);
        setStartups(startupsData);
      } catch (error: any) {
        toast({
          title: 'Error',
          description: error.message,
          variant: 'destructive',
        });
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleApply = async (roleId: string, coverLetter?: string) => {
    try {
      // Implementation will be added later
      toast({
        title: 'Success',
        description: 'Application submitted successfully!',
      });
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Dashboard</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Trophy className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Points</p>
              <h3 className="text-2xl font-bold">0</h3>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Tasks Completed</p>
              <h3 className="text-2xl font-bold">0</h3>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Team Members</p>
              <h3 className="text-2xl font-bold">0</h3>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <BarChart3 className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Level</p>
              <h3 className="text-2xl font-bold">1</h3>
            </div>
          </div>
        </Card>
      </div>

      <StartupSection startups={startups} />
      <RolesSection roles={roles} onApply={handleApply} />
    </div>
  );
}