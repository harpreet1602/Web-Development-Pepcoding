// Browser (without strict)

//case 1 globally this (window)
// console.log(this); //window

//case 2 normal function this(window)
// function f(){
//     console.log(this);
// }
// f();

//case 3 direct function because stored as key value pair this(object)
// let obj = {
//     prop1: 1,
//     f: function(){
//         console.log(this);
//     }
// }
// obj.f();

//case 4 indirect function because not stored as key value pair this(window)
// let obj2 ={
//     prop1: 1,
//     f: function () {
//         function f2(){
//             console.log(this);
//         }
//         f2();
//     }
// }
// obj2.f();

'use strict'
// a = 2
// console.log(a)
//error aayega variable not defined

// function f(a,a)
// {
//     console.log(a);
// }
// f(a,a)

//error aayega duplicate parameter name not allowed






// Browser (with strict)

//case 1 globally this (window)
console.log(this); //window

//case 2 normal function this(undefined)
function f(){
    "use strict";
    console.log(this);
}
f();

//case 3 direct function because stored as key value pair this(object)
let obj1 = {
    prop1: 1,
    f: function(){
        console.log(this);
    }
}
obj1.f();

//case 4 indirect function because not stored as key value pair this(undefined)
let obj3 ={
    prop1: 1,
    f: function () {
        function f2(){
            console.log(this);
        }
        f2();
    }
}
obj3.f();

//chal nhi rha strict vala sabke saath ye sirf alag sai hi chalega baaki sabko comment karke
/*
function Pet(name){
    this.name = name;
    this.getName = () => this.name
}
const cat = new Pet("Fluffy");
console.log(cat);
console.log(cat.getName());
const { getName } = cat;
console.log(getName());
*/
// function vehicle(model, speed){
//     this.model = model;
//     this.speed = speed;
//     this.speedMeter= ()=>{
//         console.log(this.speed);
//     };
    
// }
// let mercedes = new vehicle("sclass",24);
// console.log(mercedes);
// mercedes.speedMeter(); 

