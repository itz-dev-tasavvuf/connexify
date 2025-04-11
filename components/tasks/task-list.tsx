'use client';

import { useState } from 'react';
import { TaskCard } from './task-card';
import { TaskFilters } from './task-filters';
import { Task } from '@/lib/supabase/types';

interface TaskListProps {
  tasks: Task[];
  onTaskStart: (taskId: string) => void;
}

export function TaskList({ tasks, onTaskStart }: TaskListProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredTasks = selectedCategory === 'all'
    ? tasks
    : tasks.filter(task => task.category === selectedCategory);

  const categoryCounts = tasks.reduce((acc, task) => ({
    ...acc,
    [task.category]: (acc[task.category] || 0) + 1,
    all: (acc.all || 0) + 1
  }), {} as Record<string, number>);

  return (
    <div className="space-y-6">
      <TaskFilters
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        counts={categoryCounts}
      />
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredTasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onStart={() => onTaskStart(task.id)}
          />
        ))}
      </div>
    </div>
  );
}