const fs=require("fs");
let readFilePromise=fs.promises.readFile("1.txt","utf-8");
console.log(readFilePromise);
//pending because it runs in webAPI
readFilePromise.then(function(data){
    console.log(readFilePromise);
    console.log(data);
    return "hello";
}).then(function(data){
    console.log(data);
}).then(function(data){
    console.log(data);
}).catch(function(err){
    console.log(readFilePromise);
})
console.log("I ran first");
readFilePromise.then(function(data){
    console.log("I ran last");
})