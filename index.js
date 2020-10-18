require('dotenv').config();
//Discord
const { Client, Collection } = require('discord.js');
const client = new Client({
  disableMentions: "everyone"
});

client.commands = new Collection();
client.events = new Collection();
client.ready = false;

["commands", "events"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});
 let ignorechannels = ["740424191798673428","740412152728256588","762712565444509736","740418976852738159","740417504601571349","740429722885947455","740429803856855052"]

    if (!message.channel.id = ignorechannels.forEach(channelid =>)) return;{
    function oneWorking() {
    setTimeout(() => {
        message.channel.send('yeet?');
    }, 30000);
}
  })
client.login(process.env.BOT_TOKEN);
