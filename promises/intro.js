let a=1;
let ePromise=new Promise(function(res,rej){
    if(a%2==0){
        res("yes! number is even");              // w1 work
    }
    else{
        rej("Oh! number is odd");
    }
});
console.log(ePromise);
                                                //callback for w2 work
ePromise.then(function(data)
{
    console.log(data);
}).catch(function(err){
    console.log(err);
});