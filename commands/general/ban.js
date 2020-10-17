const Discord = require("discord.js");

module.exports = {
  name: "ban",
  category: "General",
  description: "Ban someone from the guild!",
  aliases: ["bean"],
  usage: "[member id/mention] [reason]",
  cooldown: 5,
  guildOnly: true,
  reqPermissions: ['BAN_MEMBERS'],
  execute(bot, message, args) {
  
      if (!message.member.hasPermission("BAN_MEMBERS"))
    return message.channel.send(':x: | You do not have the required permissions to use this command.').then(msg => msg.delete(5000))
  
    if (!message.guild.me.hasPermission(["BAN_MEMBERS"])) return message.channel.send(":x: | I do not have the required permissions!").then(msg => msg.delete(5000))
  
    const user = message.mentions.users.first() 
    
    if(user) {
    const member = message.guild.member(user) 

    if(member){
    member.ban(reason).then(() =>{
    message.channel.send(`:tools: **${member.user.tag}** has been **BANNED**!`) 
    member.send(`:x: | You were **banned** from **${message.guild}** for:` + reason)
    }).catch(err =>{
    message.channel.send(`:x: | I was unable to ban ${user.tag}`).then(msg => msg.delete(3000));
    console.log(err);
    })
    }
    }else {
    message.channel.send(":x: | Please specify a user to ban!").then(msg => msg.delete(3000));
    }
     
 }
