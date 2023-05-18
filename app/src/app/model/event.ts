export class Event {
  id: number | null;
  date: Date | null;
  title: string;

  constructor(event: Partial<Event> = {}) {
    this.id = event?.id || null;
    this.date = event?.date || null;
    this.title = event?.title || '';
  }
}
