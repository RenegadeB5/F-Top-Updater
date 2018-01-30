//bot.js
//anything with "//" infront of it is treated as a comment, it doesn't affect the code of the bot
const Discord = require('discord.js');
var client = new Discord.Client();
const prefix = "!";
var NOTIFY_CHANNEL;

client.on('ready', () => {
    client.user.setGame("Exiled Hack! " + client.guilds.array().length + " Servers");
    console.log('successfully Logged In As schem Bot!');
    NOTIFY_CHANNEL = client.channels.find("name", "schems"); // Channel to send notification
   
client.on ('message', message => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  if (message.content === prefix + "schem") {
        let schem = args.slice(1).join(" ");
          
              NOTIFY_CHANNEL.sendMessage(schem);
                   
                  
}});
});
//LOGIN TOKEN-------------------------------------------------------------------
client.login(process.env.BOT_TOKEN);
