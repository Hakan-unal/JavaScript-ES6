let month, day, button, burcBulma;

month = document.querySelector("#month");
day = document.querySelector("#day");
button = document.querySelector("#button");


burcBulma = (m, d) => {
    switch (m) {
        case 1:
            if (d <= 21) return "oğlak";
            else return "kova";
            break;
        case 2:
            if (d <= 19) return "kova";
            else return "balık";
            break;
        case 3:
            if (d <= 20) return "balık";
            else return "koç";
            break;
        case 4:
            if (d <= 20) return "koç";
            else return "boğa";
            break;
        case 5:
            if (d <= 21) return "boğa";
            else return "ikizler";
            break;
        case 6:
            if (d <= 22) return "ikizler";
            else return "yengeç";
            break;
        case 7:
            if (d <= 22) return "yengeç";
            else return "aslan";
            break;
        case 8:
            if (d <= 22) return "aslan";
            else return "başak";
            break;
        case 9:
            if (d <= 22) return "başak";
            else return "terazi";
            break;
        case 10:
            if (d <= 22) return "terazi";
            else return "akrep";
            break;
        case 11:
            if (d <= 21) return "akrep";
            else return "yay";
            break;
        case 12:
            if (d <= 21) return "yay";
            else return "oğlak";
            break;
    }

}


button.addEventListener("click", () => {
    let mo, da, result;
    mo = Number(month.value);
    da = Number(day.value);
    result = burcBulma(mo, da);
    console.log(result);
});