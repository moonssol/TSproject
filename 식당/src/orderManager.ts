import { Menu } from "./Menu";

export class orderManager {
  orders: Menu[];
  cookings: Menu[];
  servings: Menu[];
  constructor() {
    this.orders = [];
    this.cookings = [];
    this.servings = [];
  }
  renderOrders(): void {
    var ordersEl = document.getElementById("orders") as HTMLElement;
    ordersEl.innerHTML = "";
    this.orders.forEach(function (order: Menu) {
      var liEl: HTMLElement = document.createElement("li");
      liEl.textContent =
        order.name + " " + order.status + " 주문번호:" + order.num;
      ordersEl.append(liEl);
    });
  }
  renderCookings(): void {
    var cookingEl = document.getElementById("cookings") as HTMLElement;
    cookingEl.innerHTML = "";
    this.cookings.forEach(function (cooking) {
      var liEl = document.createElement("li");
      liEl.textContent =
        cooking.name + " " + cooking.status + " 주문번호:" + cooking.num;
      cookingEl.append(liEl);
    });
  }
  renderServings(): void {
    var servingsEl = document.getElementById("servings") as HTMLElement;
    servingsEl.innerHTML = "";
    this.servings.forEach(function (serving: Menu) {
      var liEl = document.createElement("li") as HTMLElement;
      liEl.textContent =
        serving.name + " " + serving.status + " 주문번호:" + serving.num;
      servingsEl.append(liEl);
    });
  }

  addOrder(menu: Menu): void {
    this.orders.push(menu);
    this.renderOrders();
  }
  removeOrder(menu: Menu): void {
    var index: number = this.orders.indexOf(menu);
    if (index > -1) {
      this.orders.splice(index, 1);
      this.renderOrders();
    }
  }
  addCooking(menu: Menu): void {
    this.cookings.push(menu);
    this.renderCookings();
  }
  removeCooking(menu: Menu): void {
    var index = this.cookings.indexOf(menu);
    if (index > -1) {
      this.cookings.splice(index, 1);
      this.renderCookings();
    }
  }
  addServing(menu: Menu): void {
    this.servings.push(menu);
    this.renderServings();
  }
}

//공통화 가능. Render / addItem / removeItem
