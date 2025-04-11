'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

interface AuthButtonsProps {
  isAuthenticated: boolean;
}

export function AuthButtons({ isAuthenticated }: AuthButtonsProps) {
  const router = useRouter();

  // If authenticated, don't render anything
  if (isAuthenticated) {
    return null;
  }

  return (
    <div className="flex items-center gap-4">
      <Button 
        variant="ghost" 
        onClick={() => router.push('/auth/login')}
      >
        Sign In
      </Button>
      <Button
        onClick={() => router.push('/auth/register')}
      >
        Join Now
      </Button>
    </div>
  );
}