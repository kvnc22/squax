const Discord = require('discord.js')
const fs = require('fs');
const db = require('quick.db');

exports.run = async (client, message, args) => { 
   if (message.author.id !== "424640284543025153") return message.channel.send("⚠ | Bu Komutu Sadece Yapımcılar Kullana Bilir!")

 const args0 = args[0];
  if(!args0) {
    message.channel.send(message.author.username + ", lütfen bir sunucu **id**'si yaz!")
  } else {
  
db.set(`premod_${args0}`, "aktif")
  message.channel.send(" Başarıyla premium aktif edildi.")
}
  }
    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['premium-ver'],
    permLevel: 4,
      
}

exports.help = {
    name: 'premiumver',
    description: '',
    usage: '',

}