let value, color;
color = () => {

    console.log("merhaba");
}

value = document.querySelector("#contain");
value.addEventListener("mouseover", color);
console.log(value);