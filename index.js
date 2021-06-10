const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

const tervetuloa = require('./ominaisuudet/tervetuloa.js');


client.on('ready', () => {
    console.log('Tervetuloa Botti: Botti käynnistetty.');

    tervetuloa(client);

});



client.login(config.token);