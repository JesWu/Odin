const Discord = require('discord.js');
const auth = require('./token.json');
const fetch = require("node-fetch");

const client = new Discord.Client();
const madlibsUrl = "http://madlibz.herokuapp.com/api/random";


client.once('ready', () => {
    console.log("Discord Bot Odin is ready!");
})

client.login(auth.token);

client.on('message', message => {
    // console.log(message.content);
    msg = message.content.toLowerCase();
    if (msg == "!madlibs"){
        message.channel.send("IT'S MADLIBS TIMES!!!");
            fetch(madlibsUrl)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
            })
            .catch(err => {
                console.log("Failed to fetch data!");
            })
    }
});
