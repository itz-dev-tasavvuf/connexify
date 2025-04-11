'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

interface NavLink {
  href: string;
  label: string;
  requiresAuth?: boolean;
}

interface NavLinksProps {
  isAuthenticated: boolean;
}

const links: NavLink[] = [
  { href: '/about', label: 'About' },
  { href: '/events', label: 'Events' },
  { href: '/roles', label: 'Roles' },
  { href: '/dashboard', label: 'Dashboard', requiresAuth: true },
  { href: '/tasks', label: 'Tasks', requiresAuth: true }
];

export function NavLinks({ isAuthenticated }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center space-x-6">
      {links.map((link) => {
        if (link.requiresAuth && !isAuthenticated) return null;
        
        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === link.href && "text-primary"
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}