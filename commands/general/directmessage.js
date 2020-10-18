const Discord = require("discord.js");

module.exports = {
  name: "directmessage",
  category: "General",
  description: "Direct messages a member with a fancy embed.",
  aliases: ["dm"],
  usage: "[member id/mention] [title] | [description] | [color]",
  cooldown: 5,
  guildOnly: true,
  reqPermissions: ['MANAGE_GUILD'],
  execute(bot, message, args) {
    if (!args[0]) return message.channel.send({embed: {title: "Error ⚠️" description:'You have to mention or provide a id to direct message a user.', color: '#f83e42'}});
    if (!args[1]) return message.channel.send({embed: {title: "Error ⚠️" description:'You have to provide a title for the embed.', color: '#f83e42'}});
    
    let member = false
    if (message.mentions.users.first()) {
      member = message.mentions.users.first().id;
    } else {
      if (!message.guild.members.cache.get(args[0])) return message.channel.send({embed: {title: "Error ⚠️" description:'This member does not exist.', color: '#f83e42'}});
      member = args[0]
    }
    
    args.shift()
    const msg = args.join(' ')
    const color1 = args.join('#')
    const sliced = msg.indexOf('|')
    let title = msg
    let description = false
    let footer = false
    let color = color1
    if (sliced != -1) {
      let array = msg.split("|")
      title = array[0]
      description = array[1]
      footer = array[2]
      color = array[3]
    }
    
    const dmEmbed = new Discord.MessageEmbed()
    .setTitle(title)
    .setColor(color)
    if (description) dmEmbed.setDescription(description)
    if (footer) dmEmbed.setFooter(footer)
    bot.users.cache.get(member).send(dmEmbed).then(() => {
      message.channel.send({embed: {title: "Success!" description:'The embed has been sent:', color: '#42f12c'}}, {embed: dmEmbed})
    }).catch(err => {
      message.channel.send({embed: {title: "Error ⚠️" description:'Couldnt dm the user, they probably have their dms closed.', color: '#f83e42'}})
    })
  }
};
