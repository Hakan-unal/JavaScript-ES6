let input, output, factorialButton, combinationButton, permutationButton;
//html dökümanı üzerindeki gerekli yerler yakalandı
input = window.document.querySelector("#input");
output = window.document.querySelector("#output");
factorialButton = window.document.querySelector("#factorial");
combinationButton = window.document.querySelector("#combination");
permutationButton = window.document.querySelector("#permutation");

const Factorial = (val) => {
    // Factorial fonksiyonu içerisine gönderilen val parametresi üzerinden aşağıdaki fonksiyon çalışır
    // Matematiksel olarak faktöriyel formülünün koda dökülmüş hali aşağıda
    let total = 1;
    for (let i = 1; i <= val; i++) {
        total *= i;
    }
    // fonksiyonun çağırıldığı yere total değişkeni return edilir
    return total;
};

const Combination = (n, r) => {
    // Combination fonksiyonu içerisine gönderilen val parametresi üzerinden aşağıdaki fonksiyon çalışır
    // Matematiksel olarak kombinasyon formülünün koda dökülmüş hali aşağıda

    // n r'den büyükse if içerisindeki koşul sağlanır r büyükse girilen değerlerde hata vardır çünkü 
    // kombinasyon için gerekli koşullar sağlanmamış olur
    if (n >= r) {
        let total, val1, val2, val3;
        val1 = 1;
        val2 = 1;
        val3 = 1;
        for (let i = 1; i <= n; i++) {
            val1 *= i;
        }
        for (let i = 1; i <= r; i++) {
            val2 *= i;
        }
        for (let i = 1; i <= n - r; i++) {
            val3 *= i;
        }
        total = val1 / (val2 * val3);
        // fonksiyonun çağırıldığı yere total değişkeni return edilir
        return total;
    }
    else {
        alert("Invalid Value");
    }
};

const Permutation = (n, r) => {
    // Permutation fonksiyonu içerisine gönderilen val parametresi üzerinden aşağıdaki fonksiyon çalışır
    // Matematiksel olarak permütasyon formülünün koda dökülmüş hali aşağıda

    // n r'den büyükse if içerisindeki koşul sağlanır r büyükse girilen değerlerde hata vardır çünkü 
    // kombinasyon için gerekli koşullar sağlanmamış olur
    if (n >= r) {
        let total;
        total = 1;
        for (let i = 0; i < r; i++) {
            total = total * (n - i);
        }
        // fonksiyonun çağırıldığı yere total değişkeni return edilir
        return total;
    }
    else {
        alert("Invalid Value");
    }
};

// factorialButton değişkenine click event'i gerçekleştiğinde aşağıdaki kod bloğu çalışır
factorialButton.addEventListener("click", () => {
    let val, sum;
    val = Number(input.value);
    if (val >= 0) {
        sum = Factorial(val);
        input.value = "";
        output.value = sum;
    } else {
        alert("Invalid value");
    }
});

// combinationButton değişkenine click event'i gerçekleştiğinde aşağıdaki kod bloğu çalışır
combinationButton.addEventListener("click", () => {
    let val1, val2, array, sum;
    array = input.value.split(" ");
    val1 = Number(array[0]);
    val2 = Number(array[1]);
    sum = Combination(val1, val2);
    output.value = sum;
    input.value = "";
});

// permutationButton değişkenine click event'i gerçekleştiğinde aşağıdaki kod bloğu çalışır
permutationButton.addEventListener("click", () => {
    let val1, val2, array, sum;
    array = input.value.split(" ");
    val1 = Number(array[0]);
    val2 = Number(array[1]);
    sum = Permutation(val1, val2);
    output.value = sum;
    input.value = "";
});