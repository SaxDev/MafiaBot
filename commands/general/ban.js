const Discord = require("discord.js");

module.exports = {
  name: "kick",
  category: "General",
  description: "Ban someone from the guild!",
  aliases: ["yeet"],
  usage: "[member id/mention] [reason]",
  cooldown: 5,
  guildOnly: true,
  reqPermissions: ['KICK_MEMBERS'],
  execute(bot, message, args) {

    const user = message.mentions.users.first()     
    const prefix = process.env.PREFIX
    var reason = message.content.replace(`Kick via Moderator:` + "");
    
    if(user) {
    const member = message.guild.member(user) 

    if(member){
    member.kick(reason).then(() =>{
    message.channel.send({embed: {description:':tools: **${member.user.tag}** has been **KICKED**', color: '#42f12c'}}) 
    member.send({embed: {description:`:x: | You were **kick** from **${message.guild}** for:` + reason, color: '#42f12c'}})
    }).catch(err =>{
    message.channel.send({embed: {description:`:x: | I was unable to kick ${user.tag}`, color: '#f83e42'}}).then(msg => msg.delete(3000));
    console.log(err);
    })
    }
    } else {
    message.channel.send({embed: {description:":x: | Please specify a user to kick!", color: '#f83e42'}}).then(msg => msg.delete(3000));
    }
     
  }
};
