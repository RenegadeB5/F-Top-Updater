//bot.js
//anything with "//" infront of it is treated as a comment, it doesn't affect the code of the bot
const Discord = require('discord.js');
const config = require("./config.json");
var client = new Discord.Client();
const prefix = "!";
const args = message.content.slice(prefix.length).trim().split(/ +/g);
var channel;

client.on('ready', () => {
    client.user.setGame("Exiled Hack! " + client.guilds.array().length + " Servers");
    console.log('successfully Logged In As Wall Check Bot!');
    NOTIFY_CHANNEL = client.channels.find("name", "schems"); // Channel to send notification

client.on ('message', message => {
  if (message.content === prefix + "schem") {
        let schem = args.slice(1).join(" ");
          
              NOTIFY_CHANNEL.sendMessage(`Here you go.`, {
  files: [
    "./schems/schem + ".schematic""
  ]
})
  }});
 
//LOGIN TOKEN-------------------------------------------------------------------
client.login(process.env.BOT_TOKEN);
