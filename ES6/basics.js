// Browser (without strict)

//case 1 globally this (window)
console.log(this); //window

//case 2 normal function this(window)
function f(){
    console.log(this);
}
f();

//case 3 direct function because stored as key value pair this(object)
let obj = {
    prop1: 1,
    f: function(){
        console.log(this);
    }
}
obj.f();

//case 4 indirect function because not stored as key value pair this(window)
let obj2 ={
    prop1: 1,
    f: function () {
        function f2(){
            console.log(this);
        }
        f2();
    }
}
obj2.f();

"use strict"
a = 2
console.log(a)

function f(a,a)
{
    console.log(a);
}
f(a,a)






// Browser (with strict)

//case 1 globally this (window)
console.log(this); //window

//case 2 normal function this(window)
function f(){
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

//case 4 indirect function because not stored as key value pair this(window)
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

//chal nhi rha strict vala

function Pet(name){
    this.name = name;
    this.getName = () => this.name
}
const cat = new Pet("Fluffy");
console.log(cat);
console.log(cat.getName());
const { getName } = cat;
console.log(getName());

function vehicle(model, speed){
    this.model = model;
    this.speed = speed;
    function speedMeter(){
        console.log(this.speed);
    };
}
let mercedes = new vehicle("sclass",24);
console.log(mercedes);
mercedes.speedMeter(); //chal nhi rha

