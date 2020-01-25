let fonki, buttton;
buttton = document.querySelector("#binarytodecimal");

fonki = (number) => {
    let sum, len;
    sum = 0;
    len = number.length;
    for (let i = 0; i < len; i++) {
        let val;
        val = Number(number[i]);
        sum += Math.pow(2, len - i - 1) * val;
    }
    return sum;
}

buttton.addEventListener("click", () => {
    let sum;
    sum = fonki(input.value);
    output.value = sum;
    input.value = "";
});
