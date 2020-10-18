module.exports = async (client) => {

  //Client User activity
  client.user.setStatus("online");
  client.user.setActivity("ModMail Threads!", { type: "WATCHING" });

  //Client info
  console.log('I have logged in and I am functioning.. I think');

  client.ready = true;

};
