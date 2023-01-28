const express = require("express");
const bodyParser = require('body-parser');
const morgan = require('morgan');
const Router = require('./src/route/brawler_route');

const main = async () => {

    try {

        const app = express();
        app.use(morgan('combined')); 
        app.use(Router);
        app.listen(3000, () => {
            console.log("Server is running at port 3000");
        });

    } catch (error) {
        console.error(error);
    }
}

main();
