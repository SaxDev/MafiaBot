const Discord = require("discord.js");

module.exports = {
  name: "number",
  category: "General",
  description: "Let the bot pick a number 1-100 for you!",
  aliases: ["pick","random","num"],
  cooldown: 5,
  guildOnly: true,
  execute(bot, message, args) {
let randomnumber = Math.floor(Math.random() * 100).toLocaleString()
    message.channel.send(`${randomnumber}`); 
  }
};
