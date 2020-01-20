let month, day, button, burcBulma;

// Html dökümanı üzerindeki gerekli yerler yakalandı
month = document.querySelector("#month");
day = document.querySelector("#day");
button = document.querySelector("#button");
//Fonksiyona iki parametre gönderildi 

burcBulma = (m, d) => {
    // fonksiyona gönderilen m parametresine göre switch case bloğu yazıldı
    switch (m) {
        case 1:
            //if bloklarının hepsi d parametresine göre belirlendi
            if (d <= 21) return "oğlak";
            else return "kova";
            break;
        case 2:
            if (d <= 19) return "kova";
            else return "balık";
            break;
        case 3:
            if (d <= 20) return "balık";
            else return "koç";
            break;
        case 4:
            if (d <= 20) return "koç";
            else return "boğa";
            break;
        case 5:
            if (d <= 21) return "boğa";
            else return "ikizler";
            break;
        case 6:
            if (d <= 22) return "ikizler";
            else return "yengeç";
            break;
        case 7:
            if (d <= 22) return "yengeç";
            else return "aslan";
            break;
        case 8:
            if (d <= 22) return "aslan";
            else return "başak";
            break;
        case 9:
            if (d <= 22) return "başak";
            else return "terazi";
            break;
        case 10:
            if (d <= 22) return "terazi";
            else return "akrep";
            break;
        case 11:
            if (d <= 21) return "akrep";
            else return "yay";
            break;
        case 12:
            if (d <= 21) return "yay";
            else return "oğlak";
            break;
        default: console.log("fault");
    }
}
// button değişkenine click event'i gerçekleştiğinde aşağıdaki fonksiyon çalışıyor
button.addEventListener("click", () => {
    let mo, da, result;
    // month ve day değişkenlerinin value'si mo ve da değşkenlerine number tipini dönüştürülerecek tanımlandı
    mo = Number(month.value);
    da = Number(day.value);
    // result değişkenine fonksiyondan dönen değer tanımlandı
    result = burcBulma(mo, da);
    // console'a result değişkeni gösterildi
    console.log(result);
});