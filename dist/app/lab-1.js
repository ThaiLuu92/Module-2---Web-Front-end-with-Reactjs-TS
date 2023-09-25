"use strict";
const form = document.getElementById("myForm");
const submitButton = document.getElementById("submitButton");
// Đặt sự kiện submit cho form
form.addEventListener("submit", (event) => {
    // Chặn sự kiện mặc định của form (ngăn form gửi dữ liệu)
    event.preventDefault();
    const formData = {
        name: "",
        address: "",
        state: "",
        course: "",
        game: "",
        date: "",
    };
    // Lấy giá trị của các phần tử input và hiển thị chúng
    const nameLab_1Element = document.getElementById("name");
    formData.name = nameLab_1Element.value;
    const addressLab_1Element = document.getElementById("address");
    formData.address = addressLab_1Element.value;
    const stateLab_1 = document.getElementById("state");
    formData.state = stateLab_1.value;
    // Lấy giá trị của phần tử course (radio buttons)
    const radioCourse = document.getElementsByName("course");
    let selectedCourse = "";
    radioCourse.forEach((radioCourse) => {
        if (radioCourse.checked) {
            formData.course = radioCourse.value;
        }
    });
    // Lấy giá trị của phần tử game (radio buttons)
    const radioGame = document.getElementsByName("game");
    let selectedGame = "";
    radioGame.forEach((radioGame) => {
        if (radioGame.checked) {
            formData.game = radioGame.value;
        }
    });
    // Lấy giá trị của phần tử date (input date)
    const dateInputElement = document.getElementById("myDateInput");
    formData.date = dateInputElement.value;
    console.log(formData);
});
