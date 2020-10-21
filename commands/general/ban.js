const Discord = require("discord.js");

module.exports = {
  name: "ban",
  category: "General",
  description: "Ban users from the server!",
  usage: "[user] <reason>",
  aliases: "bean",
  cooldown: 5,
  guildOnly: true,
  reqPermissions: ['BAN_MEMBERS'],
  execute(bot, message, args) {
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    let logchannel = bot.channels.cache.get('740417504601571349');

        if(!member)
            return message.channel.send({embed: {title: "Error⚠️", description:"Please mention a valid member of this server", color:'#f83e42'}});
        if(!member.bannable) 
            return message.channel.send({embed: {title: "Error⚠️", description:"I cannot ban this user! Do they have a higher role?", color:'#f83e42'}});

        let reason = args.slice(1).join(' ');
        if(!reason) reason = "No reason provided.";

        member.ban({reason: reason})
            .catch(error => message.channel.send({embed: {title: "Error⚠️", description: 'I could not seem to ban that user.', color:'#f83e42'}}));
        message.channel.send({embed: {title: "Success!", description:`${member.user.tag} has been banned by ${message.author.tag} for: ${reason}`, color:'#42f12c'}});
        logchannel.send({embed: {title: "New Ban Log", description:`${message.author.tag} has banned ${member.user.tag} from the guild for: ${reason}.`, color:'BLUE'}});
  }
};
