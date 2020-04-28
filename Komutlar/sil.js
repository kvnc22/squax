
const Discord = require("discord.js");

exports.run = (client, message, args, member) => {
  var sayi = args.slice(0).join(" ");
  if (!sayi)
    return message.channel.send(
      " <a:elmas:641367440315514902>  **Kaç Adet Mesaj Sileceğimi Yazar Mısın?\nÖrnek : !temizle 20 .**"
    );
  message.channel.bulkDelete(sayi);
  message.channel
    .send(
      `<a:sabitleme:641366302589452288>  ** ${sayi}  Adet Mesaj Başarı İle Silindi!**`
    )
    .then(msg => msg.delete(3000));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["temizle", "tz"],
  permLevel: 3
};

exports.help = {
  name: "sil",
  description: "Söylediğiniz Mesaj Kadar Temizler",
  usage: "temizle <sayı>"
};