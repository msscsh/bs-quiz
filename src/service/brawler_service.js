const brawlers = require('../brawler/json/brawlers.json');
const brawlerRepository = require('../repository/brawler_repository');

class BrawlerService {

    async atualizarBrawler(brawlerBody) {
        const brawler = await brawlerRepository.findBrawlerByName(brawlerBody.name);
        brawler.name = brawlerBody.name;
        brawler.rarity = brawlerBody.rarity;
        brawler.type = brawlerBody.type;
        brawler.attack = brawlerBody.attack;
        brawler.health = brawlerBody.health;
        console.log(brawler);
        const brawlerAtualizado = await brawlerRepository.updateBrawler(brawler);
        return brawlerAtualizado;
    };

    async procurarBrawlerPorNome(brawlerName) {
        if (!brawlerName) {
            throw new Error('Nome é obrigatório');
        }
        const brawler = await brawlerRepository.findBrawlerByName(brawlerName);
        if (!brawler) {
            throw new Error(`Não foi possível encontrar um brawler com o nome ${brawlerName}`);
        }
        return brawler;
    };

    async inserirBrawlersDoArquivoJSON() {
        const result = await brawlerRepository.insertAllBrawlers(brawlers);
    };

    async removerTodosOsBrawlers() {
        const result = await brawlerRepository.deleteAllBrawlers();
    };

}

module.exports = new BrawlerService();

