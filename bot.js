//bot.js
//anything with "//" infront of it is treated as a comment, it doesn't affect the code of the bot
const Discord = require('discord.js');
var client = new Discord.Client();
const prefix = "!";
var NOTIFY_CHANNEL;

client.on('ready', () => {
    client.user.setPresence({ game: { name: process.env.IM_PLAYING, type: 0 } });
    console.log('successfully Logged In As schem Bot!');
});   

client.on ('message', message => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();  
  const testFolder = './schems/';
  const fs = require('fs');
  if (command === "update") {
      fs.readdirSync(testFolder).forEach(file => {
           let file2 = file + '.schematic'
           let file3 = '/app/schems/' + file2
           console.log(file3);
           message.channel.send(`Here you go.`, {
              files: [
                 file3
              ]
            })
   
      })
}});

//LOGIN TOKEN-------------------------------------------------------------------
client.login(process.env.BOT_TOKEN);

