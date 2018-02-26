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

function getNewestFile(files, path) {
    var out = [];
    files.forEach(function(file) {
        var stats = fs.statSync(path + "/" +file);
        if(stats.isFile()) {
            out.push({"file":file, "mtime": stats.mtime.getTime()});
        }
    });
    out.sort(function(a,b) {
        return b.mtime - a.mtime;
    })
    return (out.length>0) ? out[0].file : "";
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
           let file2 = getNewestFile(file, testFolder)
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

