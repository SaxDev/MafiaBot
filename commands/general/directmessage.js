const Discord = require("discord.js");

module.exports = {
  name: "directmessage",
  category: "General",
  description: "Direct messages a member with a fancy embed.",
  aliases: ["dm"],
  usage: "[member id/mention] [title] | [description]",
  cooldown: 5,
  guildOnly: true,
  reqPermissions: ['MANAGE_GUILD'],
  execute(bot, message, args) {
    if (!args[0]) return message.channel.send(':x: | You have to mention or provide a id to direct message a user.');
    if (!args[1]) return message.channel.send(':x: | You have to provide a title for the embed.');
    
    let member = false
    if (message.mentions.users.first()) {
      member = message.mentions.users.first().id;
    } else {
      if (!message.guild.members.cache.get(args[0])) return message.channel.send(':x: | This member does not exist.');
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
      message.channel.send('The embed has been sent:', {embed: dmEmbed})
    }).catch(err => {
      message.channel.send('Couldnt dm the user, they probably have their dms closed.')
    })
  }
};
