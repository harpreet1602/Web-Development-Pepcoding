const fs=require("fs");
let filename=0,length=8,sum=0;
function readfun()
{
    for(let i=1;i<=length;i++)
    {
        fs.readFile(i+".html","utf-8",parallelread.bind(this,i));
    }
}
readfun();
function parallelread(fileno,err,data)
{
    if(!err)
    {
        filename++;
        let arr=data.split("\n");
      //  console.log(arr);
        for(let k=0;k<arr.length;k++)
        {
            sum+=parseInt(arr[k]);
        }   
        console.log(fileno+"has been read");
        if(filename==length)
        {
        console.log(sum);
        return;
        }
    } 
}