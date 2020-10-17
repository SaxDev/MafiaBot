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

    const user = message.mentions.users.first()     
    const prefix = process.env.PREFIX
    var reason = message.content.replace(prefix + "kick", "");
    
    if(user) {
    const member = message.guild.member(user) 

    if(member){
    member.kick(reason).then(() =>{
    message.channel.send(`:tools: **${member.user.tag}** has been **KICKED**`) 
    member.send(`❌ You were **kick** from **${message.guild}** for:` + reason)
    }).catch(err =>{
    message.channel.send(`❌ I was unable to kick ${user.tag}`).then(msg => msg.delete(3000));
    console.log(err);
    })
    }
    } else {
    message.channel.send("❌ Please specify a user to kick!").then(msg => msg.delete(3000));
    }
     
  }
];
