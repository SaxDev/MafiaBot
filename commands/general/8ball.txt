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
    const filter = ['n1gg3r','nigga','n1gger','raid','n1gga','niggеr','niggers','n!gger','nigger','n!gga','n!gg3r','nlgga','nlgger','nlgg3r','n1gg3r','n1gg@',"n1gg@","n1gga","negro","n¡gg3r","fag",
"retard","faggot","n i g g e r","k k k","beaner","b e a n e r","be a ner","b e a ner","be an er","be an e r",'niggar','niggair','wetback','w e t b a c k','wet ba ck',
'we tback','w e tback','rëtard','rétard','retarted','retarded',
'r.e.t.a.r.d','r3tard','nigg3rs','nigg3r','retar.d','n1gg3r','nlgger','queer','qu e e r','que e r','qu ee r',
'q u e e r','qeer','quuer','quer','fags','chink','dike','niggar','niggur','nigor','nigre','nigar','niggah','nigguh','Niglet','nigglet','Nigra','negra','niggra',
'nigrah','nigruh','chinki','chinky','Spic','spick','spik','spig','dike','spigotty','whitey','nazi','Wigger','Wigga','wegro','nikker','nicker','icker','nikker','nikka','nibbah','nibba','nicka',
'jews','jews','f a g g o t','f a g','queer','q u e e r','qu e e r','quee r','q u e er','quee er','quee e r','qu ee r','quee r','q ueer','queer','q ueer','q uee r','rape','rapist','molest','molester',
'molestar','nibb','fagot','faget','kys','kill your self','k y s']
  let bad = false
  let answer = responses[Math.floor(Math.random() * responses.length)];
    filter.forEach(word => {
      if (message.content.includes(word)) bad = true
    })
    if (bad) return message.channel.send(":x: | You can't use a blacklisted word in your question.")
    if (!args[0]) return message.channel.send(":x: | You need a question to ask the magic 8ball!.");    
  const question = args.join(" ");
  let eightballEmbed = new Discord.MessageEmbed()
      .setTitle(`:8ball:8Ball:8ball:`)
      .addField("Question:",`${question}`)
      .addField("8Ball Answer:",`${answer}`)
      .setFooter("Requested by " + message.author.tag, message.author.avatarURL())
      .setColor("ORANGE")
    message.channel.send(eightballEmbed);
  }
};
