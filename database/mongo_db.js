const {MongoClient} = require('mongodb');

module.exports = {
    async getData(){
        /**
         * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
         * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
         */
        const uri = "mongodb+srv://mejdi14:azma4everfuck14@cluster0.txec9.mongodb.net/test?retryWrites=true&authSource=admin&w=majority";
        const client = new MongoClient(uri);
        try {
            // Connect to the MongoDB cluster
            await client.connect();
            // Make the appropriate DB calls
            await  listDatabases(client);
        } catch (e) {
            console.error(e);
        } finally {
            await client.close();
        }
    }
}

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};