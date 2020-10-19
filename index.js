require('dotenv').config();
//Discord
const mongoose = require('mongoose');
const { Client, Collection } = require('discord.js');
const client = new Client({
});

mongoose.connect('mongodb+srv://Pm277353:Pm277353@cluster0.fwqk7.mongodb.net/test/Data', { newNewUrlParser: true, useUnifiedTopology: true} )

client.commands = new Collection();
client.events = new Collection();
client.ready = false;

["commands", "events"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});

client.login(process.env.BOT_TOKEN);
