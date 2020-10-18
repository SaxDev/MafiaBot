require('dotenv').config();
//Discord
const { Client, Collection } = require('discord.js');
const db = require("mongoose")
const client = new Client({
});
const dbOptions = {
   userNewUrlParser: true,
   useUnifiedTopology: true,
   useFindAndModify: true
}
client.commands = new Collection();
client.events = new Collection();
client.ready = false;

["commands", "events"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});

db.connect("mongodb://Pm277353:Pm277353@cluster0-shard-00-00.fwqk7.mongodb.net:27017,cluster0-shard-00-01.fwqk7.mongodb.net:27017,cluster0-shard-00-02.fwqk7.mongodb.net:27017/ModMail-Assistant?ssl=true&replicaSet=atlas-5hhyyt-shard-0&authSource=admin&retryWrites=true&w=majority"
          .then(console.log("Database active"))
client.login(process.env.BOT_TOKEN);
