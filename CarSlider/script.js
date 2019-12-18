let models, index, right_click, left_click, settings, i, prev, interval, all_icons;
models = [
    {
        name: 'Bmw 116d',
        image: 'img/bmw.jpg',
        link: 'http://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe'
    },
    {
        name: 'Mazda CX-3',
        image: 'img/mazda.jpg',
        link: 'http://www.arabalar.com.tr/mazda/cx-3/2017/1-5-sky-d-motion'
    },
    {
        name: 'Volvo S60',
        image: 'img/volvo.jpg',
        link: 'http://www.arabalar.com.tr/volvo/s60/2018/1-5-t3-advance'
    },
    {
        name: 'Skoda Superb',
        image: 'img/skoda.jpg',
        link: 'http://www.arabalar.com.tr/skoda/superb/2018/1-4-tsi-active'
    },
    {
        name: 'Honda Civic',
        image: 'img/honda.jpg',
        link: 'http://www.arabalar.com.tr/honda/civic/2018/1-6-elegance'
    }
];
i = 0;
index = 0;
prev = 0;
right_click = document.querySelector(".fa-arrow-circle-right");
left_click = document.querySelector(".fa-arrow-circle-left");
all_icons = document.querySelectorAll(".timeout");
settings = { duration: "500", random: confirm("Random geçiş istiyor musunuz?") };

// call event list
callListener();
// first load page, show index 0

init(settings);

// show slide function
function showSlide(item) {
    document.querySelector(".card-img-top").setAttribute("src", models[item].image);
    document.querySelector(".card-title").textContent = models[item].name
    document.querySelector(".card-link").setAttribute("href", models[item].link);
}

// call events
function callListener() {
    right_click.addEventListener("click", switch_right);
    left_click.addEventListener("click", switch_left);
    all_icons.forEach(function (item) {
        item.addEventListener("mouseenter", function () {
            clearInterval(interval);
        })
    })
    all_icons.forEach(function (item) {
        item.addEventListener("mouseleave",function(){
            init(settings);
        });

    });
}


// if mouse click right icon  function 
function switch_right() {
    if (index < 4) {
        index += 1;
        showSlide(index);

    }
    else {
        index = 0;
        showSlide(index);

    }
}

// if mouse click left icon function
function switch_left() {
    if (index === 0) {
        index = models.length - 1;
        showSlide(index);

    }
    else {
        index -= 1;
        showSlide(index);

    }
}

//create a random number and showslide function
function init(item) {
    interval = setInterval(function () {
        if (settings.random) {
            index = Math.round(Math.random() * 4);
            // aynı fotoğraf üst üstse iki defa gelmesin diye aşağıdaki işlemi yaptırdım
            do {
                index = Math.round(Math.random() * 4);
            } while (index === prev)
            prev = index;
            showSlide(index);

        }
        else {

            if (index <= 4) {
                showSlide(index);
                index += 1;
            }
            else {
                index = 0;
                showSlide(index);

            }
        }


    }, settings.duration)

}

// timeout for slide
function timeout_slide() {
    clearInterval(interval);
}



