export class Chef {
    constructor() {
        this.status = "ready";
    }
    isAvailable() {
        return this.status == "ready";
    }
    cookAsync(menu) {
        var chef = this;
        chef.status = "cooking";
        return new Promise(function (resolve) {
            setTimeout(function () {
                chef.status = "ready";
                resolve();
            }, menu.time);
        });
    }
    findChefAsync(chefs) {
        return new Promise(function (resolve) {
            var intervalID = setInterval(function () {
                var availableChefs = chefs.filter((chef) => chef.isAvailable());
                if (availableChefs.length > 0) {
                    clearInterval(intervalID);
                    resolve(availableChefs[0]);
                }
            }, 500);
        });
    }
}
export class Server {
    constructor(time) {
        this.status = "ready";
        this.time = time;
    }
    isAvailable() {
        return this.status == "ready";
    }
    serveAsync() {
        var server = this;
        server.status = "serving";
        return new Promise(function (resolve) {
            setTimeout(function () {
                server.status = "ready";
                resolve();
            }, server.time);
        });
    }
    findServerAsync(servers) {
        return new Promise(function (resolve) {
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
