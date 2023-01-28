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

//  async (request, response) => {
//   try {
//     console.log(request.body.name);
//     const brawler = await retornarBrawlersPorNome(request.body.name);
//     const brawlerAtualizado = await atualizaBrawlerDoJSONNoMongo(brawler);
//     console.log(brawlerAtualizado);

//     response.render('brawler', { brawler: brawlerAtualizado });
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });

module.exports = app;
