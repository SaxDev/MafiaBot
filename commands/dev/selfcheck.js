const os = require('os-utils');
const Discord = require('discord.js');

module.exports = {
  name: "selfcheck",
  category: "dev",
  description: "The bot completes a self check",
  aliases: 'sc',
  dev: true,
  execute(bot, message, args) {
      const memUsage = Math.round(process.memoryUsage().heapUsed / 1024 / 1024)

    await os.cpuUsage(async function(v){
    if (${Math.round(memUsage * 100) / 100} > 500) return message.channel.send(Memory usage is above 500MB!);
    }
  }
};
