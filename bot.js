//bot.js
//anything with "//" infront of it is treated as a comment, it doesn't affect the code of the bot
const Discord = require('discord.js');
var client = new Discord.Client();
const prefix = "!";
var NOTIFY_CHANNEL;

client.on('ready', () => {
    client.user.setGame(process.env.IM_PLAYING);
    console.log('successfully Logged In As schem Bot!');
});   
client.on ('message', message => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();  
  const testFolder = './schems/';
  const fs = require('fs');
  if (command === "list") {
      fs.readdirSync(testFolder).forEach(file => {
          message.channel.send(file);
})
    
  }
});
    
client.on ('message', message => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if (command === "schem") {
        let schem = args.slice(0).join(" ");
        let file2 = schem + '.schematic'
        let file = '/app/schems/' + file2
        message.channel.send(`Here you go.`, {
          files: [
             file
          ]
        })

                   
                  
  }
});
//LOGIN TOKEN-------------------------------------------------------------------
client.login(process.env.BOT_TOKEN);

