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
  const command = args.shift().toLowerCase();  
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const testFolder = './tests/';
  const fs = require('fs');
  if (command === "raid") {
      fs.readdirSync(schems).forEach(file => {
          NOTIFY_CHANNEL.sendMessage(file);
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
        message.channel.send(`Testing message.`, {
          files: [
             file
          ]
        })

                   
                  
  }
})
});
//LOGIN TOKEN-------------------------------------------------------------------
client.login(process.env.BOT_TOKEN);

