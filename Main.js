// console.log('Hello Node')

// function Sum(a,b){
//     return a+b
// }

// console.log(Sum(5,2))

// const Sum=(a,b)=>{
//     return a+b
// }

// console.log(Sum(10,7))

// console.log(process.argv)

// console.log(Sum(Number(process.argv[2]),Number(process.argv[3])))

// console.log(Sum(+process.argv[2],+process.argv[3]))

// const Multi = require('./LocalModule')

// const Sous = require('./LocalModule')

// console.log(Multi(+process.argv[2],+process.argv[3]))

// console.log(Sous(+process.argv[2],+process.argv[3]))

// const ghazi = require('./LocalModule')

// console.log(ghazi.Multi(+process.argv[2],+process.argv[3]))

// console.log(ghazi.Sous(+process.argv[2],+process.argv[3]))

const {Multi,Sous} = require('./LocalModule')

console.log(Multi(+process.argv[2],+process.argv[3]))

console.log(Sous(+process.argv[2],+process.argv[3]))