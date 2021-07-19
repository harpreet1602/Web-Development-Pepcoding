let express = require("express");
// exprees ko use karne ke liye

let data = require("./data.json");
//data leliua json file sai
// console.log(data);


//ek naya server bnade but ye sirf create karti hai use chalu nhi karta

let server = express();
// server.get("/",function(req,res){
//     res.send("Hi");
// });
//localhost:port ke baad kuch bhi hoga usse ye get function catch karega and 
//match karega to corresponding function chala dega request and response ke sath
//aur abhi hum response pai send kar rhe hai to apne aap html ban ke uske beech mai ye message aarha hai 



// /movies ek end point hai specifically data deta hai 
//jaise yha json format mai data de rha hai
server.get("/movies",function(req,res){
    res.json(data);
});


//server data ki terms mai kaam karta hai to ye ek web api hai 
//code nhi bhejta 
//to isse hum front end sai call karke data use karsakte hai


server.get("/genre",function(req,res){
// let arr = [];
// let final =[];
// for(let i=0;i<data.length;i++)
// {
//     let flag=true;
//     // if(arr.includes(data[i]["genre"]["id"],0)==false)
//     for(let j=0;j<arr.length;j++)
//     {
//         if(data[i]["genre"]["_id"]==arr[j])
//         {
//             flag=false;
//             break;
//         }
//     }


//     if(flag==true)
//     {
//     arr.push(data[i]["genre"]["_id"]);
//     final.push(data[i]["genre"]);
//     }
// }

//     res.json(final);

let allGenreId = data.map(function(ele){
    return ele.genre;
});

let uniqueGenre = [];

for(let  i = 0; i < allGenreId.length ; i++){
    let genreId=allGenreId[i]["_id"];

    let index = uniqueGenre.findIndex(function(ele){
        return ele._id == genreId;
    });

    if(index==-1)
    {
        uniqueGenre.push(allGenreId[i]);
    }

}
res.json(uniqueGenre);

});
//terminal block kardega, continously code chala ke message ka wait kar rha hai
//ye line server ko shuru kardeti hai
//ek port par
server.listen(4000);

// http://localhost:3000      /
//ye request mari jisse server pai pahunchaege uske baad jo
// get hoga uspe function run kar sakte ho


// ye url hojaega

