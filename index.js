require('dotenv').config();
//Discord
const { Client, Collection } = require('discord.js');
const client = new Client({
});

client.commands = new Collection();
client.events = new Collection();
client.ready = false;

["commands", "events"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});

client.login(process.env.BOT_TOKEN);
