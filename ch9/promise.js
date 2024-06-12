// 1.
// var pro1 = new Promise(function(resolve, reject){

// })
// pro1.then(function(result){
//     console.log('result', result)
// })

// 2.
// var pro1 = new Promise(function(resolve, reject){
//     resolve('success')
// })
// pro1.then(function(result){
//     console.log('result', result)
// })

// 3.
// var pro1 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve('success')
//     }, 1000)
// })
// pro1,then(function(result){
//     console.log('result', result)
// })

// 4.
// function pro1(){
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//             resolve('success')
//         }, 1000)
//     })
// }
// pro1().then(function(result){
//     console.log('result', result)
// })

// 5.
// function pro1(){
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//             resolve('success')
//         }, 1000)
//     })
// }
// function pro2(){
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//             resolve('pro2 success')
//         }, 1000)
//     })
// }
// pro1().then(function(result){
//     console.log('result1', result)
//     pro2().then(function(result){
//         console.log('result2', result)
//     })
// })
