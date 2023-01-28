const { retornarBrawlersPorNome, atualizaBrawlerDoJSONNoMongo} = require("../service/brawler_service");
const express = require("express");
const app = express();
const bodyParser = require('body-parser');

const brawlerController = require('../controller/brawler_controller');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get("/brawler", brawlerController.procurarBrawlerPorNome);
app.post("/brawler", brawlerController.atualizarBrawler);
app.get("/restore", brawlerController.restaurarFileJsonDeBrawlers);
app.get("/backup", brawlerController.fazerBackupMongoParaFile);

module.exports = app;
