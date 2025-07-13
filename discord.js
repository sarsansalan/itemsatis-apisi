const { Client, Intents } = require('discord.js');
const fetch = require('node-fetch'); // Eğer node-fetch yoksa `npm install node-fetch@2` yap

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const TOKEN = 'MTM5MzE0MTk2NDY0MzIzNzkxOA.Gz0zWg.wpwNp7daMuJenkzqMNFlTXWV76pUvLi-kk-0Yw'; // Senin token

client.on('ready', () => {
  console.log(`Bot aktif! Kullanıcı: ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return; // Botların mesajını yoksay

  // Komut formatı: !login kullanici sifre
  if (message.content.startsWith('!login')) {
    const args = message.content.split(' ');

    if (args.length !== 3) {
      return message.reply('Kullanım: !login kullanici sifre');
    }

    const kullanici = args[1];
    const sifre = args[2];

    try {
      const response = await fetch('https://itemsatis-apisi.vercel.app/api/itemsatis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ kullanici, sifre }),
      });

      const data = await response.json();

      if (data.success) {
        message.reply(`Giriş başarılı! Hoşgeldin ${data.user.kullanici}`);
      } else {
        message.reply(`Giriş başarısız: ${data.message}`);
      }
    } catch (error) {
      console.error('API hatası:', error);
      message.reply('API ile iletişimde hata oluştu.');
    }
  }
});

client.login(TOKEN);
