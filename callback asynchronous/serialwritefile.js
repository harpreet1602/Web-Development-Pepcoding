const fs=require("fs");
let length=8;
let count=0;
function writefile(err)
{
    if(!err && count<length)
    {
    let nooflines=Math.floor(Math.random()*101);
    let str="";
    for(let j=1;j<=nooflines;j++)
    {
    let no=Math.floor(Math.random()*101);
    if(j==nooflines)
    str=str+no;
    else
    str=str+no+"\n";
    }
    count++;
    fs.writeFile(count+".html",str,writefile);   
    }
}
writefile(undefined);