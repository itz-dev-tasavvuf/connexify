export type RoleWithDetails = {
  id: string;
  title: string;
  description: string;
  location: string;
  is_remote: boolean;
  role_type: string;
  skills: { skill_id: string; skill_name: string }[];
  startup: {
    id: string;
    name: string;
    logo_url: string | null;
  };
  experience_years: number | null;
  is_urgent: boolean;
};