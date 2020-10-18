const db = require("mongoose")
module.exports = async (client) => {

  //Client User activity
  client.user.setStatus("online");
  client.user.setActivity("ModMail Threads!", { type: "WATCHING" });

  //Client info
  console.log('I have logged in and I am functioning.. I think');

  client.ready = true;
  
  const dbOptions = {
   userNewUrlParser: true,
   useUnifiedTopology: true,
   useFindAndModify: true
}
   db.connect("mongodb://Pm277353:Pm277353@cluster0-shard-00-00.fwqk7.mongodb.net:27017,cluster0-shard-00-01.fwqk7.mongodb.net:27017,cluster0-shard-00-02.fwqk7.mongodb.net:27017/ModMail-Assistant?ssl=true&replicaSet=atlas-5hhyyt-shard-0&authSource=admin&retryWrites=true&w=majority"
          console.log("Database active");
};
