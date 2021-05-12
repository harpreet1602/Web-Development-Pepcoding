// let a=5;
// console.log(a);
// let b=5.5324;
// console.log(b);
// let c="harpreet";
// console.log(c);
// let d=`s`;
// console.log(d);
// for(let i=1;i<=10;i++)
// {
//     if(i%2==0)
//     {
//         console.log("even",i);
//     }
//     else{
//         console.log("odd "+i);
//     }
// }
// let i=0;
// while(i<10)
// {
//     console.log(i);
//     i++;
// }
// let arr=[1,2,3,'harpreet',true,10.5];
// console.log(arr);
// arr.push("singh");
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr[7]="tech";
// console.log(arr);
// arr.pop();
// console.log(arr);
// const arr1=[1,2,'bhavesh bansal'];
// arr1[4]='r';
// arr1.pop();
// arr1[1]=3;
// console.log(arr1[arr1.length-1]);
// console.log(arr1);

//string concatenation

// let a=["Red","Green","White"];
// let str="";
// for(let i=0;i<a.length;i++)
// {
//     str+=a[i];
// }
// console.log(str);


//frequently occuring element
let c=[1,2,3,2,5,6,5,6,6,7,7,7];
let ans=0,ele=0;
for(let i=0;i<c.length;i++)
{
    let count=1;
    for(let j=i+1;j<c.length;j++)
    {
        if(c[i]==c[j])
        {
            count++;
        }
    }
    if(count>ans)
    {
        ans=count;
        ele=c[i];
    }
}
console.log(ele+" "+ans+" times");

//2d array
let arr=[[1,2,3],[4,5,6],[7,8,9]];
// for(let i=0;i<arr.length;i++)
// {
//     for(let j=0;j<arr[i].length;j++)
//     {
//         //console.log(i,j);
//         console.log(arr[i][j]);
//     }
// }

//sum of 2d array
let sum=0;
for(let i=0;i<arr.length;i++)
{
    for(j=0;j<arr[0].length;j++)
    {
        sum+=arr[i][j];
    }
}
console.log(sum);

//flaten the 2d array
let b=[],pos=0;
for(let i=0;i<arr.length;i++)
{
    for(let j=0;j<arr[i].length;j++)
    {
       // b[pos++]=arr[i][j];
     //  b.push(arr[i][j]);
     b[(i*arr.length)+j]=arr[i][j];
    }
}
console.log(b);
let d=[1,2,3,4];
// for(let i=0;i<d.length;i++)
// {
//     d[i]+=2;
// }
// console.log(d);

//map method add two problem
function print(data,index)
{
    console.log(index,data);
}
d.map(print);
function addTwo(data,index)
{
    return data+2;   
}
d=d.map(addTwo);
console.log(d);

//delete all even numbers which are present in an array
let e=[1,2,3,4,5,6,7,8];
let f=[],x=0;
for(let i=0;i<e.length;i++)
{
    if(e[i]%2!=0)
    {
       // f[x++]=e[i];
       f.push(e[i]);
    }
}
console.log(f);

//filter method to remove all even
function removeEven(data,index)
{
    return data%2!=0;
}
e=e.filter(removeEven);
console.log(e);

//class 3
//string
let abc=123;
let m=1;
let n=2;
let o=3;
let str1="Harpreet";
let str2='singh';
let str3=`Pepcoding${abc}`;
let str4=`Champ coder ${m+n+o}`;
console.log(str1,str2,str3,str4);
console.log(str3[10]);
for(let i=0;i<str4.length;i++)
{
    console.log(str4[i]);
}
let t='';
for(let i=0;i<str3.length;i++)
{
    t+=str3[i]+" ";
}
console.log(t);

//Decimal to binary
let decnum='10';
let binnum=0;
let pow=1;
decnum=parseInt(decnum);
while(decnum!=0)
{
    rem=decnum%2;
    binnum+=rem*pow;
    pow*=10;
    decnum=Math.floor(decnum/2);
}
console.log(binnum);
//decimal to binary using string
function decimaltobinary(num)
{
let bin="";
while(num>0)
{
    rem=num%2;
    num=parseInt(num/2);
    bin=rem+bin;
}
console.log(bin);
}
decimaltobinary(parseInt("10"));
function binarytodecimal(binary)
{
    let ans=0,binarydigit=0,pow=0;
    for(let i=binary.length-1;i>=0;i--)
    {
        binarydigit=parseInt(binary[i]);
        ans+=binarydigit*Math.pow(2,pow);
        pow++;
    }
    console.log(ans);
}
binarytodecimal("1010");
let str="harpreet singh";
console.log(str.substring(3,7));
console.log(str.toUpperCase());
//Camel case
function camelcase(str)
{
let st='';
if(str[0]!=' ')
{
    st+=str[0].toUpperCase(); 
}
for(let i=1;i<str.length;i++)
{
    if(str[i-1]==' ')
   st+=str[i].toUpperCase(); 
   else
   st+=str[i];
}
console.log(st);
}
camelcase(" harpreet singh");
//pallindrome
function checkpallindrome(str)
{
    let i=0,j=str.length-1;
    while(i<j)
    {
        if(str[i]!=str[j])
        {
            return false;
        }
        i++;
        j--;
    }
    return true;
}
console.log(checkpallindrome("mada"));
//reverse every word
function reverseeveryword(str)
{
    let st="",temp="";
    for(let i=str.length-1;i>=0;i--)
    {
        if(str[i]==' '||i==-1)
        {
            st=temp+' '+st;
            temp='';           
        }
        else if(i==0)
        {
            st=temp+str[0]+' '+st;
        }
        else
        {
            temp+=str[i];
        }
    }
    console.log(st);
}
function reverseeveryword1(str)
{
    let st="",temp="";
    for(let i=str.length-1;i>=-1;i--)
    {
        if(str[i]==' '||i==-1)
        {
            st=temp+' '+st;
            temp='';           
        }
        else
        {
            temp+=str[i];
        }
    }
    console.log(st);
}
reverseeveryword("My Name is Harpreet");
//first character which is not duplicated
function firstOriginal(str)
{
    let count=0;
    let str1='';
    for(let i=0;i<str.length;i++)
    {
        count=0;
        for(let j=0;j<str.length;j++)
        {
            if(str[i]==str[j])
            {
                count++;
            }
        }
        if(count==1)
        {
            console.log(str[i]);
            break;
        }
    }
}
firstOriginal("abcdabcde");

// 2nd method for finding the first non repeating element
function nonRepeating(str)
{
   let obj=objectCharacterCount(str);
   for(let i=0;i<obj.length;i++)
   {
       if(obj[i].key==1)
       {
           console.log(obj[i]);
           break;
       }
   }
}
//nonRepeating("abcdabed");
//objects similar to hashing of dsa and dictionary in python
//key value pairs
// let obj={
//     "hello1":4.5612,
//     2:"hello2",
//     "hello3":"three"
// }
// obj[2]="singh";
// obj[2.3]="hello4";
// console.log(obj);
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(obj[2]);

//Character count and representing using object
function objectCharacterCount(str)
{
    let obj={};
    for(let i=0;i<str.length;i++)
    {
        if(obj[str[i]]==undefined)
        {
            obj[str[i]]=1;
        }
        else
        {
            obj[str[i]]++;
        }
    }
  //  console.log(obj);
    return obj;
}
//objectCharacterCount("harpreet");

//lookup profile

// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];
function lookUpProfile(name, prop){
// Only change code below this line
for(let i=0;i<contacts.length;i++)
{
    if(contacts[i].firstName==name && contacts[i][prop]!=undefined)
    {
        return contacts[i][prop];
    }
    else if(contacts[i].firstName==name && contacts[i][prop]==undefined)
    return "No such property";

}
    return "No such contact";

// Only change code above this line
}
console.log(lookUpProfile("Akira", "likes"));

//Representation of two arrays into one object
function twoArraysIntoObject()
{
    let a=[0,1,2,3];
    let b=['a','b','c','d'];
    let obj={};
    if(a.length!=b.length || a.length==0 || b.length==0)
    {
        console.log("Not possible");
    }
    else
    {
        for(let i=0;i<a.length;i++)
        {
            obj[a[i]]=b[i];
        }
    }
    console.log(obj);
}
twoArraysIntoObject();
//one line swap
function oneLineSwap(i,j)
{
    let a=[1,2,3,5,4];
    console.log("Before swap: "+a);
    [a[i],a[j]]=[a[j],a[i]];
    return a;
}
console.log(oneLineSwap(3,4));

//record collection

// Setup
var collection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(object, id, prop, value) {
    if(prop!='tracks'&&value!='')
    object[id][prop]=value;
    else if(prop=='tracks'&&object[id][prop]==undefined)
    object[id][prop]=[value];
    else if(prop=='tracks'&&value!='')
    object[id][prop].push(value);
    else if(value=='')
    delete object[id][prop];
    return object;
  }
  
  console.log(updateRecords(collection, 5439, 'artist', 'ABBA'));