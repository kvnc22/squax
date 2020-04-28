const Discord = require('discord.js');

exports.run = function(client, message) {


 message.channel.send('**'+message.guild.name +'** Adlı Sunucunun Kurucusu; **'+ message.guild.owner.user.tag +'** Adlı Kullanıcıdır.');
};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['owner','kurucukim'],
  permLevel: 0 
};

exports.help = {
  name: 'kurucu', 
  description: '',
  usage: ''
};