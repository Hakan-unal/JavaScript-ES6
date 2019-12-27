let value, color;

color = (event) => {

    if (event.target.classList[0] == "box") {
        switch (event.target.id) {
            case "1": event.target.id = "color";
                break;
            case "2": event.target.id = "color";
                break;
            case "3": event.target.id = "color";
                break;
            case "4": event.target.id = "color";
                break;
            case "5": event.target.id = "color";
                break;
            case "6": event.target.id = "color";
                break;
            case "7": event.target.id = "color";
                break;
            case "8": event.target.id = "color";
                break;
            case "9": event.target.id = "color";
                break;
            case "color": event.target.id = "1";
                break;
            default: event.target.id = "box";

        }

    }
}

value = document.querySelector("#contain");
value.addEventListener("mouseover", color);
