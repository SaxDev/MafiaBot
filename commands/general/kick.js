const Discord = require("discord.js");

module.exports = {
  name: "kick",
  category: "General",
  description: "Kick a user from the server!",
  usage: "<user> [reason]",
  cooldown: 5,
  reqPermissions: ['KICK_MEMBERS'],
  execute(bot, message, args) {

    const user = message.mentions.users.first()     
    const prefix = process.env.PREFIX
    var reason = message.content.replace(`Kick via Moderator:` + "");
    
    if(user) {
    const member = message.guild.member(user) 

    if(member){
    member.kick(reason).then(() =>{
    message.channel.send({embed: {title: "Success", description:`**${member.user.tag}** has been kicked!`, color: '#42f12c'}}) 
    member.send({embed: {title: "Oops! ⚠️", description:`You were **kick** from **${message.guild}** for:` + reason, color: '#42f12c'}})
    }).catch(err =>{
    message.channel.send({embed: {title: "Error ⚠️", description:`I was unable to kick ${user.tag}`, color: '#f83e42'}}).then(msg => msg.delete(3000));
    console.log(err);
    })
    }
    } else {
    message.channel.send({embed: {title: "Error ⚠️", description:"Please specify a user to kick!", color: '#f83e42'}}).then(msg => msg.delete(3000));
    }
     
  }
};
