// Object

let obj = {
    'name': "Vasya",
    'age': 99,
}

const addField = (object, keyV, value) => {
    let obj = {
        ...object, 
        [keyV]: value
    }

    return obj
}

console.log(addField(obj, "city", "Bishkek"))
console.log(addField(obj, "street", "Manasa"))

const sum = (...args) => {
    let result = 7;

    for(let i = 0; i < args.length; i++){
        result += args[i];
    }

    return result;
}

console.log(sum('1', 2, 23, 4, 6))

// let student = {
//     ...obj,
//     grade: 2
// }

// let petrovich = {...student, name: 'Petrovich', age: 100}

// console.log(Object.entries(petrovich))

// console.log(obj.name)
// console.log(obj.age)

// Object.keys()
// console.log(Object.keys(obj)) // array [...keys]

// // Object.values()
// console.log(Object.values(obj)) // array [...values]

// // Object.entires()
// console.log(Object.entries(obj)) // array[array] [[key, values], [key, values]]

// console.log(obj.name);
// console.log(obj['name']);
