let searchProfile, profile, ui;

profile = new profiles();
searchProfile = document.querySelector("#searchProfile");
ui = new UI();
searchProfile.addEventListener("keyup", (event) => {
    ui.clear();

    let text;
    text = event.target.value;
    if (text !== "") {
        profile.getProfile(text).then(res => {
            if (res.profile.length === 0) {
                ui.showAlert(text);

            }
            else {
                ui.showProfile(res.profile[0]);
            }
        });
    }

});