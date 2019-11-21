const Discord = require('discord.js');
const client = new Discord.Client();
var randomNum;
var youtubeLink;
var link;
var tonnID = '645702626104705031';
var fredboatID = '184405311681986560';
var mee6ID = '159985870458322944';

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {

    userMsg = message.content.toLowerCase();
    youtubeLink = userMsg.indexOf("youtu");
    link = userMsg.indexOf("http")

    if(youtubeLink != -1 && link != -1)
        message.channel.send("Live demo?")
    else if(userMsg.startsWith('what') && userMsg.length == 4)
        message.channel.send("Am I talking to myself?")
    else if (message.author.id != tonnID && message.author.id != fredboatID && message.author.id != mee6ID){
        randomNum = Math.random() * 100;
        if (randomNum < 3){
            randomNum = Math.random() * 100;
            if(randomNum >= 33)
                message.channel.send("That's a note!");
            else if(randomNum < 33 && randomNum >= 66)
                message.channel.send("That's the smartest thing you've said all year!")
            else if(randomNum < 66)
                message.channel.send("You're brilliant!")            
        }
    }
})

client.login(process.env.token)
