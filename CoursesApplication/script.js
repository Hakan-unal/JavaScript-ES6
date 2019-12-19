//Course constructor
class Course {
    constructor(title, instructor, image) {
        this.courseId = Math.round(Math.random() * 1000000);
        this.title = title;
        this.instructor = instructor;
        this.image = image;
    }
}

// UI constructor
class UI {
    constructor() {

    }
    addCourseList = function (course) {
        let list, html;
        list = document.querySelector("#course-list");
        html = `
        <tr>
        <td><img src="img/${course.image}"/></td>
        <td>${course.title}</td>
        <td>${course.instructor}</td>
        <td><a href="#" data-id="${course.courseId}" class="btn btn-danger btn-sm delete">Delete<a/></td>
        </tr>
        `
        list.innerHTML += html;

    }
    clearControls = function () {
        let title, instructor, image;
        title = document.getElementById("title").value = "";
        instructor = document.querySelector("#instructor").value = "";
        image = document.querySelector("#image").value = "";
    }
    deleteItem = function (item) {
        let ui;
        ui = new UI();
        // if item has a delete class,funcions will work
        if (item.classList.contains("delete")) {
            if (confirm("Are you sure?")) {
                item.parentElement.parentElement.remove();
                //display alert after delete
                ui.showAlert("The course has been deleted", "danger");
            }
        }

    }
    showAlert = function (message, className) {
        let alert, row;
        alert = `
        <div class="alert alert-${className}">${message}</div>
        `;
        row = document.querySelector(".row");

        // insertadjenthtml 4 seçenekten oluşur bir tanesi beforebegin
        row.insertAdjacentHTML("beforeBegin", alert);

        setTimeout(() => {
            document.querySelector(".alert").remove();
        }, 3000);
    }

}

//Local storage constructor
class Storage {

    static getCourses() {
        let courses;
        if (localStorage.getItem("courses") === null) {
            courses = [];
        }
        else {
            courses = JSON.parse(localStorage.getItem("courses"));
        }
        return courses;
    }

    static DisplayCourses() {
        let courses, ui;
        ui = new UI();
        courses = Storage.getCourses();

        courses.forEach(course => {
            ui.addCourseList(course);
        });


    }

    static addCourses(course) {
        let courses;
        courses = Storage.getCourses();
        courses.push(course);
        localStorage.setItem("courses", JSON.stringify(courses));

    }

    static deleteCourses(item) {
        if (item.classList.contains("delete")) {
            let id, courses;

            id = item.getAttribute("data-id");

            courses = Storage.getCourses();
            courses.forEach((course, index) => {
                if (course.courseId == id) {
                    courses.splice(index, 1);
                }
            });
            localStorage.setItem("courses", JSON.stringify(courses));
        }

    }

}

document.addEventListener("DOMContentLoaded", Storage.DisplayCourses());

// Click to submit buton after dont refresh and define the input boxes
let form;
form = document.querySelector("#new-course");
form.addEventListener("submit", function (item) {
    let title, instructor, image, course, ui;
    title = document.getElementById("title").value;
    instructor = document.querySelector("#instructor").value;
    image = document.querySelector("#image").value;

    // create course object
    course = new Course(title, instructor, image);

    //create uı
    ui = new UI();

    // if box or boxes is empty 
    if (title === "" || instructor === "" || image == "") {
        ui.showAlert("Please complete the form", "warning");
    }

    // if all boxes have value
    else {

        // add course to list
        ui.addCourseList(course);

        // add local storage
        Storage.addCourses(course);


        // display add alert
        ui.showAlert("The course has been added", "success");

    }
    //clear controls
    ui.clearControls();


    // not refresh
    item.preventDefault();
});


document.getElementById("course-list").addEventListener("click", function (item) {
    let ui = new UI();

    //delete a course
    ui.deleteItem(item.target);

    //delete a course from local storage

    Storage.deleteCourses(item.target);

    item.preventDefault();

});
