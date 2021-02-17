const { MongoClient } = require('mongodb');
const constants = require('../helpers/constants');

module.exports = {
    async getData() {

        const uri = constants.mongodb_uri;
        console.log(uri)
        const client = new MongoClient(uri);
        try {
            await client.connect();
            await listDatabases(client);
        } catch (e) {
          //  console.error(e);
        } finally {
            await client.close();
        }
        this.catch(console.error);
    }
}

async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();
    databasesList.databases.forEach(db => console.log(` - ${db.getData}`));
};