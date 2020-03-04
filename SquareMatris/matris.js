const container = document.querySelector("#container");
const input = document.querySelector("#input");
const createMatrisButton = document.querySelector("#createMatrisButton");

const MakeMatrisTable = (val) => {
    for (let i = 0; i < val; i++) {

        let row = document.createElement("div");
        row.setAttribute("id", `row${i}`);
        row.setAttribute("class", "row my-3");

        for (let j = 0; j < val; j++) {

            let input = document.createElement("input");
            input.setAttribute("class", "input");
            input.setAttribute("type", "number");
            let col = document.createElement("div");
            col.setAttribute("id", `col${i}${j}`);
            col.setAttribute("class", "col");
            col.appendChild(input);
            row.appendChild(col);

            if (j == val - 1) {
                container.appendChild(row);
            }
        }
    }
}

createMatrisButton.addEventListener("click", () => {
    container.innerHTML = "";
    let num = parseInt(input.value);
    MakeMatrisTable(num);
    input.value = "";
});