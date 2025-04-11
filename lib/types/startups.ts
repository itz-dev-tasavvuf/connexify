export type Startup = {
  id: string;
  name: string;
  description: string | null;
  industry: string;
  location: string | null;
  funding_stage:
    | string
    | 'Pre-seed'
    | 'Seed'
    | 'Series A'
    | 'Series B'
    | 'Series C'
    | 'IPO';
  website: string | null;
  logo_url: string | null;
  created_at: string;
  created_by: string;
  updated_at: string;
  skills: { skill_id: string; skill_name: string }[];
  team_size: number;
  is_actively_hiring: boolean;
};