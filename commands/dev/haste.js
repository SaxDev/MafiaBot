const fs = require("fs");
const Discord = require("discord.js");
const hastebin = require("hastebin-gen");

module.exports = {
  name: "haste-bin",
  category: "dev",
  description: "Uploads stuff to Hastebin. DEV ONLY.",
  aliases: ["up","haste"],
  usage: "[text]",
  dev: "true",
  async execute(bot, message, args) {
     const msg = await message.channel.send(`Uploading to Hastebin...`);
          if (!args[0]) return message.channel.send(":x: | You need to provide text for it to be uploaded to Hastebin.");
    const code = args.join(" ");
          let output = code;
          hastebin(output, { extention: 'txt' }).then(code => {
    const embed = new Discord.MessageEmbed()
          .setTitle(`Arguments have been uploaded to Hastebin!`)
          .setURL(code)
          .setColor("#02ff00");
          msg.edit(embed);
        });
     }
 };
