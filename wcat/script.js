#!/usr/bin/env node
const fs=require("fs");
// let data=fs.readFileSync("D:\\NEW DATA\\pp-9 dev\\wcat\\abc.txt","utf-8");
// console.log(data);
// fs.writeFileSync("def.txt","I am very good");
//console.log(process.argv);
// let filename1=process.argv[2];
// let filename2=process.argv[3];
// let data1=fs.readFileSync(filename1,"utf-8");
// let data2=fs.readFileSync(filename2,"utf-8");
// console.log(data1+"\n"+data2);

// let processdata=process.argv;
// let data="";
// for(let i=2;i<processdata.length;i++)
// {
//     data+="\n"+fs.readFileSync(processdata[i],"utf-8");
// }
// console.log(data);

let processdata=process.argv;
let data="",temp="";
if(processdata[2]=='a')
{
    temp=fs.readFileSync(processdata[3],"utf-8");
    fs.writeFileSync(processdata[3],temp+"\n"+processdata[4]);
}
else if(processdata[2]=='w')
{
    fs.writeFileSync(processdata[3],processdata[4]);
}
else if(processdata[2]=='ns')
{
    let tempData,characters,finaldata="";
    for(let i=3;i<processdata.length;i++)
    {
    tempData=fs.readFileSync(processdata[i],"utf-8");
    characters=tempData.split(" ");
    finaldata=characters.join("");   
    data+="\n"+finaldata;
    }
    
}
else if(processdata[2]=='nes')
{
    let tempData,characters,finaldata="";
    for(i=3;i<processdata.length;i++)
    {
    tempData=fs.readFileSync(processdata[i],"utf-8");
    characters=tempData.split("");
    for(j=0;j<characters.length;j++)
    {
        if(characters[j]==" "||characters[j]=="\r"||characters[j]=="\n")
        continue;
        else
        finaldata+=characters[j];
    }
    }
    data+=finaldata;
}
else if(processdata[2]=='n')
{
    let tempdata,finaldata="",lines,count=1;
    for(let i=3;i<processdata.length;i++)
    {
    tempdata=fs.readFileSync(processdata[i],"utf-8");
    lines=tempdata.split("\n");
    if(lines.includes("\r"))
    lines=tempdata.split("\r\n");
    for(let j=0;j<lines.length;j++)
    {
    finaldata+=(count++)+"."+lines[j]+"\n";
    }
    }
    data+=finaldata;
}
else
{
let line="";
let iUpdated=false;
let tempdata="";
for(let i=2;i<processdata.length;i++)
{
    if(processdata.includes("ne"))
   {
    if(iUpdated==false)
    {
        i=i+1;
        iUpdated=true;
    }
    tempdata=fs.readFileSync(processdata[i],"utf-8");
    lines=tempdata.split("\n");
    if(tempdata.includes("\r"))
    {
        lines=tempdata.split("\r\n");
    }
    let finaldata="";
    for(let j=0;j<lines.length;j++)
    {
        if(lines[j]!="")
        finaldata+=lines[j]+"\n";
    }
    data+=finaldata;
   }
    else
    data+=fs.readFileSync(processdata[i],"utf-8")+"\n";
}
}
console.log(data);