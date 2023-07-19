// var a = 5
// var b = 6
// console.log(a+b)

// const marks = {
//     ram: 5,
//     shyam : 6,
//     ravi: 67
// }
// console.log(marks[Object.keys(marks)[0]])


// arr = [0,1,2,3,4,5,6]
// arr.forEach(element => {
//     console.log(element)
// });

// console.log('this is length of array' + arr.length)
// arr.pop()
// console.log('new lenght'+ arr.length)
// arr.push('new element')

// console.log(arr)
// arr.shift()                   // remove one element form left
// console.log(arr)
// arr.unshift('viki')
// console.log(arr)            // again remove left one...but add also
// arr.toString()
// arr.sort()
// str = 'vikas is a pro player'
// str.indexOf('pre')
// str.lastIndexOf('pro')
// str.slice(4,9)// string from 4 to 8 index
// // str.replace("pro", "jordar")
// let date = new Date();
// console.log(typeof date.getMinutes())

// //DOM MANIPULATION
// let elm = document.getElementById('click')
// console.log(elm)
// let elmc = document.getElementsByClassName('container')
// console.log(elmc)

// elmc[0].style.background = "Yellow"
// elmc[0].style.border = 'solid red 5px'
// elmc[0].style.padding = "50px"


// //how to add new class is elmc
// elmc[0].classList.add('bg-primary')
// // ....................remove

// spread operator and destruction
// arr = [1,2,3,4,5]
// function avg(a,b,c){
//     return (a+b+c)/3

// }
// console.log(avg(...arr))

// let arr = [4,5,6]
// let a = [1,2,3,...arr,7,8 ]


// obj1 = {
//     name:'vikas',
//     class:'4d',
//     gender:'male'
// }

// let obj2 = {...obj1, gender:'female'}

// //destructuring

//  let {a, b ,c }=obj1;   // stroe values of objects in obj1 in variables a,b,c
 
// let fs = require("fs");
// fs.readFile("file.txt","utf-8",(err,data)=>{
//     console.log(err,data);
// })
 
// console.log("this is eof")              //first this will be ececuted then read waala log......


//promises........mein pakka run ho jaunga, and jab run ho jaunga tab m .then waala execute karunga


// let fs = require("fs/promises")
// let a = fs.readFile("file.txt","utf-8");
// a.then((data)=>{
//     console.log(data);
// })
// console.log("this is eof")   // this will run first.... a is promised so when file is readed, then a.then will run as it promised



// //
// const readThreeFiles = async(f1,f2,f3)=>{             // here any of three can rn first...if i want a1 to run first then
//     let a1 = fs.readFile(f1, "utf-8")
//     let a2 = fs.readFile(f2, "utf-8")
//     let a3 = fs.readFile(f3, "utf-8")
//     let c1  = await a1
//     let c2 = await a2
//     let c3 = await a3

// }

// //map, filter, reduce
// //map
// a = [1,2,3,4]
// let a2 = a.map((value)=>{
//     return value+6
// })

// console.log(a,a2)

//filter

// a3 = a.filter((value)=>{
//     return value>6
// })                  // now a3 will have only those values which are greater than 6


// //reduce
// let a = [1,2,3,4]
// let a4 = a.reduce((val1,val2)=>{
//     return val1+val2
// })

// // //a4 = 1+2,3,4
// //         3+3,4
// //         6+4
// //         ==10




