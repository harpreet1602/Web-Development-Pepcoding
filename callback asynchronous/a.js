// let a= true;
// setTimeout(function(){
//     a=false;
// },1000);                         //infinite times hello will be printed because stack 
                                    //will not get empty           
// while(a)
// {
//     console.log("hello");
// }

// let a=true;
// setInterval(()=>{
//     if(a) console.log("hello");
// },1000);                                //10 times hello will be printed and setInterval
                                           //will never get closed here
// setTimeout(()=>{
//     a=false;
// },10070);

let inter=setInterval(()=>{
    console.log("Hello");
},1000);                        //hello will be printed 9 times and setInterval will be cleared
                                //by storing it in a variable and clearing it after 10 sec
setTimeout(()=>{
    clearInterval(inter);
},10000);