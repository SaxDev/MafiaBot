const Discord = require("discord.js");
const config = require("../config.json");

module.exports = {
  name: "help",
  category: "General",
  description: "Commands of the bot.",
  aliases: ["commands"],
  usage: "[command name]",
  cooldown: 5,
  execute(bot, message, args) {
    const general = [];
    const misc = [];
    const { commands } = message.client;
    if (!args[0]) {
      commands.map(c => {
        if (c.dev || c.admin || c.unstaged) {
          return;
        } else if (c.category === "General") {
          general.push(`\`${c.name}\``);
        } else {
          misc.push(`\`${c.name}\``);
        }
      });

      let helpEmbed = new Discord.MessageEmbed()
        .setTitle("Here are the commands:")
        .setDescription(`You can provide a command to get into details. ${config.prefix}help <command name>`)
        .setTimestamp()
        .setFooter("Requested by " + message.author.username,message.author.avatarURL())
        .setColor("999999");
      if (general[0]) helpEmbed.addField("General Commands:", general.join(", "));
      return message.author.send(helpEmbed).then(() => {
          if (message.channel.type === "dm") return;
          message.react("📩");
        })
        .catch(error => {
          message.reply("It seems like I cant DM you. Please enable your DMs!");
        });
    } else if (args[0]) {
      const name = args[0].toLowerCase();
      const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

      if (!command) {
        return message.reply(`This command doesn't exists! use ${config.prefix}help to get into commands.`);
      }

      let helpEmbed = new Discord.MessageEmbed()
        .setTitle(command.name)
        .setColor("BLUE")
        .setTimestamp()
        .setFooter(
          "Requested by " + message.author.tag,
          message.author.avatarURL()
        );

      if (command.aliases)
        helpEmbed.addField("**Aliases:**", command.aliases.join(", "));
      if (command.category)
        helpEmbed.addField("**Category:**", command.category);
      if (command.description)
        helpEmbed.addField("**Description:**", command.description);
      if (command.usage)
        helpEmbed.addField(
          "**Usage:**",
          config.prefix + command.name + " " + command.usage
        );
      if (command.reqPermissions)
        helpEmbed.addField(
          "**Required Permission(s):**",
          command.reqPermissions.join(", ")
        );
      if (command.guildOnly)
        helpEmbed.addField(
          "**Guild Only**",
          "Command only can be executed in a guild."
        );
      if (command.dev)
        helpEmbed.addField(
          "**Dev Only**",
          "Only bot owner can execute this command."
        );
      if (command.cooldown)
        helpEmbed.addField("**Cooldown:**", command.cooldown + " second(s)");
      message.channel.send(helpEmbed);
    }
  }
};
