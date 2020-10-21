const Discord = require("discord.js");

module.exports = {
  name: "unban",
  category: "General",
  description: "Unban a user from the server!",
  usage: "[user] <reason>",
  aliases: ["un-ban","pardon","unbean","un-bean"],
  cooldown: 5,
  guildOnly: true,
  reqPermissions: ['BAN_MEMBERS'],
  execute(bot, message, args) {
      let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
      let reason = args.slice(1).join(' ' + ` - Responsible Mod: ${message.author.tag}`);
      let userID = args[0]
          message.guild.fetchBans().then(bans=> {
         if(bans.size == 0) return message.channel.send({embed: {title: "Error⚠️", description: "No users are banned in this guild!", color: '#f5ce42'}}); 
         if(!reason) reason = `No reason provided. - Responsible Mod: ${message.author.tag}`;
      let bUser = bans.find(b => b.user.id == userID)
         if(!bUser) return message.channel.send({embed: {title: "Success!", description: `I have successfully unbanned ${member.user.tag} for: ${reason}`, color: '#42f12c'}})
          message.guild.members.unban(bUser.user)({reason: reason});
})
  }
};
