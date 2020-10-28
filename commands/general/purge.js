const Discord = require("discord.js");

module.exports = {
  name: "purge",
  category: "General",
  description: "Purge up to 100 messages with the bot.",
  aliases: ["prune"],
  usage: "<count>",
  cooldown: 5,
  reqPermissions: ['MANAGE_MESSAGES'],
  execute(bot, message, args) {
      if (!message.guild.me.hasPermission(["MANAGE_MESSAGES"])) return message.channel.send({embed: {title: "Error ⚠️", description:"I do not have the required permissions!", color: '#f83e42'}}).then(msg => msg.delete(5000))
  
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send({embed: {title: "Error ⚠️", description:'You do not have the required permissions!', color: '#f83e42'}}).then(msg => msg.delete(5000))
  
    if (isNaN(args[0]) || parseInt(args[0] <= 0)) return message.channel.send({embed: {title: "Error ⚠️", description:'Please provide a amount! No letters.', color: '#f83e42'}}).then(msg => msg.delete(3000))
     
    let deleteAmmount;

    if (parseInt(args[0] > 100)) {
        deleteAmmount - 100;
    } else {
        deleteAmmount = parseInt(args[0])
    }

    message.channel.bulkDelete(deleteAmmount, true)
    .then(deleted => message.channel.send({embed: {title: "Success!", description: `${message.author}, I have deleted \`${deleted.size}\` messages.`, color: '#42f12c'}})).then(msg => msg.delete(5000))
    }
};
