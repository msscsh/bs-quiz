const { retornarBrawlersPorNome, atualizaBrawlerDoJSONNoMongo} = require("../service/brawler_service");
const express = require("express");
const app = express();
const bodyParser = require('body-parser');

const brawlerController = require('../controller/brawler_controller');
const path = require('path');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));
app.use(express.static('public'));

app.get("/brawler", brawlerController.procurarBrawlerPorNome);
app.post("/brawler", brawlerController.atualizarBrawler);
app.get("/brawler/next", brawlerController.navegarParaOProximoBrawlerDaFila);
app.get("/brawler/back", brawlerController.navegarParaOAnteriorBrawlerDaFila);
app.get("/brawler/restore", brawlerController.restaurarFileJsonDeBrawlers);
app.get("/brawler/backup", brawlerController.fazerBackupMongoParaFile);

module.exports = app;
