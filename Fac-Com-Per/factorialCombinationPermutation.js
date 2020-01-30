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

const Combination = (val1, val2) => {
    console.log("Combination gelince tamamla");
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
    Combination();
});

permutationButton.addEventListener("click", () => {
    Permutation();
});