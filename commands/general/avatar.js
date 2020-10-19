const Discord = require("discord.js");

module.exports = {
  name: "avatar",
  category: "General",
  description: "Get a specified user's avatar.",
  aliases: ["av"],
  usage: "[user]",
  cooldown: 5,
  async execute(bot, message, args) {
    let user
    if (!args[0]) {
      user = message.author
    } else {
      user = message.mentions.users.first()
      if (!user) return message.channel.send({embed: {title: "Error ⚠️", description:"You didn't provide a true user.", color: '#f83e42'}})
    }

    message.channel.send({
      embed: {
        description: `Here is **${user.tag}**'s avatar:`,
        image: {
          url: user.displayAvatarURL({format:"png",dynamic:true,size:1024})
        },
        color: "RANDOM",
        footer: {
          text: `Requested by: ${message.author.tag}`,
          icon: message.author.displayAvatarURL({dynamic:true})
        }
      }
    })
  }
};
