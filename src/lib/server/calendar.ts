import { GOOGLE_CAL_KEY } from '$env/static/private';
import { error } from '@sveltejs/kit';
import { redis } from './redis';

interface RawCalendarEvent {
    id: string;
    summary: string;
    description?: string;
    location?: string;
    start: {
        dateTime?: string;
        date?: string;
    };
    end: {
        dateTime?: string;
        date?: string;
    };
    htmlLink: string;
}

export interface CalendarEvent {
    id: string;
    summary: string;
    description?: string;
    location?: string;
    start: Date;
    end: Date;
    htmlLink: string;
}

export async function getEvents(fetch: any): Promise<CalendarEvent[]> {
    const cached = await redis.get('events');
    let json;

    if (!cached) {
        const response = await fetch(`https://www.googleapis.com/calendar/v3/calendars/71apas278bprfrjbnkmhq2jne8%40group.calendar.google.com/events?key=${GOOGLE_CAL_KEY}&singleEvents=true&orderBy=startTime`);
        if (!response.ok) {
          throw error(response.status, `Failed to fetch events: ${response.statusText}`)
        }
        json = await response.json();
        await redis.set('events', JSON.stringify(json), 'EX', 60 * 60);
    } else {
        json = JSON.parse(cached);
    }

    const events: CalendarEvent[] = json.items.map((event: RawCalendarEvent) => ({
        id: event.id,
        summary: event.summary,
        description: event?.description,
        location: event?.location,
        start: new Date(event.start.dateTime ?? event.start.date ?? new Date()),
        end: new Date(event.end.dateTime ?? event.end.date ?? new Date()),
        htmlLink: event.htmlLink
    }));

    return events;
}

export async function getUpcomingEvents(fetch: any): Promise<CalendarEvent[]> {
    const events = await getEvents(fetch);
    return events.filter((event) => event.start >= new Date());
}

export async function getEvent(id: string, fetch: any): Promise<CalendarEvent> {
    const events = await getEvents(fetch);
    const event = events.find((event) => event.id === id);
    if (!event) {
      throw error(404, 'Event not found');
    }
    return event;
}