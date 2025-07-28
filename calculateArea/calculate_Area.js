// calculate area
let lenght;
let width;

function calculateArea() {
    lenght = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);

let area = lenght * width;
document.getElementById('result').innerText =`The area of the rectangle is: ${area}`;
console.log('area is: ' + area);
}



//// closure 1

function outerFunction(){
    const outerVar ="i am from the outer function";
    function innerFunction (){
        console.log(outerVar);
    }
    return innerFunction;
}
const closure = outerFunction();
closure();

function greet(name) {
    const greeting = "hello, ";
    function sayHello() {
        console.log(greeting +name);
    }
    return sayHello;
}
const greetjohn = greet("john");
const greetAlice = greet("Alice");

greetjohn();
greetAlice();

///closure 2 เพิ่ม counter ขึ้นทีละ 1 ทุกครั้งที่เรียก counter ครั้งที่ X จะได้ X

function createCounter() { // นี่คือฟังก์ชันภายนอก (Outer Function)
  let count = 0; // ตัวแปร 'count' ถูกประกาศในฟังก์ชันภายนอก

  function increment() { // นี่คือฟังก์ชันภายใน (Inner Function)
    count++; // ฟังก์ชันภายในเข้าถึงและเปลี่ยนแปลงค่า 'count'
    console.log(count);
  }

  return increment; // ฟังก์ชันภายนอกคืนค่าฟังก์ชันภายใน
}

// ตอนนี้เริ่มใช้งาน Closure
const counter1 = createCounter(); // เรียก createCounter() -> ได้ฟังก์ชัน increment กลับมาเก็บใน counter1
const counter2 = createCounter(); // เรียก createCounter() อีกครั้ง -> ได้ฟังก์ชัน increment 'ชุดใหม่' เก็บใน counter2
const counter3 = createCounter(); // เรียก createCounter() อีกครั้ง -> ได้ฟังก์ชัน increment 'ชุดใหม่' เก็บใน counter3
const counter4 = createCounter(); // เรียก createCounter() อีกครั้ง -> ได้ฟังก์ชัน increment 'ชุดใหม่' เก็บใน counter4


console.log("Counter 1:");
counter1(); // Output: 1 (count ของ counter1 กลายเป็น 1)
counter1(); // Output: 2 (count ของ counter1 กลายเป็น 2)
counter2(); // Output: 1 (count ของ counter2 กลายเป็น 1)

console.log("Counter 2:");
counter2(); // Output: 2 (count ของ counter2 กลายเป็น 2, แยกจาก counter1)
counter1(); // Output: 3 (count ของ counter1 กลายเป็น 3)
counter3(); // Output: 1 (count ของ counter3 กลายเป็น 1)

console.log("Counter 3:");
counter3(); // Output: 2 (count ของ counter3 กลายเป็น 2, แยกจาก counter1)
counter1(); // Output: 4 (count ของ counter1 กลายเป็น 4)
console.log("Counter 4:");
counter4(); // Output: 1 (count ของ counter4 กลายเป็น 1, แยกจาก counter1)
counter1(); // Output: 5 (count ของ counter1 กลายเป็น 5)
