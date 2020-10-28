const Discord = require("discord.js");

module.exports = {
  name: "number",
  category: "General",
  description: "Picks a random number out of 100 for you!",
  aliases: ["random"],
  cooldown: 5,
  execute(bot, message, args) {
let randomnumber = Math.floor(Math.random() * 100).toLocaleString()
    message.channel.send(`${randomnumber}`); 
  }
};
