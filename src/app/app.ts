function sortData<T>(arr: T[]): T[] {
  return arr.sort();
}

const arr = [1, 2, 3, 4, 5, 2323, 23, 546, 12, 14];
console.log(sortData(arr));
const arrString = ["Dương", "Thái", "Viễn", "Anh"];
console.log(sortData(arrString));

function findMax<T>(arr: T[]) {
  let value: T = arr[0];
  arr.forEach((element) => {
    if (element > value) {
      element = value;
    }
  });
  return value;
}
 const max = [1,2,3,4,5,6]
 console.log(findMax(max));
 


 function readObj<T>(obj:T) {
   for (const key in obj) {
     console.log(key,obj[key]);
   }
 }

 const obj = {
   name: "Thai",
   age: 31,
 };

 readObj(obj);


 class ContactList<T, U> {
   private contacts: { name: T; phone: U }[] = [];

   addContact(name: T, phone: U) {
     this.contacts.push({ name, phone });
   }

   getAllContacts() {
     return this.contacts;
   }
 }

 const contactList = new ContactList<string, string>();
 contactList.addContact("Viễn", "123456");
 contactList.addContact("Quyết", "654321");

 const allContacts = contactList.getAllContacts();
 console.log("Danh bạ liên lạc:");
 console.log(allContacts);


 class Clone {
  private numbers: number[] = [];

  addNumber (a:number){
    this.numbers.push(a)
  }
  getNumber () {
   return this.numbers;
  }
  sumNumber () {
    const sum = this.numbers.reduce((a,b) => a + b,0);
    return sum;
  }
 }

 const arrNumber = new Clone();
 arrNumber.addNumber(10);
 arrNumber.addNumber(20);
 arrNumber.addNumber(30);

 console.log(arrNumber.sumNumber());

 class CloneGeneric<T> {
   private numbers: T[] = [];

   addNumber(a: T) {
     this.numbers.push(a);
   }
   sumNumbers(): number{
    
     if (typeof this.numbers[0] === "number") {
       const sum = this.numbers.reduce((a, b) => a + (b as number), 0);
       return sum;
     }
     return 0; 
   }
 }


 const genericNumber = new CloneGeneric<number>();
genericNumber.addNumber(10);
genericNumber.addNumber(20);
genericNumber.addNumber(30);

console.log(genericNumber.sumNumbers());

const genericString = new CloneGeneric<string>();
genericString.addNumber("Hello");
genericString.addNumber("World");

console.log(genericString.sumNumbers()); 
 
 