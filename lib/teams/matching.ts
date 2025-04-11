import { Profile, Skill, UserSkill } from '@/lib/supabase/types';
import { supabase } from '@/lib/supabase/client';

export async function findTeamMatches(userId: string, requiredSkills: string[]) {
  const { data: userSkills } = await supabase
    .from('user_skills')
    .select('skill_id, level')
    .eq('user_id', userId);

  const { data: potentialMatches } = await supabase
    .from('user_skills')
    .select(`
      user_id,
      skill_id,
      level,
      profiles:user_id (
        id,
        username,
        avatar_url,
        bio
      )
    `)
    .in('skill_id', requiredSkills)
    .neq('user_id', userId);

  return processMatches(potentialMatches || []);
}

function processMatches(matches: any[]) {
  const userMatches = new Map<string, { 
    profile: Profile; 
    matchScore: number; 
    skills: UserSkill[] 
  }>();

  matches.forEach((match) => {
    const userId = match.profiles.id;
    if (!userMatches.has(userId)) {
      userMatches.set(userId, {
        profile: match.profiles,
        matchScore: 0,
        skills: []
      });
    }
    
    const user = userMatches.get(userId)!;
    user.matchScore += match.level;
    user.skills.push({
      user_id: userId,
      skill_id: match.skill_id,
      level: match.level,
      id: '',
      created_at: ''
    });
  });

  return Array.from(userMatches.values())
    .sort((a, b) => b.matchScore - a.matchScore);
}