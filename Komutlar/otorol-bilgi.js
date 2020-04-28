const Discord = require('discord.js');
const loglar = require('../ayarlar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const eğlence = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`Beyefendi | OtoRol Sistemi`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
.addField("<a:elmas:641367440315514902>   | b!otorol-ayarla : Kullanım :b!otorol-ayarla @rol #kanal ","OtoRol Ayarlar.")
.addField("<a:elmas:641367440315514902>   | b!otorolmesajkapat : Kullanım :b!otorolmesajkapat","OtoRol Mesaj Kapatır.")
.addField("<a:elmas:641367440315514902>   | b!otorolsıfırla : Kullanım :b!otorolsıfırla","OtoRol Sıfırlar.")
return message.channel.sendEmbed(eğlence);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'otorol',
  description: 'Ne bilem kendin yaz işte ',
  usage: 'kullanıcı'
};
32

   