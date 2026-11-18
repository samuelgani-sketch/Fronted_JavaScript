let a = 0;

// 1. Function Declaration
function pow(a, b) {
    console.log("1. Function Declaration");
    return a ** b;
}

// 2. Function Expression
const add = function() {
    console.log("2. Function Expression");
    console.log(a);
};

// 3. Arrow Function
const divide = () => {
    console.log("3. Arrow Function");
    console.log(a);
};

// Работа с DOM
function element(tag) {
    const element = document.createElement(tag);
    element.append("Hello");
    
    return element;
}
console.log(pow(2, 3));

const root = document.getElementById('root');
root.append(element("h1"));
root.append(element("h2"));
root.append(element("h3"));
root.append(element("div"));

add();
divide();
element();