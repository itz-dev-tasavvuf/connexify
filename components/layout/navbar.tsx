'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '@/components/theme-toggle';
import { AuthButtons } from '@/components/auth/auth-buttons';
import { Logo } from './logo';
import { NavLinks } from './nav-links';
import { MobileNav } from './mobile-nav';
import { UserNav } from './user-nav';

export function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const checkAuth = async () => {
      // TODO: Implement Firebase auth check here
      setIsAuthenticated(false); // Placeholder
    };
    
    checkAuth();
  }, [pathname]); // Re-check auth when pathname changes

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Logo />
          <NavLinks isAuthenticated={isAuthenticated} />
        </div>
        
        <div className="flex items-center gap-4">
          <ThemeToggle />
          {isAuthenticated ? (
            <UserNav />
          ) : (
            <AuthButtons isAuthenticated={isAuthenticated} />
          )}
          {/* Only show mobile nav when authenticated */}
          {isAuthenticated && <MobileNav isAuthenticated={isAuthenticated} />}
        </div>
      </div>
    </header>
  );
}