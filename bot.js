//bot.js
//anything with "//" infront of it is treated as a comment, it doesn't affect the code of the bot
const Discord = require('discord.js');
var client = new Discord.Client();
const prefix = "!";
var NOTIFY_CHANNEL;

client.on('ready', () => {
    client.user.setPresence({ game: { name: process.env.IM_PLAYING, type: 0 } });
    console.log('successfully Logged In As Update Bot!');
    NOTIFY_CHANNEL = client.channels.find("name", "ftop-update");  
    const testFolder = './schems/';
    const fs = require('fs');
  
    function remove() {
             NOTIFY_CHANNEL.sendMessage("test") }
         setTimeout(remove, 3000)
      fs.readdirSync(testFolder).forEach(file => {
         let file2 = "/app/schems/" + file
         console.log(file2);
         NOTIFY_CHANNEL.sendMessage(`Here you go.`, {
            files: [
               file2
            ]
          })
   
    })
}); 

//LOGIN TOKEN-------------------------------------------------------------------
client.login(process.env.BOT_TOKEN);

