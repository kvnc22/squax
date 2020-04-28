const Discord = require('discord.js');


exports.run = function(client, message, args) {
    let type = args.slice(0).join(' ');
    if (type.length < 1) return message.channel.send(
new Discord.RichEmbed()
.setDescription('  En Son Duyurular : \n\n **Beyefendi Bot Team Kuruluyor !**\n \n\n **Beyefendi Geliştiriceli Mutlu !**\n'));
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
const embed2 = new Discord.RichEmbed()
.setColor("RANDOM")

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sonduyuru',
  description: '',
  usage: 'yenilikler'
};