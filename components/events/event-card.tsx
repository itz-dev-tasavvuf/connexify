'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Users, MapPin } from 'lucide-react';

interface EventCardProps {
  event: {
    title: string;
    date: string;
    time: string;
    location: string;
    type: 'pitch' | 'workshop' | 'networking';
    attendees: number;
    maxAttendees?: number;
  };
  onRegister: () => void;
}

export function EventCard({ event, onRegister }: EventCardProps) {
  const typeColors = {
    pitch: 'bg-blue-500/10 text-blue-500',
    workshop: 'bg-purple-500/10 text-purple-500',
    networking: 'bg-green-500/10 text-green-500'
  };

  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold">{event.title}</h3>
        <Badge variant="outline" className={typeColors[event.type]}>
          {event.type}
        </Badge>
      </div>

      <div className="space-y-3 mb-6">
        <div className="flex items-center text-muted-foreground">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center text-muted-foreground">
          <Clock className="w-4 h-4 mr-2" />
          <span>{event.time}</span>
        </div>
        <div className="flex items-center text-muted-foreground">
          <MapPin className="w-4 h-4 mr-2" />
          <span>{event.location}</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center text-muted-foreground">
          <Users className="w-4 h-4 mr-2" />
          <span>{event.attendees} attending</span>
          {event.maxAttendees && (
            <span> / {event.maxAttendees} spots</span>
          )}
        </div>
        <Button onClick={onRegister}>Register</Button>
      </div>
    </Card>
  );
}