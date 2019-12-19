// değişkenler tanımlandı
let li, form, input_box, delete_all_buton, task_list, delete_a_item_buton;
form = document.querySelector("form");
input_box = document.querySelector("#txtTaskName");
delete_all_buton = document.querySelector("#btnDeleteAll");
task_list = document.querySelector("#task-list");
delete_a_item_buton = document.querySelectorAll(".list-group-item");


eventlist();

// tüm eventları burada topla ve sayfa yüklenince çalışsın
function eventlist() {
    form.addEventListener("submit", add_item);
    task_list.addEventListener("click", delete_item);
    delete_all_buton.addEventListener("click", delete_all_item);

}

// liste elemanı oluşturma 
function create_list_item(value) {
    let li, a, i;
    li = document.createElement("li");
    li.setAttribute("class", "list-group-item list-group-item-secondary");
    li.innerText = value;
    a = document.createElement("a");
    a.setAttribute("class", "delete-item float-right");
    a.setAttribute("href", "#");
    i = document.createElement("a");
    i.setAttribute("class", "fas fa-times");
    a.appendChild(i);
    li.appendChild(a);
    task_list.appendChild(li);
    input_box.value = "";
}

// oluşturulan elemanı ul altına ekleme
function add_item(value) {
    if (input_box.value.length > 0) {
        create_list_item(input_box.value);
    }
    else {
        alert("Please enter a value");
    }
    value.preventDefault();
}

// listeden bir tane  eleman silme
function delete_item(value) {
    if (value.target.className === "fas fa-times") {
        if (confirm("Are you sure?")) {
            value.target.parentElement.parentElement.remove();
        }
    }
}
// listedeki tüm elemanları silme
function delete_all_item() {
    if (confirm("Are you sure?")) {
        li = document.querySelectorAll("li");
        li.forEach(function (item) {
            item.remove();
        });
    }

}

// KENDİ BAŞINA 0'DAN YAPTIĞIN İÇİN LOCAL STORAGE İLE UĞRAŞMADIN AMA YİNEDE BAK





