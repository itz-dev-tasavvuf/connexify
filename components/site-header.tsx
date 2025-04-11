'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { AuthButtons } from '@/components/auth/auth-buttons';
import { getSession } from '@/lib/supabase/auth';
import { Rocket } from 'lucide-react';
import Link from 'next/link';

export function SiteHeader() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const { session } = await getSession();
      setIsAuthenticated(!!session);
    };
    
    checkAuth();
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Rocket className="h-6 w-6" />
            <span className="font-bold">StartupConnect</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-6">
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="/events" className="text-sm font-medium transition-colors hover:text-primary">
              Events
            </Link>
            <Link href="/roles" className="text-sm font-medium transition-colors hover:text-primary">
              Roles
            </Link>
            {isAuthenticated && (
              <>
                <Link href="/dashboard" className="text-sm font-medium transition-colors hover:text-primary">
                  Dashboard
                </Link>
                <Link href="/tasks" className="text-sm font-medium transition-colors hover:text-primary">
                  Tasks
                </Link>
              </>
            )}
          </nav>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <AuthButtons isAuthenticated={isAuthenticated} />
          </div>
        </div>
      </div>
    </header>
  );
}