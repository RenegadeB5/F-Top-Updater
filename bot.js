//bot.js
//anything with "//" infront of it is treated as a comment, it doesn't affect the code of the bot
const Discord = require('discord.js');
var client = new Discord.Client();
const prefix = "!";
var NOTIFY_CHANNEL;

client.on('ready', () => {
    client.user.setPresence({ game: { name: process.env.IM_PLAYING, type: 0 } });
    console.log('successfully Logged In As Update Bot!');
}); 

function getNewestFile(dir, regexp) {
    var fs = require("fs"),
     path = require('path'),
    newest = null,
    files = fs.readdirSync(dir),
    one_matched = 0,
    i

    for (i = 0; i < files.length; i++) {

        if (regexp.test(files[i]) == false)
            continue
        else if (one_matched == 0) {
            newest = files[i];
            one_matched = 1;
            continue
        }

        f1_time = fs.statSync(path.join(dir, files[i])).mtime.getTime()
        f2_time = fs.statSync(path.join(dir, newest)).mtime.getTime()
        if (f1_time > f2_time)
            newest[i] = files[i]  
    }

    if (newest != null)
        return (path.join(dir, newest))
    return null
}

client.on ('message', message => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();  
  const testFolder = './schems/';
  const fs = require('fs');
  if (command === "update") {
      function remove() {
               message.channel.send("test") }
           setTimeout(remove, 3000)
      fs.readdirSync(testFolder).forEach(file => {
           let file2 = getNewestFile("/app/schems/", new RegExp('/app/schems/*\schematic'))
           console.log(file2);
           message.channel.send(`Here you go.`, {
              files: [
                 file2
              ]
            })
   
      })
}});

//LOGIN TOKEN-------------------------------------------------------------------
client.login(process.env.BOT_TOKEN);

