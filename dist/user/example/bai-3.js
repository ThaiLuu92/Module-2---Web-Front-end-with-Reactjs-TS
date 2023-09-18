"use strict";
// Định nghĩa hàm handle_bai_3 để kiểm tra chuỗi Palindrome
function handle_bai_3() {
    // Nhận chuỗi đầu vào từ người dùng sử dụng prompt hoặc mặc định là dấu '/'
    const str = prompt("Nhập chuỗi") || "/";
    // Chuyển đổi chuỗi str thành chữ thường để loại bỏ sự phân biệt chữ hoa/chữ thường
    const strToLowerCase = str.toLowerCase();
    // Loại bỏ tất cả các ký tự không phải là chữ cái hoặc số từ chuỗi sử dụng biểu thức chính quy
    const strRemove = strToLowerCase.replace(/[^a-z0-9]/g, "");
    // Kiểm tra xem chuỗi sau khi loại bỏ có phải là chuỗi Palindrome bằng cách gọi hàm checkPalindrome
    const isPalindrome = checkPalindrome(strRemove);
    // Xuất kết quả dựa trên kết quả kiểm tra Palindrome
    isPalindrome
        ? console.log("/" + str + "/ là một chuỗi Palindrome ")
        : console.log("/" + str + "/ không phải là một chuỗi Palindrome ");
}
// Định nghĩa hàm checkPalindrome để kiểm tra xem một chuỗi có phải là Palindrome không
function checkPalindrome(str) {
    // Duyệt qua nửa đầu của chuỗi để so sánh với nửa sau (đảm bảo chỉ cần so sánh một nửa)
    for (let index = 0; index < str.length / 2; index++) {
        // So sánh ký tự ở vị trí index với ký tự tương ứng ở cuối chuỗi
        if (str[index] !== str[str.length - index - 1]) {
            // Nếu có bất kỳ cặp ký tự nào không giống nhau, trả về false
            return false;
        }
    }
    // Nếu đã kiểm tra hết mà không tìm thấy ký tự nào không giống nhau, trả về true (chuỗi là Palindrome)
    return true;
}
// Gọi hàm handle_bai_3 để kiểm tra chuỗi Palindrome khi tài liệu đã được tải
handle_bai_3();
