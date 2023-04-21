import { Event } from './event';

export class Group {
  id: number;
  name: string;
  events: Event[];

  constructor(obj?: any) {
    this.id = obj?.id || null;
    this.name = obj?.name || null;
    this.events = obj?.events || null;
  }
}
