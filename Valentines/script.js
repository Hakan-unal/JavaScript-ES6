const button = document.querySelector("#button");
const input = document.querySelector("#input");
const output = document.querySelector("#output");

button.addEventListener("click", () => {
    input.value = "";
    output.value = "Ben de Seni :))";
});

console.log(button, input, output);