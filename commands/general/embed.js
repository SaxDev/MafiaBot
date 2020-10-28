const Discord = require("discord.js");

module.exports = {
  name: "embed",
  category: "General",
  description: "Make an embed with the bot and send it in any channel! (The '|' is required!)",
  aliases: ["sendembed","send-embed"],
  usage: "[channel] | [title] | [description] | [color]",
  cooldown: 5,
  reqPermissions: ['MANAGE_GUILD'],
  execute(bot, message, args) {
    if (!args[0]) return message.channel.send({embed: {title: "Error ⚠️", description:'You have to mention the channel to send the embed..', color: '#f83e42'}});
    if (!args[1]) return message.channel.send({embed: {title: "Error ⚠️", description:'You have to provide a title for the embed!', color: '#f83e42'}});

    let channel = false
    if (message.mentions.channels.first()) {
      channel = message.mentions.channels.first().id;
    } else {
      if (!message.guild.channels.cache.get(args[0])) return message.channel.send({embed: {title: "Error ⚠️", description:'The channel provided does not exist!', color: '#f83e42'}});
      channel = args[0]
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
    const msgEmbed = new Discord.MessageEmbed()
    .setTitle(title)
    .setColor(color)
    if (description) msgEmbed.setDescription(description)
    if (footer) msgEmbed.setFooter(footer)
    bot.channels.cache.get(channel).send(msgEmbed).then(() => {
      message.channel.send({embed: {title: "Success!", description:'Embed has been sent', color: '#42f12c'}}, {embed: msgEmbed}).then(msg => msg.delete({timeout: 5000}))
    }).catch(err => {
      console.log(err)
    })
  }
};
