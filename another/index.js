// console.log("Hello, world")

// let age = 25;
// age = 30;
// age = 40;
// const p1 = 3.14;

// console.log(typeof age);
// console.log(typeof p1);

// console.log(3+3);
// console.log(3-3);
// console.log(3*3);
// console.log(3/3);
// console.log(3%3);
// console.log(3>3);
// console.log(3<3);
// console.log(3<=3);
// console.log(3>=3);
// console.log(3==3);
// console.log(3===3);

// for(let i=0; i<=10; i++){
//     console.log("Hello");
// }

// let j = 0;
// while (j < 10) {
//     console.log(j);
//     j++;
// }

// do {
//     console.log(j);
//     j++;
// } while(j < 10);

// let name = "Stalbek";
// let name1 = "Imran";

// function greeting(name1){
//     return "Привет, " + name1;
// }
// console.log(greeting());
// console.log(greeting(name1));

// let array = [1,2,3];

// console.log(array);
// console.log(typeof array);
// console.log(typeof null);

// Fnctions
let a = 0;
// 1 function declarion (свой контекст - this, всплывание)
function pow(a, b) {
    return a ** b;
}

console.log(pow(2, 3)); // 8

// 2. Function Expression
// let
// const
// var
const add = function(){
 console.log("2. Function Expression");
 console.log(a);
}

// 3. arrow function 
const divide = () => {
    console.log("3. Function Expression");
    console.log(a);
}

console.log(window.document);

function element(){
    const text = document.createElement("h1");
    text.append("Hello");
    return text;

    document.body.append(text); 
}

console.log(element());

// pow();
// add();
// divide();

// const User = {
//     age: 20,
//     name: "Imran"
// }

// console.log(sayHello())

// function sayHello(){
//     return this.User
// }

// const sayHelloArray = () => {
//     return this
// }

// setTimeout(() => {
//     console.log("1 second");
// }, 1000);

// setTimeout(function() {
//     console.log("1 second");
// }, 1000);