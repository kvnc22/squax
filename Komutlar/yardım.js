const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const yardım = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setAuthor(`LIFETURK`, client.user.avatarURL) 
      .setDescription('**[website](https://lifeturk.denince.biz) | [discord](https://discord.gg/BQ3dptx)**')
.setThumbnail(client.user.avatarURL)
      .addField('** Sunucu **', '`ip`, `sunucudurum`, `yetkililer`')
      .addField('** Kullanıcı **', '`davet`, `rol-bilgi`, `avatar`')
      .addField('** Sahip **', '`reboot`, `s`')
    .setFooter(``, client.user.avatarURL)
    .setTimestamp()
    message.channel.send(yardım).catch()

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['y'],
    permLevel: 0
};

exports.help = {
    name: 'yardım',
      category: '',
      description: 'LIFETURK',
};