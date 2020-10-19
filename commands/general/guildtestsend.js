const Discord = require("discord.js");

module.exports = {
  name: "guildsendtest",
  category: "General",
  description: "Sends a message to all of the guilds the bot is in.",
  cooldown: 5,
  guildOnly: true,
  reqPermissions: ['ADMINISTRATOR'],
  execute(bot, message, args) {
  
        var guildList = client.guilds.array();
        try {
            guildList.forEach(guild => guild.defaultChannel.send("pp"));
        } catch (err) {
            console.log("Could not send message to " + guild.name);
        
    }
  }
};
