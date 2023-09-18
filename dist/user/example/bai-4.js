"use strict";
function handle_bai_4() {
    const s = prompt("Nhập chuỗi s:");
    const t = prompt("Nhập chuỗi t:");
    if (s === null || t === null) {
        alert("Bạn đã hủy hoặc không nhập đủ thông tin.");
        return;
    }
    const result = isAnagram(s, t);
    if (result) {
        alert(`"${s}" và "${t}" là từ hoán vị.`);
    }
    else {
        alert(`"${s}" và "${t}" không phải là từ hoán vị.`);
    }
}
function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const charCount = {};
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (let i = 0; i < t.length; i++) {
        const char = t[i];
        if (!charCount[char] || charCount[char] <= 0) {
            return false;
        }
        charCount[char] -= 1;
    }
    return true;
}
