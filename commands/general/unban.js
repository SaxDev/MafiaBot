  
const Discord = require("discord.js");

module.exports = {
  name: "unban",
  category: "General",
  description: "Sends a message with a fancy embed.",
  usage: "[user]",
  aliases: ["un-ban","pardon","unbean","un-bean"],
  cooldown: 5,
  guildOnly: true,
  reqPermissions: ['BAN_MEMBERS'],
  execute(bot, message, args) {
      let unbanned = message.mentions.users.first() || client.users.resolve(args[0]);
      let member = bot.users.fetch(unbanned);
      let ban = message.guild.fetchBans();
      
    if (!ban.get(member.id)) {
      let notbannedembed = new Discord.MessageEmbed()
        .setTitle("Error⚠️")
        .setDescription("This user is not banned.")
        .setColor("#f83e42");
      message.channel.send(notbannedembed);

      return;
    }

    if (!message.guild.bot.permissions.has("BAN_MEMBERS")) {
      let botnoperms = new Discord.MessageEmbed()
         .setTitle("Error⚠️")
        .setDescription("I do not have permissions, please contact an administrator.")
      message.channel.send(botnoperms);

      return;
    }

    var user = ban.get(member.id);
    message.guild.members.unban(member);
    let successfullyembed = new Discord.MessageEmbed()
      .setTitle("Success!")
      .setDescription(`${member.tag} has been successfully unbanned.`)
      .setColor("#42f12c");

    message.channel.send(successfullyembed);    
  }
};
