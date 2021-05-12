setTimeout(function(){
    console.log("hello1");
    },1000); //time in milli seconds
    //asynchronous function so every function will run in web API so after 1sec,2sec and 5 sec we will get the answer
    //if it was synchronous then it will be called one by one like 1 sec,3sec and 8 sec we will get the answer  
    setTimeout(function(){
        console.log("hello2");
    },2000);
    setTimeout(function(){
        console.log("hello5");
    },5000);