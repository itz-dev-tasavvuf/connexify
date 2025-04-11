import { Startup } from '@/lib/supabase/types';
import { mockStartups } from '@/lib/mock/data';

export async function fetchStartups() {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockStartups;
}

export async function createStartup(data: Partial<Startup>) {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  const newStartup: Startup = {
    id: Math.random().toString(36).substring(2),
    name: data.name!,
    description: data.description || null,
    industry: data.industry!,
    location: data.location || null,
    funding_stage: data.funding_stage || 'Pre-seed',
    website: data.website || null,
    logo_url: data.logo_url || null,
    created_at: new Date().toISOString(),
    created_by: 'current-user', // This will be replaced with actual user ID
    updated_at: new Date().toISOString()
  };

  // In a real app, this would be saved to the database
  mockStartups.push(newStartup);
  
  return newStartup;
}