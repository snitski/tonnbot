const Discord = require('discord.js');
const client = new Discord.Client();
var randomNum;


client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
    userMsg = message.content;
    if (message.author.id != '645702626104705031'){
        randomNum = Math.random() * 100;
        if (randomNum < 5){
            message.channel.send("That's a note!");
            //message.channel.send(randomNum);
        }
    }
})

client.login('NjQ1NzAyNjI2MTA0NzA1MDMx.XdGbsQ.y0O5626xMC0NFAzlvFGYDBKqXXM')