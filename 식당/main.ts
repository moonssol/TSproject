import { Menu } from "./src/Menu.js";
import { Chef, Server } from "./src/WorkerManager.js";
import { orderManager } from "./src/orderManager.js";

var ordernum = 1;

var _orderManager: orderManager = new orderManager();
var _Chef: Chef = new Chef();
var _Server: Server = new Server();

var chefs: Chef[] = [new Chef(), new Chef()];
var servers: Array<Server> = [new Server(1000), new Server(2000)];

(document.getElementById("sundae") as HTMLButtonElement).onclick =
  function (): void {
    run(new Menu("순댓국", 1000, "준비중", ordernum));
    ordernum++;
  };
(document.getElementById("haejang") as HTMLButtonElement).onclick =
  function (): void {
    run(new Menu("해장국", 2000, "준비중", ordernum));
    ordernum++;
  };

function run(menu: Menu): void {
  _orderManager.addOrder(menu);

  _Chef
    .findChefAsync(chefs)
    .then(function (chef: Chef) {
      menu.status = "요리중";
      _orderManager.removeOrder(menu);
      _orderManager.addCooking(menu);
      return chef.cookAsync(menu);
    })
    .then(function () {
      menu.status = "서빙대기중";
      _orderManager.removeCooking(menu);
      _orderManager.addServing(menu);
      return _Server.findServerAsync(servers);
    })
    .then(function (server: Server) {
      menu.status = "서빙진행중";
      return server.serveAsync();
    })
    .then(function () {
      menu.status = "서빙완료!";
      _orderManager.renderServings();
    });
}
