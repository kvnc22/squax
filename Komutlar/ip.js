const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (bot, message, params) => {
   const embed = new Discord.RichEmbed()
   .setColor("RANDOM")
   .setAuthor(message.guild.name, message.guild.userURL)
   .setThumbnail(message.guild.iconURL)
   .addField('LifeTürk :flag_tr:','*Geliştirilmiş skyblockun tek adresi!*')
   .addField('IP ','`play.lifeturk.net`')
   .addField('IP ','`oyna.lifeturk.net`')
   .addField('IP ','`mc.lifeturk.net`')
   .setFooter(`${message.author.tag} tarafından istendi`, message.author.avatarURL)
   .setTimestamp()
   message.channel.send({embed});
   message.react('✓');
 };

 exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: ['ip'],
   permLevel: 2
 };

 exports.help = {
   name: 'mcip',
   description: 'LifeTurk Sunucu bilgilerini gösterir',
   usage: 'mcbilgi'
 };