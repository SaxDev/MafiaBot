const Discord = require("discord.js");
module.exports = {
  name: "poll",
  category: "General",
  description: "Vote on whatever you'd like!",
  aliases: ["vote"],
  usage: "[context]",
  cooldown: 5,
  reqPermissions: ['KICK_MEMBERS'],
  execute(bot, message, args) {

  const question = args.join(" ");
    message.delete().catch(O_o=>{});  
      
    if(!question) return message.channel.send('Please provide a question!').then(msg => msg.delete(5000));
      
    const poll = new Discord.MessageEmbed() 
    .setColor('RANDOM')
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setDescription(question)
    .setFooter('React to vote!')
    .setTimestamp()
    message.channel.send({ embed: poll }).then(async embedMessage => {
         await embedMessage.react("✅");
         await embedMessage.react("❌")
    });
  }
};
