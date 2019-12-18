let container, photo, text, link, right_click, left_click, value;
value = 0;
container = [{ src: "img/bmw.jpg", h5: "bmw_116", href: "www.google.com" },
{ src: "img/honda.jpg", h5: "honda_116", href: "www.google.com" },
{ src: "img/mazda.jpg", h5: "mazda_116", href: "www.google.com" },
{ src: "img/skoda.jpg", h5: "skoda_116", href: "www.google.com" },
{ src: "img/volvo.jpg", h5: "volvo_116", href: "www.google.com" }
];
photo = document.querySelector(".card-img-top");
text = document.querySelector(".card-title");
link = document.querySelector(".card-link");
right_click = document.querySelector(".fa-arrow-circle-right");
left_click = document.querySelector(".fa-arrow-circle-left");

events();

function events() {
    left_click.addEventListener("click", leftClick);
    right_click.addEventListener("click", rightClick);
}

function show_slide(item) {
    photo.setAttribute("src", container[item].src);
    text.textİnner = container[item].h5;
    link.setAttribute("href", container[item].href);
}

function leftClick() {
    if (value > 0 && value <= 4) {
        value -= 1;
        show_slide(value);
    }
    else if (value >= 0) {
        value = 4;
        show_slide(value);
    }
}

function rightClick() {
    if (value >= 0 && value < 4) {
        value += 1;
        show_slide(value);
    }
    else if (value >= 4) {
        value = 0;
        show_slide(value);
    }
}
