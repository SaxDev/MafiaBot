module.exports = async (client) => {

  //Client User activity
  client.user.setStatus("online");
  client.user.setActivity("the Mafia whispers...", { type: "LISTENING" });

  //Client info
  console.log(`Discord - Bot is ready.
  Client User: ${client.user.tag}
  Guild Count: ${client.guilds.cache.size}
  User Count: ${client.users.cache.size}`);

  client.ready = true;
};
