//1  destructuring
let a =["Ram","Shyam","Rahul","Dhyam"];

let [b,c,d] = a;

console.log(a);
console.log(b);
console.log(c);
console.log(d);

//2 idhar beech ke values ko ignore kardega and apne baari mai apne vale index sai hi value lega array sai

let [e, , ,g] = a;
console.log(e);
console.log(g);


//objects mai ye concept
let h = {
    x: "alpha",
    y: "beta",
    w: {z:"gamma"},
};
//isme same key pai hoga same varable to obj mai us key pai search karke value le aao
let {x} = h;
console.log(h);
console.log(x); 

let {y} = h;
console.log(y);
//sirf z define hua hai ki w ke andar z le aaye hai
//w declare nhi horha z horha hai

let {
     w: { z }, 
    } =h;
console.log(z); 
//2nd method 
// let {z} = h.w;
// console.log(z);