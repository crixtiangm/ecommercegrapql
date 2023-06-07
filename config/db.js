const mongoose = require('mongoose');


const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/CRMGraphQL";

const conectarDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log(`Connected to Mongo! Database name: ${MONGO_URI}`);
    } catch (err) {
        console.error("Error connecting to mongo: ", err);
        process.exit(1); //Detenemos la app
    }
}
  
module.exports = conectarDB;