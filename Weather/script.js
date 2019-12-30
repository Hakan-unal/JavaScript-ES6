let xhr, html;
// url değişkeni içerisine apinin adresi string olarak atandı
url = "http://dataservice.accuweather.com/forecasts/v1/daily/5day/316649?apikey=5WbI59PATaZFnUyvcMuyYOqRhm1Tl5yp";

// XMLHttpRequest class'ı üzerinden xhr objesi tanımlandı
xhr = new XMLHttpRequest();
// html değişkeni içerisine id'si html olan html dökümanı atandı
html = document.getElementById("html");

// xhr objesi içerisinde open methodu çağırıldı ve url değişkeni içerisinde tanımlanan adresteki veri alındı
xhr.open(`GET`, url, true);
// xhr objesi üzeridneki onload methodu çağırılarak fonksiyon yazıldı
xhr.onload = function () {
    // eğer status 200 ise sayfadaki tüm elementler yüklenmiştir ve tüm elementler yüklenince aşağıdaki işlemler gerçekleşir
    if (this.status === 200) {
        // info değişkeni içerisine apiden gelen text array'e çevirilerek atandı
        let info = JSON.parse(this.responseText);
        console.log(info.DailyForecasts[4].Day);

        for (let i = 0; i < 5; i++) {
            html.innerText += info.DailyForecasts[i].Day.IconPhrase + "----";
        }

    }
}
xhr.send();