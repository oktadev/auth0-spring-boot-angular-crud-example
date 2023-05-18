import { Event } from './event';

export class Group {
  id: number | null;
  name: string;
  events: Event[];

  constructor(group: Partial<Group> = {}) {
    this.id = group?.id || null;
    this.name = group?.name || '';
    this.events = group?.events || [];
  }
}
