"use strict";
function handle_bai_2() {
    const str = prompt("Nhập chuỗi") || "/";
    const checkData = isValid(str);
    if (checkData) {
        console.log("Ký tự hợp lệ");
    }
    else {
        console.log("Ký tự không hợp lệ");
    }
}
function isValid(data) {
    const dataCheck = {
        "{": "}",
        "[": "]",
        "(": ")",
    };
    const stack = [];
    for (let index = 0; index < data.length; index++) {
        const key = data[index];
        const value = dataCheck[key];
        if (value) {
            stack.push(value);
        }
        else {
            if (data[index] !== stack.pop()) {
                return false;
            }
        }
    }
    return stack.length === 0;
}
