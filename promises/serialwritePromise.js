const fs=require("fs");
function main(){
 let readpromise=writedata("1.txt");
 for(let i=2;i<=8;i++)
 {
     readpromise=readpromise.then(function(){
         console.log(i-1+" file written");
         return writedata(i+".txt");
     });
 }
 readpromise.then(function(){
     console.log("last file written");
 });
}
function writedata(filename)
{
    let nooflines=Math.floor(Math.random()*101);
    let str="";
    let data;
    for(let i=1;i<=nooflines;i++)
    {
        data=Math.floor(Math.random()*101);
        if(i!=nooflines)
        {
            str=str+data+"\n";
        }
        else
        {
            str=str+data;
        }
    }
    return fs.promises.writeFile(filename,str);
}
main();