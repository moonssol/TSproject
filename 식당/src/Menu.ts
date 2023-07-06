export class Menu {
  name: string;
  time: number;
  status: string;
  num: number;
  constructor(name: string, time: number, status: string, num: number) {
    this.name = name;
    this.time = time;
    this.status = status;
    this.num = num;
  }
}
