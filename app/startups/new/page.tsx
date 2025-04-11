'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { StartupForm } from '@/components/startups/startup-form';
import { createStartup } from '@/lib/startups/startup-service';
import { useToast } from '@/hooks/use-toast';

export default function NewStartupPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const handleSubmit = async (data: any) => {
    setLoading(true);
    try {
      await createStartup(data);
      toast({
        title: 'Success',
        description: 'Startup created successfully!',
      });
      router.push('/dashboard');
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-8 max-w-2xl">
      <h1 className="text-4xl font-bold mb-8">Create New Startup</h1>
      <StartupForm onSubmit={handleSubmit} loading={loading} />
    </div>
  );
}