const fs=require("fs");
let length=8;
function write()
{
    for(let i=1;i<=length;i++)
    {
        let nooflines=Math.floor(Math.random()*101);
        let str="";
        for(let j=1;j<=nooflines;j++)
        {
            let data=Math.floor(Math.random()*101);
            if(j==nooflines)
            str=str+data;
            else
            str=str+data+"\n";
        }
        fs.writeFile(i+".html",str,writefile.bind(this,i));
    }
}
function writefile(filename,err)
{
    if(!err)
    {
        console.log(filename+" file written");  
    }
}
write();