import { Suspense } from 'react';
import { TaskList } from '@/components/tasks/task-list';
import { fetchTasks } from '@/lib/tasks/task-service';
import { Card } from '@/components/ui/card';

export default async function TasksPage() {
  const tasks = await fetchTasks();

  return (
    <div className="container py-8 space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold mb-2">Tasks & Challenges</h1>
          <p className="text-muted-foreground">
            Complete tasks to earn points and level up your profile
          </p>
        </div>
      </div>

      <Suspense fallback={<div>Loading tasks...</div>}>
        <TaskList 
          tasks={tasks} 
          onTaskStart={(taskId) => {
            // Handle task start - will be implemented with auth
          }} 
        />
      </Suspense>
    </div>
  );
}