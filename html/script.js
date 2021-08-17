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
let a = "hola"
// let a = 123
let  arr = [1,2,3]
// check for operation that makes side effect(change the original state of the array)
arr.pop()// return last elelemtn of list
arr.shift()//return first element of list
arr.slice(1, 3)// return all element between start and end and return it as a new array
arr[0] //return index 0 from the array
let mat2 = [[1,2,"hola"],2.0]//
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
// this is a string interpolation
let strInter = `some """ ''' string ${mat2[0][2]}`

