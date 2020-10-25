const Discord = require("discord.js");

module.exports = {
  name: "emote",
  category: "Utility",
  description: "Get emoji's as link",
  aliases: ["emoji"],
  usage: "<discord emote>",
  execute(bot, message, args) { 
    let res = /<(a?):([a-z0-9-_]+):(\d+)>/i.exec(message.args[0]);
    //res[0] - whole string; res[1] - is animated; res[2] - name; res[3] - id
    if (res){
        let id = res[3];
        let url = `${bot.options.http.cdn}/emojis/${id}.${res[1] ? 'gif' : 'png'}`;
        message.channel.send(`<${url}>`, {files:[url]});
        return;
    }
    else if (/^\d+$/.test(message.args[0])){
        let r = require('node-fetch')(`${bot.options.http.cdn}/emojis/${message.args[0]}`);
        if (r.status == 200){
            message.channel.send(`Emote link: ${client.options.http.cdn}/emojis/${message.args[0]}.png\nAnimated emote link: ${bot.options.http.cdn}/emojis/${message.args[0]}.gif`);
            return;
        }
    }
  }
};
