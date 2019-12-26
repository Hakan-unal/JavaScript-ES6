let question, q1, q2, q3, questions, quizz;


question = function (text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

// question üzerinden oluşturulan tüm sorularda bulunacak ama sadece parentta yer kaplayacak fonksiyon (soru doğru mu değil mi onu hesaplar)
question.prototype.calculate = function (item) {
    return this.answer === item;
}

// Quiz constructor'ı
function quiz(item) {
    this.questions = item;
    this.score = 0;
    this.questionIndex = 0;
}

// sorular değiştikçe questions arraiydeki elemanların indexsine göre sorular değişecek aşağıdaki fonksiyonla
quiz.prototype.getquestion = function () {
    return this.questions[this.questionIndex];
}

// eğer arrayin son elemanı ile işlem yapıldıysa bir sonraki eleman geldiğinde false dönecek
quiz.prototype.finish = function () {
    return this.questions.length === this.questionIndex;
}

// sorunun index numarası artar cevap doğruysa scoreda artar. 
quiz.prototype.guess = function (item) {
    let questionn;
    questionn = this.getquestion();

    if (questionn.calculate(item)) {
        this.score++;
    }
    this.questionIndex++;
}


// soruları aşağıda oluşturduk
q1 = new question("Hangi takımı tutuyorsunuz?", ["Beşiktaş", "Fenerbahçe", "Galatasaray", "Trabzonspor"], "Beşiktaş");
q2 = new question("Tuttuğunuz takımın toplam  kaç şampiyonluğu bulunmakta?", ["13", "14", "15", "16"], "15");
q3 = new question("Ligde şuan kaçıncı sıradasınız?", ["14", "15", "16", "17"], "16");
questions = [q1, q2, q3];

// start quiz
quizz = new quiz(questions);

// load questions fonksiyonu
loadQuestion();
function loadQuestion() {
    if (quizz.finish()) {
        // quiz bittiyse scoru'u ekrana göstermek gerekli(fonksiyonu sadece 1 defa kullanacağım için tek seferlik fonksiyon yazdım)
        (function () {
            let html;
            html = `<h2>Score</h2><h4>${quizz.score}</h4>`;
            document.querySelector(".card-body").innerHTML = html;
        })();
    }
    else {

        let question, choices;
        question = quizz.getquestion()
        document.querySelector("#question").textContent = question.text;
        choices = question.choices;
        for (let i = 0; i < choices.length; i++) {
            let element;
            element = document.querySelector(`#choice${i}`);
            element.innerHTML = choices[i];
            guess(`btn${i}`, `${choices[i]}`);
        }
    }
}

function guess(id, choice) {
    let btn;
    btn = document.getElementById(id);
    btn.onclick = function () {
        quizz.guess(choice);
        loadQuestion();
        console.log(quizz);

    }
}









