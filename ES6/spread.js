let a = [1, 2];
 
let b = [3, 4];

let c = [a, b];

let d = [...b, ...a];

console.log(a);
console.log(b);
console.log(c);
console.log(d);

let o1 = {
    key1: 1,
    key2: 2, 
};

let o2 = {
    key3: 3,
    key4: 4,
    ...o1,
};

//yha pai key value pairs la rhe hai 

console.log(o2);
// let  o3 = {
//     key3: 3,
//     key4: 4,
//     key1: 1,
//     key2: 2,
// }


let p=[4,5,6,7];

console.log(p.slice(1,3));

console.log(p.slice(2));


//Task 1.1
let q = [4,8,7,9,12,13,16];
let r=[];
for(let i=0;i<q.length;i++)
{
    r.push(q[i]);
}
let k=3,i=r.length;
while(i>=k)
{
    r[i+1]=r[i];
    i--;
}
r[++i]=3;
console.log(r);

// task1.2
