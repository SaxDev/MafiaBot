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
    let userID = args[0]
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    let reason = args.slice(1).join(' ' + ` - Responsible Mod: ${message.author.tag}`);
       message.guild.fetchBans().then(bans=> {
      if(bans.size == 0) return 
    let bUser = bans.find(b => b.user.id == userID)
      if(!bUser) return
       message.guild.members.unban(bUser.user)
       message.channel.send({embed: {title: "Success!", description:`${member.user.tag} has been un-banned by ${message.author.tag} for: ${reason}`, color:'#42f12c'}});
})
  }
};
