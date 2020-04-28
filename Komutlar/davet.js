const Discord = require('discord.js')

exports.run = async (client, message, params) => {

const sup = new Discord.RichEmbed()
.setTitle(`**Botumuzu Eklemek İçin Link:**`)
.addField(`**Link:** \n`, `[Bana Tıkla!](https://discordapp.com/oauth2/authorize?client_id=646968415461834792&scope=bot&permissions=8)`)
.setColor("0x2488E7")
.setFooter(`Beyefendi | Tam Bir Aile Botu `, client.user.avatarURL)

message.channel.send(sup);

}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'ツ𝕾𝖚𝖗𝖕𝖗𝖎𝖘𝖊𝖑𝖔𝖛𝖊𝕿𝕽#0633',
  usage: 'kod1'
};