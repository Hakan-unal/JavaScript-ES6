let fonki, binarytodecimal;
// Html dökümanı üzerindeki gerekli yer yakalandı
binarytodecimal = document.querySelector("#binarytodecimal");

fonki = (number) => {
    // fonkisyona gönderilen number parametresi üzerinden aşağıdaki işlemler yapıldı
    let sum, len;
    sum = 0;
    len = number.length;
    for (let i = 0; i < len; i++) {
        let val;
        // Fonksiyona gönderilen number stringi üzerindeki elemanlar teker teker
        // alınarak aşağıdaki matematiksel işlemler gerçekleştirilir
        // Fonksiyona gelen değer string bunu unutma kullanıcı istediği kadar sayı girebilir
        val = Number(number[i]);
        sum += Math.pow(2, len - i - 1) * val;
    }
    // fonksiyonunun çağırıldğı yere sum değişkeni return edildi
    return sum;
}
// buttton değişkenine click event'i gerçekleştiğinde aşağıdaki fonksiyon çalışıyor
binarytodecimal.addEventListener("click", () => {
    let sum;
    // fonksiyonan dönen değer sum değişkeni içeriisne tanımlandı
    sum = fonki(input.value);
    // output değişjeninin value'sine sum değişkeni tanımlandı
    output.value = sum;
    // input değişkeninin valuesi temizlendi
    input.value = "";
});
