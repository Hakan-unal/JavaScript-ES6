let box1, roll, box2, box3, oddroll, evenroll;

// html dökümanı üzerindeki gerekli yerler tanımlandı
box1 = document.querySelector("#box1");
box2 = document.querySelector("#box2");
box3 = document.querySelector("#box3");
oddroll = document.querySelector("#diceOdd");
evenroll = document.querySelector("#diceEven");

// dice class'ı tanımlandı bu classtan yaratılan objeden bu methotlar kullanılabilir 
// veya direk class üzerinden çağırılabilir çünkü static
class Dice {
    static OddDisplay() {

        let value;
        // value değişkenine 1 ile 6 arasında değer atandı 1 ve 6 dahil
        value = Math.round(Math.random() * 5 + 1);
        // box1 değişkeninin innerHtml sine value değişkeni atandı
        box1.innerHTML = value;
        // box1 değişkeninin arka plan rengi yeşil yapıldı
        box1.style.background = "green";

        setTimeout(() => {
            // box1 değişkeninin arka plan rengini beyaz yapar sadece 100ms için 
            // sonra çalışmayı durdurur ve tekrar çalışmaz
            box1.style.background = "white";

        }, 100);

        setTimeout(() => {
            // box1 değişkeninin inner'ini boşluğa eşitler 5000ms sonra ve tekrar çalışmaz
            box1.innerHTML = "";
        }, 5000);

    }
    static EvenDisplay() {
        let value2, value3;
        // value2 ve value3 değişkenlerine 1 ve 6 arasında bir değer atandı 1 ve 6 dahil
        value2 = Math.round(Math.random() * 5 + 1);
        value3 = Math.round(Math.random() * 5 + 1);
        // box2 değişkeninin innerHtml'sine value2 atandı
        box2.innerHTML = value2;
        // box2 değişkeninin arka plan rengi yeşil yapıldı
        box2.style.background = "green";
        // box3 değişkeninin innerHtml'sine value2 atandı
        box3.innerHTML = value3;
        // box2 değişkeninin arka plan rengi yeşil yapıldı
        box3.style.background = "green";


        // box2 ve box3 değişkeninin arka plan rengini beyaz yapar sadece 100ms için 
        // sonra çalışmayı durdurur ve tekrar çalışmaz
        setTimeout(() => {
            box2.style.background = "white";
            box3.style.background = "white";


        }, 100);

        setTimeout(() => {
            // box2 ve box3 değişkeninin inner'ini boşluğa eşitler 5000ms sonra ve tekrar çalışmaz

            box2.innerHTML = " ";
            box3.innerHTML = " ";

        }, 5000);

    }
}

// oddroll ve evenroll değişkenleri ile tanımlanan html elemanlarına click eventi gerçekleştiğinde
// Dice class'ı üzerindeki methotlardan ODdDisplay veya EvenDisplay methodunu çağırıyor
oddroll.addEventListener("click", Dice.OddDisplay);
evenroll.addEventListener("click", Dice.EvenDisplay)