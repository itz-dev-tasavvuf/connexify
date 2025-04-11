'use client';

import { Rocket } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={cn("flex items-center space-x-2 hover:opacity-90 transition-opacity", className)}>
      <Rocket className="h-6 w-6 text-primary" />
      <span className="font-bold text-lg hidden sm:inline-block">StartupConnect</span>
      <span className="font-bold text-lg sm:hidden">SC</span>
    </Link>
  );
}