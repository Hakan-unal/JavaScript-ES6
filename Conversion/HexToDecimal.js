let fonkisyon, hextodecimal;
// Html dökümanı üzerindeki gerekli yer yakalandı
hextodecimal = document.querySelector("#hextodecimal");

fonkisyon = (number) => {
    // fonksiyona gönderilen number parametresi üzerinden aşağıdaki işlemler yapıldı
    let sum, len;
    sum = 0;
    len = number.length;
    for (let i = 0; i < len; i++) {
        let val;
        // Fonksiyona gönderilen number stringi üzerindeki elemanlar teker teker
        // alınarak aşağıdaki matematiksel işlemler gerçekleştirilir
        // Fonksiyona gelen değer string bunu unutma kullanıcı istediği kadar sayı girebilir
        val = Number(number[i]);
        sum += Math.pow(8, len - i - 1) * val;
    }
    // fonksiyonunun çağırıldğı yere sum değişkeni return edildi
    return sum;
}
// hextodecimal değişkenine click event'i gerçekleştiğinde aşağıdaki fonksiyon çalışıyor
hextodecimal.addEventListener("click", () => {
    let sum;
    // fonksiyonan dönen değer sum değişkeni içeriisne tanımlandı
    sum = fonkisyon(input.value);
    // output değişjeninin value'sine sum değişkeni tanımlandı
    output.value = sum;
    // input değişkeninin valuesi temizlendi
    input.value = "";
});
