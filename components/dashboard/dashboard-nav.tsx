'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboard, 
  Briefcase,
  Users,
  Target,
  Settings
} from 'lucide-react';

const items = [
  {
    title: 'Overview',
    href: '/dashboard',
    icon: LayoutDashboard
  },
  {
    title: 'Roles',
    href: '/dashboard/roles',
    icon: Briefcase
  },
  {
    title: 'Teams',
    href: '/dashboard/teams',
    icon: Users
  },
  {
    title: 'Tasks',
    href: '/dashboard/tasks',
    icon: Target
  },
  {
    title: 'Settings',
    href: '/dashboard/settings',
    icon: Settings
  }
];

export function DashboardNav() {
  const pathname = usePathname();

  return (
    <nav className="grid gap-2">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors',
              pathname === item.href
                ? 'bg-secondary text-secondary-foreground'
                : 'hover:bg-secondary/50'
            )}
          >
            <Icon className="w-4 h-4" />
            {item.title}
          </Link>
        );
      })}
    </nav>
  );
}