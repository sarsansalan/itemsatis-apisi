const fetch = require("node-fetch");

client.on("messageCreate", async message => {
  if (message.content.startsWith("!login")) {
    const args = message.content.split(" ");
    const kullanici = args[1];
    const sifre = args[2];

    if (!kullanici || !sifre) {
      return message.reply("Kullanıcı adı ve şifre gir!");
    }

    try {
      const response = await fetch("https://itemsatis-apisi.vercel.app/api/itemsatis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kullanici, sifre })
      });

      const data = await response.json();

      if (data.success) {
        message.reply("Giriş başarılı!");
      } else {
        message.reply("Kullanıcı adı veya şifre hatalı!");
      }
    } catch (error) {
      console.error(error);
      message.reply("API'den veri alınamadı.");
    }
  }
});
