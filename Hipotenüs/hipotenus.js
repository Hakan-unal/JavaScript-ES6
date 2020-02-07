let inputX, inputY, button, output;

// Html dökümanı üzerindeki gerekli etiketler yakalandı
inputX = document.querySelector("#inputX");
inputY = document.querySelector("#inputY");
button = document.querySelector("#button");
output = document.querySelector("#output");

// Fonksiyona gönderilen 2 parametre üzeridnen aşağıdaki fonksiyon çalıştı ve dik 
// üçgende hipotenüs hesaplama formülü kullanıldı
const Calculate = (val1, val2) => {
    let result = 0;
    result += Math.pow(val1, 2);
    result += Math.pow(val2, 2);
    // Fonksiyonun çağırıldığı yere result değişkeni içerisinde yer alan değerin
    // karakökü gönderildi
    return Math.sqrt(result);
}

// button değişkenine click event'i gerçekleştiğinde aşağıdaki fonksiyon çalışır
button.addEventListener("click", () => {
    let x, y;
    x = parseInt(inputX.value);
    y = parseInt(inputY.value);
    // Eğer x veya y değişkenlerinin herhangi birisi number tipi değilse if içerisindeki
    // koşul sağlanır ve alert fonksiyonu ile ekrana mesaj bastırılır
    if (isNaN(x) || isNaN(y)) {
        alert("Invalid value");
    } else {
        let result;
        // Calculate fonksiyonuna x ve y değişkenleri gönderildi fonksiyondan dönen
        // sonuç result değişkenine atandı ve result ouyput değişkeninin value'sine
        // atandı oradaki toPrecision() methodu sonuçtaki küsüratı düzenlemek için
        result = Calculate(x, y);
        output.value = result.toPrecision(4);
    }
});