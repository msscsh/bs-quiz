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
        await brawlerRepository.updateBrawler(brawler);
        const brawlerAtualizado = await brawlerRepository.findBrawlerByName(brawler.name);
        return brawlerAtualizado;
    };

    async procurarBrawlerPorNome(brawlerName) {
        if (!brawlerName) {
            console.log('usando name default');
            brawlerName = 'SHELLY';
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

    async navegarParaOProximoBrawlerDaFila(brawlerName) {
        if (!brawlerName) {
            console.log('usando name default');
            brawlerName = 'SHELLY';
        }
        const brawler = await brawlerRepository.findBrawlerByName(brawlerName);
        const nextBrawler = await brawlerRepository.next(brawler.id);
        return nextBrawler;
    };

    async navegarParaOAnteriorBrawlerDaFila(brawlerName) {
        const brawler = await brawlerRepository.findBrawlerByName(brawlerName);
        const nextBrawler = await brawlerRepository.back(brawler.id);
        return nextBrawler;
    };

}

module.exports = new BrawlerService();

