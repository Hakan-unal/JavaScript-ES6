let xhr, html;

url = "http://dataservice.accuweather.com/forecasts/v1/daily/5day/316649?apikey=5WbI59PATaZFnUyvcMuyYOqRhm1Tl5yp";

xhr = new XMLHttpRequest();
html = document.getElementById("html");

xhr.open(`GET`, url, true);
xhr.onload = function () {
    if (this.status === 200) {
        let info = JSON.parse(this.responseText);
        console.log(info.DailyForecasts[4].Day);

        for (let i = 0; i < 5; i++) {
            html.innerText += info.DailyForecasts[i].Day.IconPhrase + "----";
        }

    }
}
xhr.send();