let value, color;

color = (event) => {
    //event mouse'un üzerinde bulunuğu yeri gösteriyor
    // eğer mouse'un üzerinde bulunduğu konumun html elementin box class'ına sahipse koşul sağlanır
    if (event.target.classList[0] == "box") {
        // mouse'un üzerinde bulunduğu konumun id'sine göre switch case
        // aşağıdaki 9 farklı duruma göre koşullar var 
        // default koşul yazmadım çünkü aşağıdaki özellikler sağlanmıyorsa herhangi bir 
        // şey çalışsada çalışmasada bir önemi yok
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

        }

    }
}

// id'si contain olan html elementi value değişkeni içerisine atandı
value = document.querySelector("#contain");
// value değişkeni üzerinde mouseover olayı gerçekleştiğinde color fonksiyonu çalışıyor
value.addEventListener("mouseover", color);
