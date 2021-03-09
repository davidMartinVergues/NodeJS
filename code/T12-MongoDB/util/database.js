// importo mongodb q en realidad es una clase
const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;
let _db;
const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://david:dmv1104@node-app.j1vce.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("connected");
      _db = client.db("node-app");
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "no database found";
};

//exportamos
module.exports.mongoConnect = mongoConnect;
module.exports.getDb = getDb;
