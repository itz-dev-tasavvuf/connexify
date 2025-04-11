'use client';

import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Team } from '@/lib/supabase/types';
import { Users } from 'lucide-react';

interface TeamCardProps {
  team: Team;
  memberCount: number;
  onJoin?: () => void;
}

export function TeamCard({ team, memberCount, onJoin }: TeamCardProps) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start space-x-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src={team.avatar_url || ''} alt={team.name} />
          <AvatarFallback>{team.name.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2">{team.name}</h3>
          <p className="text-muted-foreground mb-4">{team.description}</p>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <span>{memberCount} members</span>
            </div>
            <Button onClick={onJoin} variant="outline">Join Team</Button>
          </div>
        </div>
      </div>
    </Card>
  );
}