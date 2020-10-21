const Discord = require("discord.js");

module.exports = {
  name: "unban",
  category: "General",
  description: "Unban a user from the server!",
  usage: "[user]",
  aliases: ["un-ban","pardon","unbean","un-bean"],
  cooldown: 5,
  guildOnly: true,
  reqPermissions: ['BAN_MEMBERS'],
  execute(bot, message, args) {

      let userID = args[0]
      message.guild.fetchBans().then(bans=> {
      if(bans.size == 0) return message.channel.send({embed: {title: "Error⚠️", description: "No users are banned in this guild!", color: '#f5ce42'}});      
      let bUser = bans.find(b => b.user.id == userID)
      if(!bUser) return message.channel.send({embed: {title: "Error⚠️", description: "Please provide a user to unban.", color: '#f5ce42'}});
      message.guild.members.unban(bUser.user)
      message.channel.send({embed: {title: "Success!", description: 'I have successfully unbanned' + bUser.user, color: '#42f12c'}});
})
  }
};
