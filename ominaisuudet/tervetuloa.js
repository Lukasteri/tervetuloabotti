module.exports = async (client) =>{

const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js")
const config = require('../config.json');

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.get(config['tervetuloa-kannu']);

    let tervetuloa = new MessageEmbed()
    .setTitle("Tervetuloa!")
    .setColor("#000000")
    .setDescription(`<@${member.id}> liittyi yhteisöön, tervetuloa! Yhteisössämme on jo **` + member.guild.memberCount + ' ** jäsentä!')
    .setThumbnail(member.user.displayAvatarURL())
    .setFooter('Tervetuloa Botti - Discord.me/patemodding', 'https://i.imgur.com/x1VLapL.png');


    channel.send(tervetuloa)
})


}