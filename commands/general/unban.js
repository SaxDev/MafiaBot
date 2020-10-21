const Discord = require("discord.js");

module.exports = {
  name: "unban",
  category: "General",
  description: "Ban a user from the server!",
  usage: "[user] <reason>",
  aliases: ["un-ban","pardon","unbean","un-bean"],
  cooldown: 5,
  guildOnly: true,
  reqPermissions: ['BAN_MEMBERS'],
  execute(bot, message, args) {
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    let reason = args.slice(1).join(' ');
      if(!reason) reason = "No reason provided.";
    let userID = args[0]
      message.guild.fetchBans().then(bans=> {    
    let bUser = bans.find(b => b.user.id == userID)
      if(!bUser) return message.channel.send({embed: {title: "Error⚠️", description: "Please provide a user to unban.", color: '#f5ce42'}});
      message.guild.members.unban(bUser.user({reason: reason}))
             .catch(error => message.channel.send({embed: {title: "Error⚠️", description: 'I could not seem to unban that user.', color:'#f83e42'}}));
      message.channel.send({embed: {title: "Success!", description: `I have successfully unbanned ${member.users.tag} for: ${reason}`, color: '#42f12c'}});
})
  }
};
