  
const Discord = require("discord.js");

module.exports = {
  name: "unban",
  category: "General",
  description: "Sends a message with a fancy embed.",
  usage: "[user] <reason>",
  aliases: ["un-ban","pardon","unbean","un-bean"],
  cooldown: 5,
  guildOnly: true,
  reqPermissions: ['BAN_MEMBERS'],
  execute(bot, message, args) {
    let userID = args[0]
      message.guild.fetchBans()
       .then(bans => {
    if (bans.some(u => userID.includes(u.username)));
    let bUser = bans.find(user => user.username === userID);
    let reason = args.slice(1).join(' ');
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || bans.find(b => b.user.id == userID)        
    if(!reason) reason = "No reason provided.";
    
    if(!bUser) return message.channel.send({embed: {title: "Error⚠️", description: "Please provide a user to unban.", color: '#f5ce42'}});             
      message.guild.members.unban(bUser.user({reason: reason}));
      message.guild.members.unban(bUser.user.id({reason: reason}));
      message.channel.send({embed: {title: "Success!", description: `I have successfully unbanned ${member.users.tag} for: ${reason}`, color: '#42f12c'}});  
    });
  }
};
