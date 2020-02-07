let inputX, inputY, button, output;

inputX = document.querySelector("#inputX");
inputY = document.querySelector("#inputY");
button = document.querySelector("#button");
output = document.querySelector("#output");


const Calculate = (val1, val2) => {
    let result = 0;
    result += Math.pow(val1, 2);
    result += Math.pow(val2, 2);
    return Math.sqrt(result);
}


button.addEventListener("click", () => {
    let x, y;
    x = parseInt(inputX.value);
    y = parseInt(inputY.value);

    if (isNaN(x) || isNaN(y)) {
        alert("Invalid value");
    } else {
        let result;
        result = Calculate(x, y);
        output.value = result.toPrecision(4);
    }
});