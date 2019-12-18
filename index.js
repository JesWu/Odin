const Discord = require('discord.js');
const auth = require('./token.json');
const client = new Discord.Client();

client.once('ready', () => {
    console.log("Ready!");
})

client.login(auth.token);

client.on('message', message => {
    // console.log(message.content);
    msg = message.content.toLowerCase();
    if(msg.includes("bok")){
        message.channel.send('SQUUUUUUUUUUUUUUUUUUUUUUUWAAAAK!')
    }
});