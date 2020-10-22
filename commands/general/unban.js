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
      msg.guild.fetchBans().then(bans=> {
      if(bans.size == 0) return 
      let bUser = bans.find(b => b.user.id == userID)
      if(!bUser) return
      msg.guild.members.unban(bUser.user)
})
  }
};
