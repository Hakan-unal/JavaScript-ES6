const container = document.querySelector("#container");
const input = document.querySelector("#input");
const button = document.querySelector("#button");


const MakeMatrisTable = (val) => {
    for (let i = 0; i < val; i++) {

        let row = document.createElement("div");
        row.setAttribute("id", `row${i}`);
        row.setAttribute("class", "row");

        for (let j = 0; j < val; j++) {
            let col = document.createElement("div");
            col.setAttribute("id", `col${i}${j}`);
            col.setAttribute("class", "col border");
            row.appendChild(col);
            if (j == val - 1) {
                container.appendChild(row);
            }
        }
    }
}



button.addEventListener("click", () => {
    let num = parseInt(input.value);
    MakeMatrisTable(num);
    console.log(container);
});
