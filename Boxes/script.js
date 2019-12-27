let value, color;

color = (event) => {

    if (event.target.classList[0] == "box") {
        console.log("bir");
        switch (event.target.id) {
            case "1": event.target.id = "color";
                break;
        }

    }
}

value = document.querySelector("#contain");
value.addEventListener("mouseover", color);
