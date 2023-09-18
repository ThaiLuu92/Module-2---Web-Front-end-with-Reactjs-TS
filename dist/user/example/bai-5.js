"use strict";
function findMaxSubarraySum(nums) {
    // Nếu mảng rỗng, trả về 0 vì không có mảng con nào
    if (nums.length === 0) {
        return 0;
    }
    // Khởi tạo biến để lưu tổng lớn nhất và tổng hiện tại
    let maxSum = nums[0]; // Giả sử tổng lớn nhất ban đầu là phần tử đầu tiên
    let currentSum = nums[0]; // Tổng hiện tại cũng bắt đầu từ phần tử đầu tiên
    // Duyệt qua các phần tử từ phần tử thứ hai trở đi
    for (let i = 1; i < nums.length; i++) {
        // Chúng ta có hai lựa chọn:
        // 1. Bắt đầu một mảng con mới bằng phần tử tại vị trí hiện tại
        // 2. Mở rộng mảng con hiện tại bằng cách thêm phần tử tại vị trí hiện tại vào tổng hiện tại
        // Chúng ta so sánh tổng mới và tổng lớn nhất đã biết và lấy giá trị lớn hơn
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    // Kết quả cuối cùng là tổng lớn nhất của mảng con
    return maxSum;
}
const nums2 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(findMaxSubarraySum(nums2));
