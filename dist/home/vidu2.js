"use strict";
// Lớp cơ sở Account
class Account {
    constructor(accountNumber, initialBalance) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`Giao dịch: Nạp tiền $${amount} vào tài khoản ${this.accountNumber}`);
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Giao dịch: Rút tiền $${amount} từ tài khoản ${this.accountNumber}`);
        }
        else {
            console.log(`Giao dịch thất bại: Số dư không đủ trong tài khoản ${this.accountNumber}`);
        }
    }
    getBalance() {
        return this.balance;
    }
    displayAccountInfo() {
        console.log(`Tài khoản ${this.accountNumber} - Số dư: $${this.balance}`);
    }
}
// Lớp con SavingsAccount kế thừa từ Account
class SavingsAccount extends Account {
    constructor(accountNumber, initialBalance, interestRate) {
        super(accountNumber, initialBalance);
        this.interestRate = interestRate;
    }
    applyInterest() {
        const interestAmount = this.balance * (this.interestRate / 100);
        this.deposit(interestAmount);
        console.log(`Giao dịch: Áp dụng lãi suất ${this.interestRate}% cho tài khoản ${this.accountNumber}`);
    }
}
// Lớp con CheckingAccount kế thừa từ Account
class CheckingAccount extends Account {
    constructor(accountNumber, initialBalance, overdraftLimit) {
        super(accountNumber, initialBalance);
        this.overdraftLimit = overdraftLimit;
    }
    withdraw(amount) {
        if (amount <= this.balance + this.overdraftLimit) {
            this.balance -= amount;
            console.log(`Giao dịch: Rút tiền $${amount} từ tài khoản ${this.accountNumber}`);
        }
        else {
            console.log(`Giao dịch thất bại: Số dư không đủ trong tài khoản ${this.accountNumber}`);
        }
    }
}
// Hàm tính tổng số dư của tất cả các tài khoản
function totalBalance(accounts) {
    let sum = 0;
    for (const account of accounts) {
        sum += account.getBalance();
    }
    return sum;
}
// Tạo các tài khoản và thực hiện giao dịch
const accounts = [];
accounts.push(new SavingsAccount("SAV-001", 1000, 2));
accounts.push(new CheckingAccount("CHK-001", 500, 200));
accounts.push(new SavingsAccount("SAV-002", 2000, 1.5));
for (const account of accounts) {
    account.deposit(100);
    account.displayAccountInfo();
}
console.log(`Tổng số dư của tất cả các tài khoản là: $${totalBalance(accounts)}`);
