let input, output, factorialButton, combinationButton, permutationButton;

input = window.document.querySelector("#input");
output = window.document.querySelector("#output");
factorialButton = window.document.querySelector("#factorial");
combinationButton = window.document.querySelector("#combination");
permutationButton = window.document.querySelector("#permutation");

const Factorial = (val) => {
    let total = 1;
    for (let i = 1; i <= val; i++) {
        total *= i;
    }
    return total;
};

const Combination = (n, r) => {
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
        return total;
    }
    else{
        alert("Invalid Value");I
    }
};

const Permutation = (val1, val2) => {
    console.log("Permutation gelince tamamla");
};

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

combinationButton.addEventListener("click", () => {
    let val1, val2, array, sum;
    array = input.value.split(" ");
    val1 = Number(array[0]);
    val2 = Number(array[1]);
    sum = Combination(val1, val2);
    output.value = sum;
});

permutationButton.addEventListener("click", () => {
    Permutation();
});