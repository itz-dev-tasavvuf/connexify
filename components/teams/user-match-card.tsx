'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Profile, UserSkill } from '@/lib/supabase/types';
import { MessageSquare, UserPlus } from 'lucide-react';

interface UserMatchCardProps {
  user: Profile;
  matchScore: number;
  skills: UserSkill[];
  onConnect?: () => void;
  onMessage?: () => void;
}

export function UserMatchCard({ 
  user, 
  matchScore, 
  skills, 
  onConnect, 
  onMessage 
}: UserMatchCardProps) {
  const matchPercentage = Math.min(Math.round((matchScore / (skills.length * 5)) * 100), 100);

  return (
    <Card className="p-4 hover:shadow-lg transition-shadow">
      <div className="flex items-start space-x-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src={user.avatar_url || ''} alt={user.username} />
          <AvatarFallback>{user.username.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-semibold">{user.full_name || user.username}</h4>
              <p className="text-sm text-muted-foreground">{user.bio}</p>
            </div>
            <Badge variant="secondary">
              {matchPercentage}% Match
            </Badge>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill.skill_id} variant="outline">
                Level {skill.level}
              </Badge>
            ))}
          </div>

          <div className="mt-4 flex space-x-2">
            <Button
              size="sm"
              variant="outline"
              className="flex-1"
              onClick={onMessage}
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Message
            </Button>
            <Button
              size="sm"
              className="flex-1"
              onClick={onConnect}
            >
              <UserPlus className="w-4 h-4 mr-2" />
              Connect
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}