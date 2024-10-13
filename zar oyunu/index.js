let rollCount = 0; // Zar döndürme sayacını başlat
let interval; // Interval değişkeni tanımlanıyor

function startRolling() {
  // Eğer interval(bir işlemin belirli aralıklarla tekrarlanması) zaten ayarlanmışsa, temizle
  if (interval) {
    clearInterval(interval);
  }

  rollCount = 0; // Sayaç sıfırla

  // Zar döndürme işlemini başlat
  interval = setInterval(function () {
    // 1. Zar atışı için rastgele sayı üret
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png
    let randomImageSource = "images/" + randomDiceImage; // images/dice1.png - dice6.png

    // 2. Zar atışını ekranda göster
    let image1 = document.querySelector(".img1");
    image1.setAttribute("src", randomImageSource);

    // 3. İkinci zar için rastgele sayı üret
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;
    let randomImageSource2 = "images/dice" + randomNumber2 + ".png";

    // 4. İkinci zar atışını ekranda göster
    document.querySelector(".img2").setAttribute("src", randomImageSource2);

    rollCount++; // Her atışta sayaç artar

    // 5 kez döndükten sonra durdur ve sonucu göster
    if (rollCount >= 5) {
      clearInterval(interval); // Zar döndürme işlemini durdur

      // Kazananı belirle ve sonucu göster
      if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🥇1. Oyuncu Kazandı!";
      } else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = "🥇2. Oyuncu Kazandı!";
      } else {
        document.querySelector("h1").innerHTML = "🏳Berabere!🏳";
      }
    }
  }, 500); // Her yarım saniyede bir zar döndür
}
