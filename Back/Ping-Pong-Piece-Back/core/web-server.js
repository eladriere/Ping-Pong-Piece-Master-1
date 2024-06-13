const express = require('express');
const middleswares = require('./middleswares')
const pieceRoutes = require('../controller/piece.routes')
//const { initializeConfigMiddlewares, initializeErrorMiddlwares } = require('./middlewares');

const {sequelize} = require('../sql/postgresql.db');
class WebServer {
    app = undefined;
    port = 4000;
    server = undefined;

    constructor() {
        this.app = express();
        middleswares.initializeConfigMiddlewares(this.app);
        this._initializeRoutes();
        middleswares.initializeErrorMiddlwares(this.app);
        sequelize.sync()
    }

    start() {
        this.server = this.app.listen(this.port, () => {
            console.log(`app listening on port ${this.port}`);
        });
    }

    stop() {
        this.server.close();
    }

    _initializeRoutes() {
        this.app.use('/pieces', pieceRoutes.initializeRoutes());
    }
}

module.exports = WebServer;