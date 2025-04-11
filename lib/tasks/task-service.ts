import { supabase } from '@/lib/supabase/client';
import { Task, UserTask } from '@/lib/supabase/types';

export async function fetchTasks(category?: string) {
  const query = supabase
    .from('tasks')
    .select('*');
    
  if (category) {
    query.eq('category', category);
  }
  
  const { data } = await query;
  return data as Task[];
}

export async function startTask(userId: string, taskId: string): Promise<UserTask> {
  const { data } = await supabase
    .from('user_tasks')
    .insert({
      user_id: userId,
      task_id: taskId,
      status: 'in_progress'
    })
    .select()
    .single();
    
  return data as UserTask;
}

export async function completeTask(userId: string, taskId: string): Promise<UserTask> {
  const { data } = await supabase
    .from('user_tasks')
    .update({
      status: 'completed',
      completed_at: new Date().toISOString()
    })
    .match({ user_id: userId, task_id: taskId })
    .select()
    .single();
    
  return data as UserTask;
}