// async function abc(){
//     console.log("hello");
//     return "abc";
// }
// let temp=abc();
// console.log(temp);
// //async keyword takes each and every line and put in promise return will become resolve
// //throw will become reject
// function bcd()
// {
//     return new Promise(function(res,rej){
//         console.log("hello");
//         res("abc");
//     });
// }
// console.log(bcd());
// async function cde()
// {
//     console.log("hello");
//     throw 'cde';
// }
// //console.log(cde());

const fs =require("fs");

//1.Conversion of async await to promise

// async function abc(){
//     let data=await fs.promises.readFile("abc.txt","utf-8");
//     console.log(data);
//     throw "error";
// }
// console.log(abc());
// abc().then(function(data){
//     console.log(data);
// }).catch(function(err){
//     console.log(err);
// })


// function abc(){
//     return new Promise(function(res,rej){
//         fs.promises.readFile("abc.txt","utf-8").then(function(data){
//             console.log(data);
//             rej("error");
//         })
//     })
// }
// let pro=abc();
// pro.then(function(data){
//     console.log(pro);
//     console.log(data);
// }).catch(function(err){
//     console.log(pro);
//     console.log(err);
// })
// // console.log(pro);

//2.Conversion of async await to promise

// async function abc()
// {
//     await fs.promises.writeFile("abc.txt","hello");
//     let data= await fs.promises.readFile("abc.txt","utf-8");
//     console.log(data);
//     return "how are you";     
// }
// async function main()
// {
//     let data=await abc();
//     console.log(data);
// }
// main();
//async ko remove karna hai jo bhi sab hai function mai vo sab new promise mai daalna hai
//await ko hata ke .then bana dena ,data uske beech mai milta hai
// function abc()
// {
//     return new Promise(function(res,rej){
//         fs.promises.writeFile("abc.txt","hello").then(function(){
//         fs.promises.readFile("abc.txt","utf-8").then(function(data){
//         console.log(data);
//         res("how are you");
//         });
//     })
//  });
// }
// function main()
// {
//     return new Promise(function(res,rej){
//         abc().then(function(data){
//             console.log(data);
//         })
        
//     });
// }
// main();
fs.promises.writeFile("1.txt","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
let p1=fs.promises.readFile("1.txt","utf-8");
p1.then(function(data)
{
    console.log(data);
    console.log("p1 completed");
    return data;
})
let p2=fs.promises.readFile("abc.txt","utf-8");
p2.then(function(data){
    console.log(data);
    console.log("p2 completed");
    return data;
});
let combinedPromise=Promise.all([p1,p2]);
console.log(combinedPromise);
combinedPromise.then(function(data)
{
    console.log(data);
}).catch(function(err){
    console.log(err);
});