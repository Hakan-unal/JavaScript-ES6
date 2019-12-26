let container, photo, text, link, right_click, left_click, value;
value = 0;
// container array'i içersiine 5 farklı obje tanımlandı ve bu objelerin içersiine 3 farklı değişken tanımlandı
container = [{ src: "img/bmw.jpg", h5: "bmw_116", href: "www.google.com" },
{ src: "img/honda.jpg", h5: "honda_116", href: "www.google.com" },
{ src: "img/mazda.jpg", h5: "mazda_116", href: "www.google.com" },
{ src: "img/skoda.jpg", h5: "skoda_116", href: "www.google.com" },
{ src: "img/volvo.jpg", h5: "volvo_116", href: "www.google.com" }
];
// html dökümanı üzerindeki gerekli yerler yakalandı
photo = document.querySelector(".card-img-top");
text = document.querySelector(".card-title");
link = document.querySelector(".card-link");
right_click = document.querySelector(".fa-arrow-circle-right");
left_click = document.querySelector(".fa-arrow-circle-left");

// events fonksiyonu çağırıldı
events();

function events() {
    // left_click ve right_click değişkenlerine click event'i gerçekleştiğinde leftClick ve rightClick fonksiyonlarını çağırdı
    left_click.addEventListener("click", leftClick);
    right_click.addEventListener("click", rightClick);
}

function show_slide(item) {
    // bu fonksiyon çağırıldığüında photo değişkeni ile tanımlanan yerin src etiketiiçerisindeki yer container array'i içerisindeki item inddisine göre çağırıldı
    photo.setAttribute("src", container[item].src);
    // text değişkeni ile yakalanan yerin textine container array'i içerisindeki item indisine göre h5 objesi atandı
    text.setAttribute = ("h5",container[item].h5);
    // link değişkeni ile tanımlanan yerin href etiketi içerisindeki kısım container array'i içerisinden gelen itemindisine göre belirlenen objenin href'i tanımlandı
    link.setAttribute("href", container[item].href);
}

function leftClick() {
    // value değişkeni 0 ile 4 arasındaysa slide gösterimindfe sorun yoktur çünkü toplam 5 eleman var ve array max 4 indisli olabilir
    if (value > 0 && value <= 4) {
        value -= 1;
        show_slide(value);
    }
    // eğer value değeri 
    else if (value <= 0) {
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


console.log(container[2].h5);
console.log(container[4].h5);

