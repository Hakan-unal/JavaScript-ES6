let decimaltohex, fonk;
// Html dökümanı üzerindeki gerekli yer yakalandı
decimaltohex = document.querySelector("#decimaltohex");
fonk = (number) => {
    // fonksiyona gönderilen number poarametresi üzerinden aşağıdaki işlemler yapıldı
    // önce array class'ı içerisinden hex objesi yaratıldı çünkü reverse methodudunu 
    // kullanmaız gerekli ve bu yüzden bu class'a ihtiyaç duyduk
    let hex = new Array();
    while (number > 0) {
        // while içerisindeki koşul sağlandığı sürece hex array'i içerisine number değişkeninin 8'e göre mod'u
        // alınıp array içerisine atılır
        hex.push(number % 8);
        // sayı 8'e bölündüğü ve mod'u alındığı için bizde aşağıdaki işlemi yapıyoruz ki döngü doğru çalışabilsin
        number = Math.floor(number / 8);
    }
    // hex array'i ters çevrildiğinde girilen sayının binary halini içerisinde tutmuş oluyor çünkü yukarıdaki
    // fonksiyonda tersten yazılıyor sayı bu yüzden reverse methodunu kullanrak fonksiyonun çağırıldığı yere sonucu return ettik
    return hex.reverse();
}
// decimaltohex değişkenine click event'i gerçekleştiğinde aşağıdaki fonksiyon çalışıyor
decimaltohex.addEventListener("click", () => {
    let val, sum;
    val = Number(input.value);
    // input değişkeninin value'si number tipine çevirilip fonksiyon fonksiyonuna gönderildi orada dönen sonuç sum
    // değişkeni içerisine tanımlandı
    sum = fonk(val);
    // sum değişkeni içarisinde bulunan array join methodu sayesinde içerisindeki elemanlar arasında virgün veya
    // boşluk olmayac şekilde ouyput değişkeninin valusine yazıldı
    output.value = sum.join("");
    // input değişkeninin valuesi temizlendi
    input.value = "";
});