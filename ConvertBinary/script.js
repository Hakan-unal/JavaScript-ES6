let button, input, output, fonksiyon;

button = document.querySelector("#button");
input = document.querySelector("#input");
output = document.querySelector("#output");

fonksiyon = (number) => {
    let binary = new Array();
    while (number > 0) {
        binary.push(number % 2);
        number = Math.floor(number / 2);
    }
    
    return binary.reverse();
}

button.addEventListener("click", () => {
    let val, sum;
    val = Number(input.value);
    sum = fonksiyon(val);
    output.value = sum.join("");
    input.value = "";
});