'use client';

import { useState } from 'react';
import { EventCard } from '@/components/events/event-card';
import { EventFilters } from '@/components/events/event-filters';
import { EventHeader } from '@/components/events/event-header';
import { type Event } from '@/lib/types/events';

// Mock data - replace with API call
const EVENTS: Event[] = [
  {
    title: 'Startup Pitch Night',
    date: 'April 15, 2024',
    time: '6:00 PM IST',
    location: 'Virtual',
    type: 'pitch',
    attendees: 120,
    maxAttendees: 150
  },
  {
    title: 'Product Development Workshop',
    date: 'April 18, 2024',
    time: '2:00 PM IST',
    location: 'Bangalore',
    type: 'workshop',
    attendees: 45,
    maxAttendees: 50
  },
  {
    title: 'Founder Networking Mixer',
    date: 'April 20, 2024',
    time: '5:30 PM IST',
    location: 'Mumbai',
    type: 'networking',
    attendees: 85
  }
];

export default function EventsPage() {
  const [selectedType, setSelectedType] = useState('all');

  const filteredEvents = selectedType === 'all'
    ? EVENTS
    : EVENTS.filter(event => event.type === selectedType);

  return (
    <div className="container py-8 space-y-8">
      <EventHeader />
      
      <EventFilters
        selectedType={selectedType}
        onTypeChange={setSelectedType}
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredEvents.map((event) => (
          <EventCard
            key={event.title}
            event={event}
            onRegister={() => {
              // Will be implemented with auth
            }}
          />
        ))}
      </div>
    </div>
  );
}