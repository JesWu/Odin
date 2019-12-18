const fetch = require("node-fetch");
const madlibsUrl = "http://madlibz.herokuapp.com/api/random";

module.exports = {
	name: 'Madlibs',
	description: 'Madlibs!',
	execute(message, args) {
        message.channel.send("IT'S MADLIBS TIMES!!!");
        let madlibData;
        fetch(madlibsUrl)
        .then(response => {
            return response.json();
        })
        .then(data => {
            madlibData = data;
        })
        .catch(err => {
            console.log("Failed to fetch data!");
        })
	},
};