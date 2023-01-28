const { getBrawlersCollection } = require('../util/mongo_helper');
// const Brawler = require('../models/brawler');

class BrawlerRepository {

    async updateBrawler(brawler) {
        const collection = await getBrawlersCollection();
        const result = collection.replaceOne({_id: brawler._id}, brawler)
        // return new Brawler(result._id, result.name, result.rarity, result.type, result.attack, result.health);
        return result
    };

    async findBrawlerByName(brawlerName) {
        const collection = await getBrawlersCollection();
        brawlerName = (brawlerName+'').toUpperCase();
        const result = await collection.findOne({ name: brawlerName });
        // const brawler = Brawler(result._id, result.name, result.rarity, result.type, result.attack, result.health);
        return result
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

    async next(id) {
        const collection = await getBrawlersCollection();
        let result;
        let i = 0;
        do {
            id = id + 1
            i = i + 1;
            result = await collection.findOne({ id: id });
            if( i === 5) {
                break;
            }
        } while ( !(result) );

        return result
    };

    async back(id) {
        const collection = await getBrawlersCollection();
        let result;
        let i = 0;
        do {
            id = id - 1
            i = i + 1;
            result = await collection.findOne({ id: id });
            if( i === 5) {
                break;
            }
        } while ( !(result) );

        return result
    };

}

module.exports = new BrawlerRepository();