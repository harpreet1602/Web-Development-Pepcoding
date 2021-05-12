// function print(val)
// {
//     console.log(val);
// }
// function sum(n1,n2,print)
// {
//     let ans=n1+n2;
//     print(ans);
// }
// sum(2,3,print);

const fs=require("fs");
// function print(err,data)
// {
//     if(!err)
//     {
//         console.log(data);
//     }
//     else
//     {
//         console.log(err);
//     }
// }
// fs.readFile("q1.html","utf-8",print);

//To yaha pai serially chal rha hai read karna webAPI mai aur callback function ko bhejna data
// or any error
// let count=0;
// function callback(err,data)
// {
//     if(!err)
//     {
//         console.log(data);
//         count+=1;
//         if(count<10)
//         {
//             fs.readFile("q"+(count+1)+".html","utf-8",callback);
//         }
//     }
// }
// fs.readFile("q1.html","utf-8",callback);

//to parallely read karna webAPIs pai vo loop ke through read karte vakt hoga
//kyuki ek baari readfile stack sai web api pai pahunchegi to uska iteration khatam 
//aur agla iteration chalu in the mean time webApi sai callbacks functions ke liye data
//parallely read hoga
for(let i=1;i<=10;i++)
{
    fs.readFile("q"+i+".html","utf-8",callback);
}
function callback(err,data)
{
    if(!err)
    {
        console.log(data);
    }
    else
    console.log(err);
}