const { ServerApiVersion, MongoClient } = require("mongodb");

const state = {
  db: null,
};

var uri = "mongodb://0.0.0.0:27017";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

module.exports.connect = async function (catchError) {
  try {
    const dbname = "shopping";
    await client.connect();
    await client.db(dbname).command({ ping: 1 });
    state.db = client.db(dbname);
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (error) {
    catchError(error);
  }
};

module.exports.get = function () {
  return state.db;
};
