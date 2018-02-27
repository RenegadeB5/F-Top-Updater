//bot.js
//anything with "//" infront of it is treated as a comment, it doesn't affect the code of the bot
const Discord = require('discord.js');
var client = new Discord.Client();
const prefix = "!";
var NOTIFY_CHANNEL;

client.on('ready', () => {
    client.user.setPresence({ game: { name: 'Updating....', type: 0 } });
    console.log('successfully Logged In As Update Bot!');
    NOTIFY_CHANNEL = client.channels.find("name", "ftop-update");  
    const testFolder = './schems/';
    const fs = require('fs');
      fs.readdirSync(testFolder).forEach(file => {
         let file2 = "/app/schems/" + file
         console.log(file2);
         NOTIFY_CHANNEL.sendMessage(`Update.`, {
            files: [
               file2
            ]
          })
   
    })
}); 

//LOGIN TOKEN-------------------------------------------------------------------
client.login('NDA3NTkzODIzOTIxNzY2NDEw.DVIqzw.tVwiSN30_4x6LexUutYETZlyNAU');

