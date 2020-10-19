require('dotenv').config();
//Discord
const mongoose = require('mongoose');
const prefix = require('../commands/models/prefix');
const { Client, Collection } = require('discord.js');
const client = new Client({
});

mongoose.connect('mongodb+srv://Pm277353:Pm277353@cluster0.fwqk7.mongodb.net/test/Data', { newNewUrlParser: true, useUnifiedTopology: true});

bot.on('message', async (message) => {
    if (message.author.bot) return;
      
const data = await prefix.findOne({
      GuildID: message.guild.id
  });
const messageArray = message.context.split(' ');
const cmd = messageArray[0];
const args = messageArray.slice(1);

    if(data) {
const prefix = data.Prefix;

    if (!message.content.startsWith(prefix)) return;
const commandfile = client.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)));
     commandfile.run(client, message, args);
    } else if (!data) {
const prefix = "<@536542160703586324>";
        
   if (!message.content.startsWith(prefix)) return;
const commandfile = client.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)));
     commandfile.run(client, message, args);
    };
client.commands = new Collection();
client.events = new Collection();
client.ready = false;

["commands", "events"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});

client.login(process.env.BOT_TOKEN);
