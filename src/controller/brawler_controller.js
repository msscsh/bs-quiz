const brawlerService = require('../service/brawler_service');


class BrawlerController {

    async atualizarBrawler(request, response) {
        try {
            const brawlerAtualizado = await brawlerService.atualizarBrawler(request.body);
            response.render('brawler', { brawlerAtualizado });
        } catch (error) {
            response.status(500).send(error.message);
        }
    }

    async procurarBrawlerPorNome(request, response) {
        try {
            const brawler = await brawlerService.procurarBrawlerPorNome(request.query.name);
            response.render('brawler', { brawler });
        } catch (error) {
            response.status(500).send(error.message);
        }
    }

}

module.exports = new BrawlerController();