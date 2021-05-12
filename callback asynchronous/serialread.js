const fs=require("fs");
let sum1=0,length=8,filename=1;
function serialread(err,data)
{
    if(!err)
    {
        filename++;
        let arr=data.split("\n");
      //  console.log(arr);
        for(let k=0;k<arr.length;k++)
        {
            sum1+=parseInt(arr[k]);
        }   
        if(filename>length)
        {
        console.log(sum1);
        return;
        }
        fs.readFile((filename)+".html","utf-8",serialread);
    }
}
fs.readFile(filename+".html","utf-8",serialread);