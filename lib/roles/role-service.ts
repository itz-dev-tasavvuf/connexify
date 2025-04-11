import { RoleWithDetails } from '@/lib/types/roles';
import { mockRoles } from '@/lib/mock/data';

export async function fetchRoles(filters?: {
  skills?: string[];
  location?: string;
  isRemote?: boolean;
  roleType?: string;
}) {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  let filteredRoles = [...mockRoles];

  if (filters?.skills?.length) {
    filteredRoles = filteredRoles.filter(role =>
      role.skills.some(s => filters.skills?.includes(s.skill_id))
    );
  }

  if (filters?.location) {
    filteredRoles = filteredRoles.filter(role =>
      role.location?.toLowerCase().includes(filters.location.toLowerCase())
    );
  }

  if (filters?.isRemote !== undefined) {
    filteredRoles = filteredRoles.filter(role =>
      role.is_remote === filters.isRemote
    );
  }

  if (filters?.roleType) {
    filteredRoles = filteredRoles.filter(role =>
      role.role_type === filters.roleType
    );
  }

  return filteredRoles;
}

export async function applyToRole(roleId: string, coverLetter?: string) {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Simulate success
  return {
    id: Math.random().toString(36).substring(2),
    role_id: roleId,
    status: 'pending',
    cover_letter: coverLetter,
    created_at: new Date().toISOString()
  };
}