import { RoleWithDetails } from '@/lib/types/roles';
import { Startup } from '@/lib/types/startups';
import { Skill } from '@/lib/types/skills';

// Mock Skills
export const mockSkills: Skill[] = [
  { 
    id: '1', 
    name: 'React', 
    category: 'Frontend', 
    created_at: new Date().toISOString() 
  },
  { 
    id: '2', 
    name: 'Node.js', 
    category: 'Backend', 
    created_at: new Date().toISOString() 
  },
  { 
    id: '3', 
    name: 'Python', 
    category: 'Backend', 
    created_at: new Date().toISOString() 
  },
  { 
    id: '4', 
    name: 'UI/UX Design', 
    category: 'Design', 
    created_at: new Date().toISOString() 
  },
  { 
    id: '5', 
    name: 'Digital Marketing', 
    category: 'Marketing', 
    created_at: new Date().toISOString() 
  },
  { 
    id: '6', 
    name: 'Data Analysis', 
    category: 'Data', 
    created_at: new Date().toISOString() 
  },
  { id: '1', name: 'React', category: 'Frontend', created_at: new Date().toISOString() },
  { id: '2', name: 'Node.js', category: 'Backend', created_at: new Date().toISOString() },
  { id: '3', name: 'Python', category: 'Backend', created_at: new Date().toISOString() },
  { id: '4', name: 'UI/UX Design', category: 'Design', created_at: new Date().toISOString() },
  { id: '5', name: 'Digital Marketing', category: 'Marketing', created_at: new Date().toISOString() },
  { id: '6', name: 'Data Analysis', category: 'Data', created_at: new Date().toISOString() }
];

// Mock Startups
export const mockStartups: Startup[] = [
  {
    id: '1',
    name: 'TechFlow',
    description: 'Building the future of workflow automation',
    industry: 'SaaS',
    location: 'Bangalore',
    funding_stage: 'Seed',
    website: 'https://techflow.example',
    logo_url: null,
    created_at: new Date().toISOString(),
    created_by: 'user1',
    updated_at: new Date().toISOString(),
    skills: [],
    team_size: 1,
    is_actively_hiring: false,
  },
  {
    id: '2',
    name: 'HealthTech India',
    description: 'Revolutionary healthcare solutions',
    industry: 'Healthcare',
    location: 'Mumbai',
    funding_stage: 'Series A',
    website: 'https://healthtech.example',
    logo_url: null,
    created_at: new Date().toISOString(),
    created_by: 'user2',
    updated_at: new Date().toISOString(),
    skills: [],
    team_size: 1,
    is_actively_hiring: false,
  },
  {
    id: '3',
    name: 'EduStart',
    description: 'Making education accessible to everyone',
    industry: 'EdTech',
    location: 'Delhi',
    funding_stage: 'Pre-seed',
    website: 'https://edustart.example',
    logo_url: null,
    created_at: new Date().toISOString(),
    created_by: 'user3',
    updated_at: new Date().toISOString(),
    skills: [],
    team_size: 1,
    is_actively_hiring: false,
  }
];

// Mock Roles
export const mockRoles: RoleWithDetails[] = [
  {
    id: '1',
    startup_id: '1',
    title: 'Senior Frontend Developer',
    description: 'Looking for an experienced frontend developer to lead our web application development.',
    location: 'Bangalore',
    is_remote: true,
    is_urgent: true,
    role_type: 'Full-time',
    experience_years: 4,
    status: 'open',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    skills: [
      { skill_id: '1', skill_name: 'React' },
      { skill_id: '4', skill_name: 'UI/UX Design' },
      { skill_id: '1', skill_name: 'React' },
      { skill_id: '4', skill_name: 'UI/UX Design' }

    ],
    application_count: 5
  },
  {
    id: '2',
    startup_id: '2',
    title: 'Product Manager',
    description: 'Seeking a product manager to drive our healthcare solutions forward.',
    location: 'Mumbai',
    is_remote: false,
    is_urgent: false,
    role_type: 'Full-time',
    experience_years: 3,
    status: 'open',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    skills: [
      { skill_id: '4', skill_name: 'UI/UX Design' },
      { skill_id: '6', skill_name: 'Data Analysis' },
      { skill_id: '4', skill_name: 'UI/UX Design' },
      { skill_id: '6', skill_name: 'Data Analysis' }

    ],
    application_count: 3
  },
  {
    id: '3',
    startup_id: '3',
    title: 'Digital Marketing Specialist',
    description: 'Join our growth team to drive user acquisition and engagement.',
    location: 'Delhi',
    is_remote: true,
    is_urgent: true,
    role_type: 'Full-time',
    experience_years: 2,
    status: 'open',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    skills: [
      { skill_id: '5', skill_name: 'Digital Marketing' },
      { skill_id: '5', skill_name: 'Digital Marketing' }
    ],
    application_count: 7
  },

];