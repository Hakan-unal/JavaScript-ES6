let fonkisyon, hextodecimal;
hextodecimal = document.querySelector("#hextodecimal");

fonkisyon = (number) => {
    let sum, len;
    sum = 0;
    len = number.length;
    for (let i = 0; i < len; i++) {
        let val;
        val = Number(number[i]);
        sum += Math.pow(8, len - i - 1) * val;
    }
    return sum;
}
hextodecimal.addEventListener("click", () => {
    let sum;
    sum = fonkisyon(input.value);
    output.value = sum;
    input.value = "";
});
