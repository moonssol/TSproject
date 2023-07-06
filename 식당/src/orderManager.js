export class orderManager {
    constructor() {
        this.orders = [];
        this.cookings = [];
        this.servings = [];
    }
    renderOrders() {
        var ordersEl = document.getElementById("orders");
        ordersEl.innerHTML = "";
        this.orders.forEach(function (order) {
            var liEl = document.createElement("li");
            liEl.textContent =
                order.name + " " + order.status + " 주문번호:" + order.num;
            ordersEl.append(liEl);
        });
    }
    renderCookings() {
        var cookingEl = document.getElementById("cookings");
        cookingEl.innerHTML = "";
        this.cookings.forEach(function (cooking) {
            var liEl = document.createElement("li");
            liEl.textContent =
                cooking.name + " " + cooking.status + " 주문번호:" + cooking.num;
            cookingEl.append(liEl);
        });
    }
    renderServings() {
        var servingsEl = document.getElementById("servings");
        servingsEl.innerHTML = "";
        this.servings.forEach(function (serving) {
            var liEl = document.createElement("li");
            liEl.textContent =
                serving.name + " " + serving.status + " 주문번호:" + serving.num;
            servingsEl.append(liEl);
        });
    }
    addOrder(menu) {
        this.orders.push(menu);
        this.renderOrders();
    }
    removeOrder(menu) {
        var index = this.orders.indexOf(menu);
        if (index > -1) {
            this.orders.splice(index, 1);
            this.renderOrders();
        }
    }
    addCooking(menu) {
        this.cookings.push(menu);
        this.renderCookings();
    }
    removeCooking(menu) {
        var index = this.cookings.indexOf(menu);
        if (index > -1) {
            this.cookings.splice(index, 1);
            this.renderCookings();
        }
    }
    addServing(menu) {
        this.servings.push(menu);
        this.renderServings();
    }
}
//공통화 가능. Render / addItem / removeItem
