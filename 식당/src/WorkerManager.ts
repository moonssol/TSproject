export class Chef {
  status: string;
  constructor() {
    this.status = "ready";
  }

  isAvailable(): boolean {
    return this.status == "ready";
  }

  cookAsync(menu: { time: number }): Promise<void> {
    var chef = this;
    chef.status = "cooking";
    return new Promise(function (resolve: any) {
      setTimeout(function () {
        chef.status = "ready";
        resolve();
      }, menu.time);
    });
  }

  findChefAsync(chefs: Array<Chef>): Promise<Chef> {
    return new Promise(function (resolve: any) {
      var intervalID = setInterval(function () {
        var availableChefs: Chef[] = chefs.filter((chef) => chef.isAvailable());
        if (availableChefs.length > 0) {
          clearInterval(intervalID);
          resolve(availableChefs[0]);
        }
      }, 500);
    });
  }
}
export class Server {
  status: string;
  time?: number;
  constructor(time?: number) {
    this.status = "ready";
    this.time = time;
  }
  isAvailable(): boolean {
    return this.status == "ready";
  }
  serveAsync(): Promise<void> {
    var server = this;
    server.status = "serving";
    return new Promise(function (resolve: any) {
      setTimeout(function () {
        server.status = "ready";
        resolve();
      }, server.time);
    });
  }
  findServerAsync(servers: Server[]): Promise<Server> {
    return new Promise(function (resolve: any) {
      var intervalID = setInterval(function () {
        var availableservers = servers.filter(function (server) {
          return server.isAvailable();
        });

        if (availableservers.length > 0) {
          clearInterval(intervalID);
          resolve(availableservers[0]);
        }
      }, 500);
    });
  }
}
