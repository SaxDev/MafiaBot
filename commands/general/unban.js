const Discord = require("discord.js");

module.exports = {
  name: "unban",
  category: "General",
  description: "Unban a user from the server!",
  usage: "<user> [reason]",
  aliases: ["un-ban","pardon","unbean","un-bean"],
  cooldown: 5,
  reqPermissions: ['BAN_MEMBERS'],
  execute(bot, message, args) {
    let userID = args[0]
    let unbanned = message.mentions.users.first() || bot.users.resolve(args[0]);
    let member = bot.users.fetch(unbanned);
    let reason = args.slice(1).join(' ' + ` - Responsible Mod: ${message.author.tag}`);
       message.guild.fetchBans().then(bans=> {
      if(bans.size == 0) return 
    let bUser = bans.find(b => b.user.id == userID)
      if(!bUser) return
       message.channel.send({embed: {title: "Success!", description:`${member.tag} has been un-banned by ${message.author.tag} for: ${reason}`, color:'#42f12c'}});
       message.guild.members.unban(bUser.user)
})
  }
};
