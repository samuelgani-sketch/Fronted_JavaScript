console.log("hi");

//Arr - Array []
let itb28Arr = ["Imran", 'Samuel', 'Beks', 'Nurbol', 'Stalbek', 'Maks', 'Danil', 'Nurbol', 'Nurbol']
let nurbol = ['Nurbol', 'Nurbol', 'Nurbol','Nurbol',]
// console.log(itb28Arr[0]) //index
// console.log([itb28Arr.length-1]) //index
// console.log(itb28Arr[5]) // index

// map -> returns array
// itb28Arr.map((el, index, array) => {
//     console.log('map')
//     console.log(index+1 + '. ' + "'" + el + "'") // element
//     // console.log(array)
// });


// filter

// itb28Arr.filter((item, idx) => {
//     if (item !== 'Danil'){
//     console.log(idx+1 + '. ' + "'" + item + "'")
//     }
// });

// itb28Arr.filter((item, idx) => {
//     console.log(item !== "Danil")
// });

// function filterArr(){
//     itb28Arr.filter((item, idx) => {
//         return item !=='Danil'
//     })
// }

// console.log(filterArr())

// find

// function findEl(){
//     return itb28Arr.find((el) => {
//     return el === 'Nurbol'
//     })
// }

// console.log(findEl())
// console.log('x')

// itb28Arr.filter((el) => {
//     if(el === 'Nurbol') {
//         console.log(el)
//     }
// })

// findIndex

// console.log(itb28Arr.findIndex(item => item == 'Maks'))
// console.log(itb28Arr.findIndex(item => item == 'Imran'))

// some/every -> boolen

// console.log(itb28Arr.some((el) => el == "Nurbol"))
// console.log(itb28Arr.some((el) => el == "Name"))

// console.log(itb28Arr.every((el) => el == "Nurbol"))
// console.log(nurbol.every((el) => el == "Nurbol"))

// reduce

// let nums = [1, 2, 3, 4, 5] // 15

// function Reduce() {
//     return nums.reduce((sum, el) => sum + el, 0)
// }

// console.log(Reduce())

//Obj - Object {}
const Obj = {
    1: {
        name:'Imran'
    },
    2: {
        name:'Samuel'
    },
    3: {
        name:'Beks'
    },
    4: {
        name:'Nurbol'
    },
    5: {
        name:'Stalbek'
    },
    6: {
        name:'Maks'
    }
}