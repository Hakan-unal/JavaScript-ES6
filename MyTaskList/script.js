// create values
let count, input, form, buton_delete_all, buton_delete_item, buton_add, task_list, items;
input = document.querySelector("#txtTaskName");
form = document.querySelector("form");
buton_delete_all = document.querySelector("#btnDeleteAll");
task_list = document.querySelector("#task-list");
buton_delete_item = document.querySelector(".delete-item");
count = 0;
//load elements from page
load_elements();
// call alleventlist
alleventlist();

function alleventlist() {
    // submit event
    form.addEventListener("submit", addNewItem);
    // input box style events
    input.addEventListener("keydown", keydown);
    input.addEventListener("blur", blur);
    // delete an item event
    task_list.addEventListener("click", remove_item);
    // delete all items
    buton_delete_all.addEventListener("click", remove_all_items);
}

// input box style function
function keydown() {
    input.style.background = "yellow";
    input.style.fontSize = "20px";
}

// input box style function
function blur() {
    input.style.background = "white";
}

// add element function
function addNewItem(e) {
    // if input empty
    if (input.value.length <= 0) {
        alert("Lütfen bir değer giriniz");
        e.preventDefault();

    }
    // input not empty
    else if (input.value.length > 0) {

        create_element(input.value);
        // li add to task list after clear input

        // set element to LS (yeni elemanı LS ye ekler)
        set_element_to_LS(input.value);
        input.value = "";


        // dont refresh
        e.preventDefault();
    }
    // input is not empty or full
    else {
        alert("Lütfen bir değer giriniz");
        e.preventDefault();

    }
}

//delete an element function
function remove_item(item) {
    // if class fas fa-times remove an item
    if (item.target.className == "fas fa-times") {
        let onay;
        // if confirm is 1 delete item
        onay = confirm("Emin misiniz?");
        if (Number(onay) === 1) {
            // delete an element from tasklist 
            item.target.parentElement.parentElement.remove();
            // delete an element from LS
            delete_element_from_LS(item.target.parentElement.parentElement.textContent);
            item.preventDefault();
        }
    }


}

// remove all elements function
function remove_all_items(item) {
    if (confirm("Emin misiniz?")) {
        // remove all elements from task list
        // == >> task_list.innerHTML = "";
        while (task_list.firstChild) {
            // task listin ilk elemanı olduğu sürece döngü devam eder ve eleman klamayana kadar çalışır
            task_list.removeChild(task_list.firstChild);
        }
        // remove all elements from LS
        delete_all_elements_from_LS(item.target.parentElement.parentElement.textContent);
    }
    item.preventDefault();
}

// create element function
function create_element(item) {
    let li, a, i, val, old, m;
    //create li
    li = document.createElement("li");
    li.innerText = item;
    li.setAttribute("class", "list-group-item list-group-item-secondary");
    //create a
    a = document.createElement("a");
    a.setAttribute("href", "#");
    a.setAttribute("class", "delete-item float-right");
    // create i
    i = document.createElement("i");
    i.setAttribute("class", "fas fa-times");
    // add i to a, add a to li
    a.appendChild(i);
    li.appendChild(a);
    // add li to task list
    task_list.appendChild(li);

}

// element load from local storage (LS içerisindeki elemanları items içine yükler)
function getElementFromLS() {
    // if LS is empty,create empty array
    if (localStorage.getItem("items") === null) {
        items = [];
    }
    // if Ls is not empty, get elements in items (you should not forget json is string change to array)
    else {
        items = JSON.parse(localStorage.getItem("items"))
    }
    return items;

}
// load element to LS (LS de olan elementleri listeye ekle)
function load_elements() {
    items = getElementFromLS();
    items.forEach(function (item) {
        create_element(item);
    });

}

// set element to LS (yeni bir elemen eklendiğinde LSdeki elementleri array'e çevir o array'e yeni elemanı ekle ve arrayin son halini tekrar LS'ye yükle)
function set_element_to_LS(item) {
    items = getElementFromLS();
    items.push(item);
    localStorage.setItem("items", JSON.stringify(items));
}

// delete element from LS function
function delete_element_from_LS(item) {
    items = getElementFromLS();
    items.forEach(function (item_1, index) {
        if (item_1 === item) {
            items.splice(index, 1)
        }
    });
    localStorage.setItem("items", JSON.stringify(items));
}

// delete all elements from LS function
function delete_all_elements_from_LS(item) {
    localStorage.clear();
}


