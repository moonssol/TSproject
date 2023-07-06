function Menu(name, time, status, num) {
  this.name = name;
  this.time = time;
  this.status = status;
  this.num = num;
}
var ordernum = 1;
function Chef() {
  this.status = "ready";
}
Chef.prototype.isAvailable = function () {
  return this.status == "ready";
};
Chef.prototype.cookAsync = function (menu) {
  var chef = this;
  chef.status = "cooking";
  return new Promise(function (resolve) {
    setTimeout(function () {
      chef.status = "ready";
      resolve();
    }, menu.time);
  });
};

function findChefAsync(chefs) {
  return new Promise(function (resolve) {
    var intervalID = setInterval(function () {
      var availableChefs = chefs.filter(function (chef) {
        return chef.isAvailable();
      });

      if (availableChefs.length > 0) {
        clearInterval(intervalID);
        resolve(availableChefs[0]);
      }
    });
  }, 500);
}

function Server(time) {
  this.status = "ready";
  this.time = time;
}
Server.prototype.isAvailable = function () {
  return this.status == "ready";
};
Server.prototype.serveAsync = function () {
  var server = this;
  server.status = "serving";
  return new Promise(function (resolve) {
    setTimeout(function () {
      server.status = "ready";
      resolve();
    }, server.time);
  });
};
function findserverAsync(servers) {
  return new Promise(function (resolve) {
    var intervalID = setInterval(function () {
      var availableservers = servers.filter(function (server) {
        return server.isAvailable();
      });

      if (availableservers.length > 0) {
        clearInterval(intervalID);
        resolve(availableservers[0]);
      }
    });
  }, 500);
}

var orders = [];
var cookings = [];
var servings = [];

var chefs = [new Chef(), new Chef()];
var servers = [new Server(1000), new Server(2000)];

function renderOrders() {
  //orders라는 배열과 동기화 되게끔
  var ordersEl = document.getElementById("orders");
  ordersEl.innerHTML = "";
  orders.forEach(function (order) {
    var liEl = document.createElement("li");
    liEl.textContent =
      order.name + " " + order.status + " 주문번호:" + order.num;
    ordersEl.append(liEl);
  });
}

function renderCookings() {
  //orders라는 배열과 동기화 되게끔
  var cookingEl = document.getElementById("cookings");
  cookingEl.innerHTML = "";
  cookings.forEach(function (cooking) {
    var liEl = document.createElement("li");
    liEl.textContent =
      cooking.name + " " + cooking.status + " 주문번호:" + cooking.num;
    cookingEl.append(liEl);
  });
}

function renderServings() {
  //orders라는 배열과 동기화 되게끔
  var servingsEl = document.getElementById("servings");
  servingsEl.innerHTML = "";
  servings.forEach(function (serving) {
    var liEl = document.createElement("li");
    liEl.textContent =
      serving.name + " " + serving.status + " 주문번호:" + serving.num;
    servingsEl.append(liEl);
  });
}

var cookingEl = document.getElementById("cookings");
var servingEl = document.getElementById("servings");

document.getElementById("sundae").onclick = function () {
  run(new Menu("순댓국", 1000, "준비중", ordernum));
  ordernum++;
};
document.getElementById("haejang").onclick = function () {
  run(new Menu("해장국", 2000, "준비중", ordernum));
  ordernum++;
};

function run(menu) {
  orders.push(menu);
  renderOrders();

  findChefAsync(chefs)
    .then(function (chef) {
      menu.status = "요리중";
      orders.splice(orders.indexOf(menu), 1);
      cookings.push(menu);
      renderOrders();
      renderCookings();
      return chef.cookAsync(menu);
    })
    .then(function () {
      menu.status = "대기중";
      cookings.splice(cookings.indexOf(menu), 1);
      servings.push(menu);
      renderCookings();
      renderServings();
      return findserverAsync(servers);
    })
    .then(function (server) {
      menu.status = "진행중";
      renderServings();
      return server.serveAsync();
    })
    .then(function () {
      menu.status = "완료!";
      //   servings.splice(servings.indexOf(menu), 1);
      renderServings();
    });
}
