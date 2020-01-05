let input, output, send, fonki;

input = document.querySelector("#box");
output = document.querySelector("#display");
send = document.querySelector("#send");

fonki = (val) => {
    let string = "";
    for (let i = 0; i < val; i++) {
        string += Math.round(Math.random() * 9);
    }
    return string;

}

send.addEventListener("click", () => {
    let val, password;
    val = Number(input.value);
    password = fonki(val);
    output.value = password;
});











