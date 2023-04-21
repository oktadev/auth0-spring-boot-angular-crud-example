export class Event {
  id: number;
  date: Date;
  title: string;

  constructor(obj?: any) {
    this.id = obj?.id || null;
    this.date = obj?.date || null;
    this.title = obj?.title || null;
  }
}
