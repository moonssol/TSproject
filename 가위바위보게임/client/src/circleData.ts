import { Item } from "./item";
export { CircleData };

class CircleData {
  items: Item[];
  constructor(items: Item[]) {
    this.items = items;
    //items = key / 부여받은 items = value
  }
  GetAll(): Item[] {
    return this.items;
  }
  GetNext(item: Item): Item {
    //가위 바위 보에 대한 로직 0 > 1 > 2 > 0 > 1 > 2 ...
    var index = this.items.indexOf(item); // 인덱스 찾아오는 함수
    var next = this.items[index + 1]; //index가 max 값이면 undifined가 나옴.
    return next || this.items[0];
  }
}
