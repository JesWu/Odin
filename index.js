const fs = require('fs');
const Discord = require('discord.js');
const { token } = require('./auth.json');
const { prefix } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log("Discord Bot Odin is ready!");
})

client.login(token);

client.on('message', message => {
    // console.log(message.content);
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    msg = message.content.toLowerCase();
    if (!client.commands.has(command)) return;

    try {
        client.commands.get(command).execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('There was an error trying to execute that command!');
    }

    // if (msg.startsWith(`${prefix}madlibs`)){
    //     client.commands.get('madlibs').execute(message, args);
    // }
});
