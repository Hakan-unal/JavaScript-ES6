let input, output, send, fonki;

// Html dökümanı üzerindeki gerekli etiketler yakalandı
input = document.querySelector("#box");
output = document.querySelector("#display");
send = document.querySelector("#send");


fonki = (val) => {
    // Fonksiyona val değişkeni gönderildi fonksiyon içerisinde 
    // String adıyla boş string değişkeni oluşturuldu
    let string;
    string = "";
    // Fonksiyona gönderilen val değişkeni kadar döngü çalıştı
    for (let i = 0; i < val; i++) {
        // 0-9 arasındaki sayılardan fonksiyon çalıştıkça bir random bir tanesi stringe eklendi
        string += Math.round(Math.random() * 9);
    }
    // Fonksiyonun çağırıldığı yere string değişkeni döndürüldü 
    return string;

}

// send değişkenine click event'i eklendi
send.addEventListener("click", () => {
    let val, password;
    // input değişkeni içeriisndeki value number tipine çevirilerek val değişkeni içerisine atandı
    val = Number(input.value);
    // fonki fonksiyonu içersine val değişkeni gönderildi ve fonksiyondan dönen değer password değişkeni içerisine atandı
    password = fonki(val);
    // output değişkeninin valuesine password değişkeni tanımlandı
    output.value = password;
    // input değişkeninin valuesi temilendi (güzel görünüm için fonksiyonel bir şey değil)
    input.value = "";
});











