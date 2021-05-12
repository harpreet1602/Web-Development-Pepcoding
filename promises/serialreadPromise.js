const fs=require("fs");
function  main()
{
let readfilePromise=readfile("1.txt");
for(let i=2;i<=8;i++)
{
   readfilePromise=readfilePromise.then(function(data){
    console.log(i-1+" file has been read");
    //console.log(data);
    return readfile(i+".txt");
});
}
    readfilePromise.then(function(data){
        console.log("last file has been read");
        //console.log(data);
    })
}
function readfile(file){
    return fs.promises.readFile(file,"utf-8")
}
main();