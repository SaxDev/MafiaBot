const Discord = require("discord.js");

module.exports = {
  name: "say",
  category: "General",
  description: "Make the bot say your favourite quotes. If you don't add a channel, it'll send the quote in the channel the message was sent in",
  usage: "[channel] <quote>",
  cooldown: 5,
  reqPermissions: ["KICK_MEMBERS"],
  execute(bot, message, args) {
    const regex = /<#\d{18}>/g
    if (!args[0]) {
      return message.channel.send({embed: {title: "Error ⚠️", description:"You need a quote to type in!", color: '#f83e42'}})
    } else if (regex.test(args[0])) {
      const channel = message.mentions.channels.first()
      const channelarg = args.shift()
      const quote = args.join(" ");
      
      if (quote.length < 1 || quote.length > 512) return message.channel.send({embed: {title: "Error ⚠️", description:"The quote must be in rage of 1 to 512 characters.", color: '#f83e42'}});
      channel.send(quote).then(() => message.channel.send({embed: {title: "Success!", description:`Quote message has been sent!`, color: '#42f12c'}}).then(m => m.delete({timeout: 2500})))
      message.delete({ timeout: 2500, reason: `Quote message: ${quote}`});
    } else {
      const quote = args.join(" ");
      
      if (quote.length < 1 || quote.length > 512) return message.channel.send({embed: {title: "Error ⚠️", title: "Error ⚠️", description:"The quote must be in rage of 1 to 512 characters.", color: '#f83e42'}});
      message.channel.send(quote);
      message.delete({reason: `Quote message: ${quote}` });
    } 
  }
};
