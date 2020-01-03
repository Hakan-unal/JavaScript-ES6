let sag, sol, fonk1, fonk2, count;

count = 0;
sag = document.getElementsByClassName("r");
sol = document.getElementsByClassName("l");

fonk1 = () => {

    for (let i = 0; i < sag.length; i++) {
        sag[i].setAttribute("id", "l");
    }
    for (let i = 0; i < sol.length; i++) {
        sol[i].setAttribute("id", "r");
    }
}

fonk2 = () => {

    for (let i = 0; i < sag.length; i++) {
        sag[i].setAttribute("id", "r");
    }
    for (let i = 0; i < sol.length; i++) {
        sol[i].setAttribute("id", "l");
    }
}

setInterval(() => {
    fonk1();
}, 1000);

setInterval(() => {
    fonk2();
}, 2000);

