// single line commnet

/* 
block comment
*/
// variable declaration
var string = "string"
var integer = 123
var float = 123.123
var string = 123.123
var  i =0
// let only allow one declaration
// let a = "hola"
// let a = 123
let  arr = [1,2,3]
// check for operation that makes side effect(change the original state of the array)
arr.pop()// return last elelemtn of list
arr.shift()//return first element of list
arr.slice(1, 3)// return all element between start and end and return it as a new array
arr[0] //return index 0 from the array
let mat2 = [[1,2,"hola"],2.0]// mixed types
mat2[0][2]// => hola
// struct based with key => value 
// JSON javascript object notation
let obj = {
  'keyA': 'valA',
  keyB: [132,123],
  keyC: {
    subA: {
      subSubA: 'holi'
    }
  }
}
obj['keyA'] // return valA
obj.keyA // return valA
obj.keyB[0] // return 132
obj.keyC['subA'].subSubA // return holi
key = 'keyA'
obj[key] // return valA
// this is a string interpolation variables go into the ${var_name}
let strInter = `some """ ''' string ${mat2[0][2]}`
let x = 10
let y =120.20
console.log(x + y)// ?? 130.2
x = "123"
y = 1
console.log(x + y) // 1231
console.log(y - x) // -122

// named function
function a(b, c) {// function Optional<String> function { Block}
  console.log(b,c)
  console.log(this)
  return b + c
}

a()

let sub_function = function(b, c) {
  return b - c
}

let div_function = function(b, c){
  return b/ c
}

let sum_function = function(b, c, d, operation) {
  return operation(b, c) + d
}


sum_function(2,3,4, sub_function)
sum_function(2,3,4, div_function)

sum_function(2, 3, 4, function(b, c) {
  return b - c
}) 

let arr_fun = () => {
  console.log(this)
  return "arrow function"
}

let arr_two = (a,b) => {
  console.log(a,b)
}

let sentinel = true
let s2 = true

if (sentinel) {
  console.log("inside if")
} else if (s2) {
  console.log("inside elsif")
} else {
  console.log("inside else")
}
let c = "a"

switch(c) {
  case 'a':
    console.log('a')
    break
  case 'b':
    console.log('b')
    break
  default:
    console.log('default')
}


arr = [5,6,7,8,9]

for(let i =0; i < arr.length; i++) {
  console.log(arr[i])
}

for (index in arr) {
  console.log(index)
}

for (number of arr) {
  console.log(number)
}

i = 0
while ( i < 10) {
  i++
}
arr.forEach((number) => {
  console.log(number)
})


// difference between for in and for of, pasted from mdn
// Object.prototype.objCustom = function() {};
// Array.prototype.arrCustom = function() {};

// const iterable = [3, 5, 7];
// iterable.foo = 'hello';

// for (const i in iterable) {
//   console.log(i); // logs "0", "1", "2", "foo", "arrCustom", "objCustom"
// }

// for (const i in iterable) {
//   if (iterable.hasOwnProperty(i)) {
//     console.log(i); // logs "0", "1", "2", "foo"
//   }
// }

// for (const i of iterable) {
//   console.log(i); // logs 3, 5, 7
// }

// TODO http call to pokeapi 
// sample with plain xml http request



let pockeNames = ['ditto', 'pickachu', 'jigglypuff']


let pokeCall = (pokeName) => {
  return (pokemons) => {
    let req = new XMLHttpRequest();
    req.open('GET', 'https://pokeapi.co/api/v2/pokemon/' + pokeName, true);
    req.onreadystatechange = (req) => {
      // debugger
      if (req.readyState == 4) {
        if(req.status == 200){
          pokemons.add(req.response)
          return Promise.resolve(pokemons);
        } else {
          console.log(req.reject)
          return Promise.reject(req.reject);
        }
      }
    }
    req.send(null);
  }
}
// this is the same as below
// let promise = new Promise((resolve, _reject) => {
//   return resolve()
// })

/** 
 * promise calls
 * call 1(dito)
 * []// argument
 * [{dito}] // return value
 * 
 * call 2 pickachu
 * [{dito}] // argument
 * [{dito}, {pickachu}] // return value
 * 
 * call 3 jigglypuff
 * [{dito}, {pickachu}] // argument 
 * [{dito}, {pickachu}, {jigglypuff}] // return value
 * 
 * call 4
 * console log of all pokemos because it's the last promise call
 * 
*/

let pokemons = []
let promise = Promise.resolve(pokemons)
let reject = (error) => {
  console.log(error)
}
for (let index = 0; index < pockeNames.length; index++) {
  promise.then(pokeCall(pockeNames[index]))
}

promise.then((pokemons) => {
  return console.log(pokemons)
})

promise.reject(reject)




let greeter = (greetType) => {
  return (name) => {
    console.log(greetType() + name)
  }
}

let greetHi = () => {
  return "hi" 
}

let greetHola = () => {
  return "hola"
}

let greet = greeter(greetHola)

greet("juve")
greet("angel")

