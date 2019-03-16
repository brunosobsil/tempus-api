const express = require('express');

class App {
    
    constructor(){
        this.express = express();
        this.middlewares();
        this.routes();        
    }

    middlewares(){
        this.express.use(express.json());
        this.express.use(express.urlencoded({ extended: false }));
        this.express.use(function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "http://localhost:4200");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
    }

    routes(){
        require('./src/routes')(this.express);
    }

}

module.exports = new App().express;