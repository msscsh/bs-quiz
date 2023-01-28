const { getBrawlersCollection } = require('../util/mongo_helper');
const Brawler = require('../models/brawler');

class BrawlerRepository {

    async updateBrawler(brawler) {
        const collection = await getBrawlersCollection();
        const result = collection.replaceOne({_id: brawler._id}, brawler);
        return new Brawler(result._id, result.name, result.rarity, result.type, result.attack, result.health);
    };

    async findBrawlerByName(brawlerName) {
        const collection = await getBrawlersCollection();
        const result = await collection.findOne({ name: brawlerName });
        return new Brawler(result._id, result.name, result.rarity, result.type, result.attack, result.health);
    };

    async insertAllBrawlers(brawlers) {
        const collection = await getBrawlersCollection();
        const result = await collection.insertMany(brawlers);
        console.log(`Inserido ${result.insertedCount} brawlers`);
    };

    async deleteAllBrawlers() {
        const collection = await getBrawlersCollection();
        const result = await collection.deleteMany({});
        console.log(`Deletado ${result.insertedCount} brawlers`);
    };

}

module.exports = new BrawlerRepository();