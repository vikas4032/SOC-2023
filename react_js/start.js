// console.log('vikas')
// //avoid var, instead use let
// // var define globally
// var b = 68
// let a = 66
// console.log(a)
// a = 'viki'
// console.log(a)
// // so javascript allow us to change type by assigning


// //let and var
// let a = 'this'
// {
//     let a = 'yoy'
//     console.log(a)

// }
// console.log(a)


// // let blocks m hi rhega
// // we can not declare let again
// // let b = 'vikas'
// // let b = 'yoy'


// // const v = 'vikas'
// // console.log(v)
// // v= 'h'

// //datatypes
// // NUll
// //number
// //symbol
// //string
// //bollean
// //bigint
// //undefined


// let a = null
// let b = true
// let c =BigInt('545')
// let e = 'boss'
// let f = Symbol("i am dancer")
// let g = undefined

// console.log(a,b,c,e,f,g)
// // c = 'viki'
// console.log(typeof c)


// //objects
// const item = {
//     'name': 'vikas',

//     'tf' : true
// }

// // console.log(item['name'])

// // let a = 'vik'
// // let b = 5
// // console.log(typeof(a+b))

// const a = {
//     name:'vikas',
//     age : 28
// }
// // a = 5 //error
// a['name'] = 'boss' // correct, also can add new key
// console.log(a)

// let a = 15
// let b = 7
// console.log(a/b)

// //comparator operators
// let a = 5
// let b = '5'
// console.log(a==b)
// console.log(a===b)  //triple equal also compare types

// // && ||

// //prompt...used to take input, check in console of a website, popup waala


// // var prompt =  require('prompt');
// let a = prompt('type bro!') // will get input in a, it will be string
// a = Number.parseInt(a)  // now will get it into number

// //if else, also switch

// const expr = 'papaya'
// switch(expr){
//     case 'oranges':
//         console.log('there is ornages')
//         break
//     case 'mango':
//     case 'papaya':
//         console.log('papaya mil gya')
//         break
//     default:
//         console.log('sorry, kuch aur btao')

// } 
//// case executes all cases if no break, include default

// let age = 19
// console.log('You can ', age<18? "not drive":'drive')



////loops
// for (let i = 0; i<5;i++){
//     console.log(i)
// }

// let mark = {
//     vik:50,
//     vv:60,
//     hii: 70
// }
// for(a in mark){
//     console.log(mark[a])
// }

// let a = [5,6,8,9]
// for(let i of a){
//     console.log(i)
// }

// //  for in takes the index of a, for of give value of that index of a

// do{

// }while(i<n)

// // it first execute and then check for further execution,,,,,means atleat once execute the block


//Funcitons
// function abc(a,b,c){
//     return a+b+c
// }
// console.log(Math.round(2.55))

// // other way
// const abc = (a,b,c)=>{
//     return a+b+c
// }

// let a = 'vikas'
// console.log(a.length)


// //template script
// let a = 'rahul'
// let b = 'rohit'
// let s = `${a} is bro of ${b}`   //see '' or ``
// console.log(s)

//\n newline
// \t tab
// \r carriage return