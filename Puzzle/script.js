let tablo, fonki;

fonki = (event) => {
    switch (event.target.id) {
        case "b1":
            document.getElementById("b1").style.background = "white";
            break;
        case "b2":
            document.getElementById("b2").style.background = "white";
            break;
        case "b3":
            document.getElementById("b3").style.background = "white";
            break;
        case "b4":
            document.getElementById("b4").style.background = "white";
            break;
        case "b5":
            document.getElementById("b5").style.background = "white";
            break;
        case "b6":
            document.getElementById("b6").style.background = "white";
            break;
        case "b7":
            document.getElementById("b7").style.background = "white";
            break;
        case "b8":
            document.getElementById("b8").style.background = "white";
            break;
        case "b9":
            document.getElementById("b9").style.background = "white";
            break;
        case "b10":
            document.getElementById("b10").style.background = "white";
            break;
        case "b11":
            document.getElementById("b11").style.background = "white";
            break;
        case "b12":
            document.getElementById("b12").style.background = "white";
            break;
        case "b13":
            document.getElementById("b13").style.background = "white";
            break;
        case "b14":
            document.getElementById("b14").style.background = "white";
            break;
        case "b15":
            document.getElementById("b15").style.background = "white";
            break;
        case "b16":
            document.getElementById("b16").style.background = "white";
            break;
        default: console.log("invalid value");
    }
}


tablo = document.querySelector("#contain");
tablo.addEventListener("click", (event) => {
    fonki(event);
});



