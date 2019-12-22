let box1, roll, box2, box3, oddroll, evenroll;

box1 = document.querySelector("#box1");
box2 = document.querySelector("#box2");
box3 = document.querySelector("#box3");
oddroll = document.querySelector("#diceOdd");
evenroll = document.querySelector("#diceEven");

class Dice {

    static OddDisplay() {

        let value;
        value = Math.round(Math.random() * 5 + 1);
        box1.innerHTML = value;
        box1.style.background = "green";

        setTimeout(() => {
            box1.style.background = "white";

        }, 100);

        setTimeout(() => {
            box1.innerHTML = "";
        }, 5000);

    }
    static EvenDisplay() {
        let value2, value3;
        value2 = Math.round(Math.random() * 5 + 1);
        value3 = Math.round(Math.random() * 5 + 1);

        box2.innerHTML = value2;
        box2.style.background = "green";

        box3.innerHTML = value3;
        box3.style.background = "green";

        setTimeout(() => {
            box2.style.background = "white";
            box3.style.background = "white";


        }, 100);

        setTimeout(() => {
            box2.innerHTML = " ";
            box3.innerHTML = " ";

        }, 5000);

    }
}


oddroll.addEventListener("click", Dice.OddDisplay);
evenroll.addEventListener("click", Dice.EvenDisplay)