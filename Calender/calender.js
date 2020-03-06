const takvim = document.querySelector("#takvim");
const info = document.querySelector("#info");
const newYear = document.querySelector("#newYear");
const month = document.querySelector("#month");

let day;

let obj = new Date();


const createTable = (val) => {
    if (day == 0) {
        day = 7;
    }
    for (let i = 0; i <= val; i++) {
        let target = `#element${i + day}`;
        document.querySelector(target).innerText = i;
    }
}

const findDay = (obj) => {
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


const findMonth = () => {
    let value = obj.getMonth();
    console.log(value);
    switch (value) {
        case 0: month.innerText = "January"; break;
        case 1: month.innerText = "February"; break;
        case 2: month.innerText = "March"; break;
        case 3: month.innerText = "April"; break;
        case 4: month.innerText = "May"; break;
        case 5: month.innerText = "June"; break;
        case 6: month.innerText = "July"; break;
        case 7: month.innerText = "August"; break;
        case 8: month.innerText = "September"; break;
        case 9: month.innerText = "October"; break;
        case 10: month.innerText = "November"; break;
        case 11: month.innerText = "December"; break;
        default: month.innerText = "Invalid Month"; break;
    }
}
findMonth();

findDay(obj);


