const users = [
  { kullanici: "xShain", sifre: "anan3131" },
  { kullanici: "yigityilmaz6706@gmail.com", sifre: "Cggnu5vT" },
  { kullanici: "basri_1853@hotmail.com", sifre: "green123voice" },
  { kullanici: "Ender32", sifre: "Arcelik_26" },
  { kullanici: "thefonest0", sifre: "147563289a" },
  { kullanici: "elmaspree", sifre: "furkan7234" },
  { kullanici: "realswich", sifre: "mehmet21" },
  { kullanici: "dogangunbatan13@gmail.com", sifre: "Prodogi1" },
  { kullanici: "mert1234m", sifre: "mert45600" },
  { kullanici: "yeat", sifre: "Yarenekin2004" },
  { kullanici: "RonnieLR", sifre: "M167220313" },
  { kullanici: "tamsen.1907@gmail.com", sifre: "bolero1289" },
  { kullanici: "selambebekof", sifre: "proturkey" },
  { kullanici: "ramazancetin", sifre: "4554103203" },
  { kullanici: "eraycicek415@gmail.com", sifre: "5wnAOVkcCxI" },
  { kullanici: "iscikanguru", sifre: "efe1213kl" },
  { kullanici: "pwefj", sifre: "151325Mert" },
  { kullanici: "ferytu", sifre: "Alican.1903" },
  { kullanici: "tahasilver", sifre: "taha2010" },
  { kullanici: "adoluer0", sifre: "Arda7119" },
  { kullanici: "ByHero", sifre: "amissa435339" },
  { kullanici: "kindteam520@hotmail.com", sifre: "O.520520.o" },
  { kullanici: "kuzeyeymens41@gmail.c", sifre: "112233" }
];

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Sadece POST isteği desteklenir" });
  }

  const { kullanici, sifre } = req.body;

  if (!kullanici || !sifre) {
    return res.status(400).json({ error: "kullanici ve sifre gerekli" });
  }

  const found = users.find(
    (u) => u.kullanici === kullanici && u.sifre === sifre
  );

  if (found) {
    return res.status(200).json({ success: true, message: "Giriş başarılı" });
  } else {
    return res.status(401).json({ success: false, message: "Kullanıcı adı veya şifre hatalı" });
  }
}
