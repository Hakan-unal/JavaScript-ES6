let sag, sol, fonk1, fonk2, count;

// html dökümanı üzerinde gerekli elementler yakalandı
sag = document.getElementsByClassName("r");
sol = document.getElementsByClassName("l");

fonk1 = () => {
    // sag olarak tanımlanan array'in uzunluğu kadar çalıştı döngü
    for (let i = 0; i < sag.length; i++) {
        // sag array'inin içerisindeki tüm elemanların id etiketlerine l eklendi
        sag[i].setAttribute("id", "l");
    }
    // sol olarak tanımlanan array'in uzunluğu kadar çalıştı döngü
    for (let i = 0; i < sol.length; i++) {
        // sol array'inin içerisindeki tüm elemanların id etiketlerine r eklendi
        sol[i].setAttribute("id", "r");
    }
}

fonk2 = () => {
    // sag olarak tanımlanan array'in uzunluğu kadar çalıştı döngü
    for (let i = 0; i < sag.length; i++) {
        // sag array'inin içerisindeki tüm elemanların id etiketlerine r eklendi
        sag[i].setAttribute("id", "r");
    }
    // sol olarak tanımlanan array'in uzunluğu kadar çalıştı döngü
    for (let i = 0; i < sol.length; i++) {
        // sol array'inin içerisindeki tüm elemanların id etiketlerine r eklendi
        sol[i].setAttribute("id", "l");
    }
}

setInterval(() => {
    fonk1();
}, 1000);

setInterval(() => {
    fonk2();
}, 2000);

