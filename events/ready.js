module.exports = async (client) => {
  //Client User activity
  client.user.setStatus("online");
  client.user.setActivity("ModMail Threads!", { type: "WATCHING" });

  //Client info
const response1 = 'ModMail Assistant is online, listening to port 42069'
const response2 = 'ight daddy, I am ready :smirk_cat:'
const response = [
  response1,
  response2
                 ]
  var pick = Math.floor(Math.random() * response.length);
   console.log(response[pick]);

  client.ready = true;

};
