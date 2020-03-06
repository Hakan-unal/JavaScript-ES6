const takvim = document.querySelector("#takvim");
const info = document.querySelector("#info");
const newYear = document.querySelector("#newYear");
let day;

let obj = new Date();
obj.setMonth(1);

const createTable = (val) => {
    if (day == 0) {
        day = 7;
    }
    for (let i = 0; i <= val; i++) {
        let target = `#element${i + day}`;
        document.querySelector(target).innerText = i;
    }
}



const findMonth = (obj) => {
    for (let i = 1; i <= 32; i++) {
        obj.setDate(i);
        let date = obj.getDate();
        if (date !== i) {
            createTable(i - 1);
            break;
        } else if (i == 1) {
            day = obj.getDay();
        }
    }
}

findMonth(obj);