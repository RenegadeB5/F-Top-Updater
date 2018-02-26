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

function getNewestFile(dir, files, callback) {
    if (!callback) return;
    if (!files || (files && files.length === 0)) {
        callback();
    }
    if (files.length === 1) {
        callback(files[0]);
    }
    var newest = { file: files[0] };
    var checked = 0;
    fs.stat(dir + newest.file, function(err, stats) {
        newest.mtime = stats.mtime;
        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            (function(file) {
                fs.stat(file, function(err, stats) {
                    ++checked;
                    if (stats.mtime.getTime() > newest.mtime.getTime()) {
                        newest = { file : file, mtime : stats.mtime };
                    }
                    if (checked == files.length) {
                        callback(newest);
                    }
                });
            })(dir + file);
        }
    });
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

