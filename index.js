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
            randomNum = Math.random() * 100;
            if(randomNum > 75)
                message.channel.send("That's a note!");
            else
                message.channel.send("That's the smartest thing you've said all year!")            
        }
    }
})

client.login(process.env.token)
