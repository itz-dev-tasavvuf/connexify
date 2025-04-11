import { RoleWithDetails } from '@/lib/types/roles';
import { Button } from '../ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../ui/alert-dialog';
import { useState } from 'react';
import { Input } from '../ui/input';
import { toast } from 'sonner';

interface RoleCardProps {
  role: RoleWithDetails;
  onApply: (roleId: string, coverLetter?: string) => Promise<void>;
}

export function RoleCard({ role, onApply }: RoleCardProps) {
  const [coverLetter, setCoverLetter] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleApply = async () => {
    setIsLoading(true);
    try {
      await onApply(role.id, coverLetter);
      toast.success('Applied successfully');
    } catch (error) {
      toast.error('Failed to apply');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg font-medium leading-none">{role.name}</h3>
          <p className="text-sm text-muted-foreground">{role.description}</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">
            <strong>Requirements:</strong> {role.requirements}
          </p>
          <p className="text-sm text-muted-foreground">
            <strong>Responsibilities:</strong> {role.responsibilities}
          </p>
        </div>
        <div className="flex justify-end">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button>Apply</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Apply for {role.name}</AlertDialogTitle>
                <AlertDialogDescription>
                  Write a cover letter to introduce yourself.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <div className="py-2">
                <Input
                  placeholder="Cover letter..."
                  onChange={(e) => setCoverLetter(e.target.value)}
                  className="mb-2"
                />
              </div>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleApply} disabled={isLoading}>
                  {isLoading ? 'Applying...' : 'Apply'}
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
}