const Discord = require("discord.js");

module.exports = {
  name: "8ball",
  category: "General",
  description: "Roll the 8ball lol",
  usage: "<question>",
  cooldown: 5,
  guildOnly: true,
  execute(bot, message, args) {
const responses = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes, definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and try again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Very doubtful",
  "lol no",
  "No way",
  "Only if you're a clown :clown:"
];
  const question = args.join(" ");
  let answer = responses[Math.floor(Math.random() * responses.length)];
  const eightballEmbed = new Discord.MessageEmbed()
      .setTitle(`:8ball:8Ball:8ball`)
      .addField("Question:",'${question}')
      .addField("8Ball Answer:",'${answer}')
      .setFooter("Requested by " + message.author.tag, message.author.avatarURL())
      .setColor("ORANGE")
    message.channel.send(eightballEmbed);
  }
};
