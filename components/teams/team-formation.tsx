'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { findTeamMatches } from '@/lib/teams/matching';
import { UserMatchCard } from '@/components/teams/user-match-card';
import { Users, Search } from 'lucide-react';

export function TeamFormation() {
  const [skills, setSkills] = useState<string[]>([]);
  const [currentSkill, setCurrentSkill] = useState('');
  const [matches, setMatches] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const addSkill = () => {
    if (currentSkill && !skills.includes(currentSkill)) {
      setSkills([...skills, currentSkill]);
      setCurrentSkill('');
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  const searchMatches = async () => {
    setIsSearching(true);
    try {
      const matches = await findTeamMatches('current-user-id', skills);
      setMatches(matches);
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Find Team Members</h2>
        
        <div className="space-y-4">
          <div className="flex space-x-2">
            <div className="flex-1">
              <Label htmlFor="skill">Required Skills</Label>
              <Input
                id="skill"
                value={currentSkill}
                onChange={(e) => setCurrentSkill(e.target.value)}
                placeholder="Enter a skill (e.g., React, Python)"
                onKeyPress={(e) => e.key === 'Enter' && addSkill()}
              />
            </div>
            <Button 
              className="self-end"
              onClick={addSkill}
            >
              Add
            </Button>
          </div>

          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge 
                key={skill}
                variant="secondary"
                className="cursor-pointer"
                onClick={() => removeSkill(skill)}
              >
                {skill} ×
              </Badge>
            ))}
          </div>

          <Button
            className="w-full"
            onClick={searchMatches}
            disabled={skills.length === 0 || isSearching}
          >
            {isSearching ? (
              'Searching...'
            ) : (
              <>
                <Search className="w-4 h-4 mr-2" />
                Find Matches
              </>
            )}
          </Button>
        </div>
      </Card>

      {matches.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold flex items-center">
            <Users className="mr-2" />
            Potential Team Members
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {matches.map((match: any) => (
              <UserMatchCard
                key={match.profile.id}
                user={match.profile}
                matchScore={match.matchScore}
                skills={match.skills}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}