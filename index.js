const Discord = require('discord.js');
const client = new Discord.Client();
var randomNum;
var youtubeLink;
var link;
var hasTonn;

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
    userMsg = message.content.toLowerCase();
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
    youtubeLink = userMsg.indexOf("youtu");
    link = userMsg.indexof("http")
    if(youtubeLink != -1 && link != -1)
        message.channel.send("Live demo?")

    if(userMsg.startsWith('what'))
        message.channel.send("Am I talking to myself?")
})

client.login(process.env.token)
