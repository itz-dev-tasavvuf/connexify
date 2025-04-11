'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { NavLinks } from './nav-links';
import { Logo } from './logo';
import { AuthButtons } from '@/components/auth/auth-buttons';
import { UserNav } from './user-nav';

interface MobileNavProps {
  isAuthenticated: boolean;
}

export function MobileNav({ isAuthenticated }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden" size="icon">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <div className="flex items-center justify-between">
          <Logo />
          <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        <div className="flex flex-col space-y-4 mt-8">
          <NavLinks isAuthenticated={isAuthenticated} />
          {isAuthenticated ? (
            <div className="px-2">
              <UserNav />
            </div>
          ) : (
            <AuthButtons isAuthenticated={false} />
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}