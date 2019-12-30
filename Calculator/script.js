let result, val, inputBox, addButon, subButon, multipyleButon, divisionButon, deleteAll;

deleteAll = document.querySelector("#delete");
result = document.querySelector(".result");
inputBox = document.querySelector("#input");
addButon = document.querySelector(".first");
subButon = document.querySelector(".second");
multipyleButon = document.querySelector(".third");
divisionButon = document.querySelector(".fourth");
val = 0;

class Calculate {

    static add() {
        val += Number(inputBox.value);
        result.innerText = val;
        inputBox.value="";

    }

    static sub() {
        val -= Number(inputBox.value);
        result.innerText = val;
        inputBox.value="";

    }

    static multiply() {
        val *= Number(inputBox.value);
        result.innerText = val;
        inputBox.value="";

    }

    static division() {
        val /= Number(inputBox.value);
        result.innerText = val;
        inputBox.value="";

    }
    static deleteButon() {
        inputBox.value="";
        val = 0;
        result.innerText = "";

    }
}


events = () => {
    addButon.addEventListener("click", Calculate.add);
    subButon.addEventListener("click", Calculate.sub);
    multipyleButon.addEventListener("click", Calculate.multiply);
    divisionButon.addEventListener("click", Calculate.division);
    deleteAll.addEventListener("click", Calculate.deleteButon);
}

events();