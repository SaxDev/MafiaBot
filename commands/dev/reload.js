const fs = require('fs');

module.exports = {
  name: "reload",
  category: "Dev",
  description: "Reloads a command.",
  usage: "<command name>",
  dev: true,
  unstaged: true,
  execute(bot, message, args) {
    if (!args[0]) return message.channel.send({embed: {title: "Error ⚠️", description:`Missing arguments. \n-Usage: \`${message.prefix}${this.name} ${this.usage}\``, color: '#f83e42'}});
    let commandName = args[0].toLowerCase()
    if (!bot.commands.get(commandName)) return message.channel.send({embed: {title: "Error ⚠️", description:"This command does not exist.", color: '#f83e42'}});
    let category = bot.commands.get(commandName).category.toLowerCase()

    try {
      delete require.cache[require.resolve(`../${category}/${commandName}.js`)];
      bot.commands.delete(commandName);
      const pull = require(`../${category}/${commandName}.js`);
      !pull.category ? pull.category = category : null
      bot.commands.set(commandName, pull);
    } catch(err) {
      return message.channel.send({embed: {title: "Error ⚠️", description:"Could not reload the command: " + err, color: '#f83e42'}});
    }

    message.channel.send({embed: {title: "Error ⚠️", description:"Command has been reloaded successfully.", color: '#42f12c'}});
  }
};
