const x = document.querySelector("#x");
const y = document.querySelector("#y");
const div = document.querySelector("#div");
const star = document.querySelector("#star");

document.body.addEventListener("mousemove", (event) => {
    x.value = event.clientX;
    y.value = event.clientY;
    div.style.width = `${event.clientX}px`;
    div.style.height = `${event.clientY}px`;
    star.style.marginLeft = `${event.clientX}px`;
    star.style.marginTop = `${event.clientY}px`;

});