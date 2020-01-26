let decimaltobinary, input, output, fonksiyon;

// html dökümanı üzeridneki gerekli yerler yakalandı
decimaltobinary = document.querySelector("#decimaltobinary");
input = document.querySelector("#input");
output = document.querySelector("#output");

fonksiyon = (number) => {
    // fonksiyona gönderielen number poarametresi üzerinden aşağıdaki işlemler yapıldı
    // önce array class'ı içerisinden binary objesi yaratıldı çünkü reverse methodudunu 
    // kullanmaız gerekli ve bu yüzden bu class'a ihtiyaç duyduk
    let binary = new Array();
    while (number > 0) {
        // while içerisindeki koşul sağlandığı sürece binary array'i içerisine number değişkeninin 2 ye göre mod'u
        // alınıp array içerisine atılır
        binary.push(number % 2);
        // sayı 2'ye bölündüğü ve mod'u alındığı için bizde aşağıdaki işlemi yapıyoruz ki döngü doğru çalışabilsin
        number = Math.floor(number / 2);
    }
    // binary array'i ters çevrildiğinde girilen sayının binary halini içerisinde tutmuş oluyor çünkü yukarıdaki
    // fonksiyonda tersten yazılıyor sayı bu yüzden reverse methodunu kullanrak fonksiyonun çağırıldığı yere sonucu return ettik
    return binary.reverse();
}
// decimaltobinary değişkenine click event'i gerçekleştiğinde aşağıdaki fonksiyon çalışıyor
decimaltobinary.addEventListener("click", () => {
    let val, sum;
    val = Number(input.value);
    // input değişkeninin value'si number tipine çevirilip fonksiyon fonksiyonuna gönderildi orada dönen sonuç sum
    // değişkeni içerisine tanımlandı
    sum = fonksiyon(val);
    // sum değişkeni içarisinde bulunan array join methodu sayesinde içerisindeki elemanlar arasında virgün veya
    // boşluk olmayac şekilde ouyput değişkeninin valusine yazıldı
    output.value = sum.join("");
    // input değişkeninin valuesi temizlendi
    input.value = "";
});