export type EventType = 'pitch' | 'workshop' | 'networking';

export interface Event {
  title: string;
  date: string;
  time: string;
  location: string;
  type: EventType;
  attendees: number;
  maxAttendees?: number;
}