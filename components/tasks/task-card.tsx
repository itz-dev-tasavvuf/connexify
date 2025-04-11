'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Task } from '@/lib/supabase/types';
import { Trophy, Clock, ArrowRight } from 'lucide-react';

interface TaskCardProps {
  task: Task;
  onStart: () => void;
  status?: 'available' | 'in_progress' | 'completed';
}

export function TaskCard({ 
  task, 
  onStart, 
  status = 'available' 
}: TaskCardProps) {
  const difficultyColors = {
    beginner: 'bg-green-500/10 text-green-500',
    intermediate: 'bg-yellow-500/10 text-yellow-500',
    advanced: 'bg-red-500/10 text-red-500'
  };

  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold">{task.title}</h3>
        <Badge 
          variant="outline" 
          className={difficultyColors[task.difficulty]}
        >
          {task.difficulty}
        </Badge>
      </div>
      
      <p className="text-muted-foreground mb-6 line-clamp-2">
        {task.description}
      </p>
      
      <div className="flex items-center justify-between mt-auto">
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-yellow-500">
            <Trophy className="w-4 h-4 mr-1" />
            <span>{task.points} pts</span>
          </div>
          {task.requirements?.timeLimit && (
            <div className="flex items-center text-muted-foreground">
              <Clock className="w-4 h-4 mr-1" />
              <span>{task.requirements.timeLimit}</span>
            </div>
          )}
        </div>

        {status === 'available' && (
          <Button onClick={onStart}>
            Start
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        )}
        {status === 'in_progress' && (
          <Button variant="outline">Continue</Button>
        )}
        {status === 'completed' && (
          <Badge variant="success">Completed</Badge>
        )}
      </div>
    </Card>
  );
}