export class Group {
  id: number;
  name: string;
  constructor(obj?: any) {
    this.id = obj?.id || null;
    this.name = obj?.name || null;
  }
}
