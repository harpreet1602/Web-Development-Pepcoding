const fs=require("fs");
function writeparallel(file)
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
    return fs.promises.writeFile(file,str);
}
function main()
{
    for(let i=1;i<=8;i++)
    {
        let readpromise=writeparallel(i+".txt");
        readpromise.then(function(){
            console.log(i+".txt has been written");
        })
    }
}
main();