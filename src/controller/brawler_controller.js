const brawlerService = require('../service/brawler_service');


class BrawlerController {

    async atualizarBrawler(request, response) {
        try {
            const brawler = await brawlerService.atualizarBrawler(request.body);
            let state = 'brawler';
            response.render('index', { state, brawler });
        } catch (error) {
            response.status(500).send(error.message);
        }
    }

    async procurarBrawlerPorNome(request, response) {
        try {
            const brawler = await brawlerService.procurarBrawlerPorNome(request.query.name);
            let state = 'brawler';
            response.render('index', { state, brawler });
        } catch (error) {
            response.status(500).send(error.message);
        }
    }

    async restaurarFileJsonDeBrawlers(request, response) {
        try {
            await brawlerService.removerTodosOsBrawlers();
            await brawlerService.inserirBrawlersDoArquivoJSON();
        } catch (error) {
            response.status(500).send(error.message);
        }
    }

    async fazerBackupMongoParaFile(request, response) {
        try {
            throw new Error('Não implementado!');
        } catch (error) {
            response.status(500).send(error.message);
        }
    }

    async navegarParaOProximoBrawlerDaFila(request, response) {
        try {
            const brawler = await brawlerService.navegarParaOProximoBrawlerDaFila(request.query.name);

            if( brawler ) {
                let state = 'brawler';
                response.render('index', { state, brawler });
            }

        } catch (error) {
            response.status(500).send(error.message);
        }
    }

    async navegarParaOAnteriorBrawlerDaFila(request, response) {
        try {
            const brawler = await brawlerService.navegarParaOAnteriorBrawlerDaFila(request.query.name);

            if( brawler ) {
                let state = 'brawler';
                response.render('index', { state, brawler });
            }

        } catch (error) {
            response.status(500).send(error.message);
        }
    }

    async index(request, response) {
        try {
            const brawler = await brawlerService.procurarBrawlerPorNome('SHELLY');
            response.render('index', { undefined, brawler });
        } catch (error) {
            response.status(500).send(error.message);
        }
    }

}

module.exports = new BrawlerController();