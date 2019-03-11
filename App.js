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
    }

    routes(){
        require('./src/routes')(this.express);
    }

}

module.exports = new App().express;