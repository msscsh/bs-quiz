const MongoClient = require('mongodb').MongoClient;

const client = new MongoClient(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const connectToMongo = async () => {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    return client;
  } catch (err) {
    console.log(err);
  }
};

const getBrawlersCollection = async () => {
  await connectToMongo();
  const collection = client.db("dadobruto").collection("brawlers");
  return collection
};

module.exports = { getBrawlersCollection };
