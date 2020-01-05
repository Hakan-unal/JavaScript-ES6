let result, val, value, inputBox, addButon, subButon, multipyleButon, divisionButon, deleteAll;

// Html dökümanı üzerindeki gerekli elementler yakalandı
deleteAll = document.querySelector("#delete");
result = document.querySelector(".result");
inputBox = document.querySelector("#input");
addButon = document.querySelector(".first");
subButon = document.querySelector(".second");
multipyleButon = document.querySelector(".third");
divisionButon = document.querySelector(".fourth");

// Calculate class'ı oluşturuldu direk fonksiyonda yazılabilirdi ama daha düzgün duruyor bu şekilde
class Calculate {
    // Class içerisine add methodu tanımlandı ve inputBox değişkeni içerisine yazılan input val değişkeni içerisine tanımlandı
    static add() {
        val += Number(inputBox.value);
        result.innerText = val;
        inputBox.value = "";

    }
    // Class içerisine sub methodu tanımlandı ve inputBox değişkeni içerisine yazılan 
    // input val değişkeni içerisine tanımlandı

    static sub() {
        val -= Number(inputBox.value);
        result.innerText = val;
        inputBox.value = "";

    }
    // Class içerisine multiply methodu tanımlandı ve inputBox değişkeni içerisine yazılan 
    // input val değişkeni içerisine tanımlandı

    static multiply() {
        value *= Number(inputBox.value);
        result.innerText = value;
        inputBox.value = "";

    }
    // Class içerisine division methodu tanımlandı ve inputBox değişkeni içerisine 
    // yazılan input val değişkeni içerisine tanımlandı
    // !!!!!
    // !!!!!
    // Bu kısım hatalı (division) 
    static division() {
        let sum;
        sum = Number(inputBox.value);
        sum /= value;
        result.innerText = sum ;
        value = sum;
        inputBox.value = "";
    }
    // Bu method çağırıldığında inpuBox'ı ve result değişkeni içerisindeki değerleri 
    //0layıp val değişkeni içerisinede 0'ı tanımlıyor
    static deleteButon() {
        inputBox.value = "";
        val = 0;
        value = 1;
        result.innerText = "";

    }
}

// events fonksiyonu içerisine aşağıdaki eventler tanımlandı ve fonksiyonun çağırılmasıyla 
// birlikte aktif hale gelecek bu kullanım tamamen kod düzeni açısından yoksa işlevsel bir 
// fark olduğunu düşünmüyorum bu şekilde  daha düzenli  

events = () => {
    value = 0;
    addButon.addEventListener("click", () => {
        Calculate.add();
    });
    subButon.addEventListener("click", () => {
        Calculate.sub();
    });

    value = 1;
    multipyleButon.addEventListener("click", () => {
        Calculate.multiply();
    });
    divisionButon.addEventListener("click", () => {
        Calculate.division();
    });
    deleteAll.addEventListener("click", Calculate.deleteButon);
}

// events fonksiyonu çağırıldı
events();