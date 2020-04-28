const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
  const db = require('quick.db')

  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
         const modlogs = db.fetch(`modlogs_${message.guild.id}`)
  if (!modlogs) return message.reply('❌ Mod-Log Kanalı Ayarlı Değil! \`n!modlog <#kanal>\`');
    if (message.mentions.users.size < 1) return message.reply('❌ Sunucudan Atmak İstediğin Kişiyi Etiketlemelisin!').catch(console.error);

  if (reason.length < 1) return message.reply(' ❌ Sunucudan Atma Sebebi Yazmalısın!');
  if (!message.guild.member(user).bannable) return message.reply('❌ Yetkilileri Suncudan Atamam!');
 message.guild.ban(user, 2);
message.channel.send(`**✅ İşlem Başarılı!**`)
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setTitle('》Serverden Atma《')
    .addField('🔸 Atılan Kullanıcı:', `${user.username},  (${user.id})`)
    .addField('🔸 Atan Yetkili:', `${message.author.username},  ${message.author.id}`)
    .addField('🔸 Atılma Sebepi', reason);
  return message.guild.channels.get(modlogs).send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["at"],
  permLevel: 2
};

exports.help = {
  name: 'kick',
  description: 'İstediğiniz kişiyi sunucudan atar',
  usage: 'kick [kullanıcı] [sebep]'
};
 