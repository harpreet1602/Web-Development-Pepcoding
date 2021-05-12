//ques 1
function search7(arr)
{
    let temp=0,rem=0;
    for(let i=0;i<arr.length;i++)
    {
        temp=arr[i];
        while(temp>0)
        {
        rem=temp%10;
        temp=temp/10;
        if(rem==7)
        {
            return "Boom!";
        }
        }
    }
    return "there is no 7 in the array";
}
arr=[2, 55, 60, 97, 86];
console.log(search7(arr));

//ques 2
let movements=[-10, 20, 10];
function trackRobot(movements)
{
    let x=0,y=0,gap=0;
    for(let i=0;i<movements.length;i++)
    {
        if(gap==4)
        gap=0;
        if(gap==0)
        {
            y=y+movements[i];
        }
        else if(gap==1)
        {
            x=x+movements[i];
        }
        else if(gap==2)
        {
            y=y-movements[i];
        }
        else if(gap==3)
        {
            x=x-movements[i];
        }
        gap++;
    }
    console.log("("+x+","+y+")");
}
trackRobot(movements);









//ques 3
let arr1=[true, false, false, true, false];
function countTrue(arr1)
{
    let count=0;
    for(let i=0;i<arr1.length;i++)
    {
        if(arr1[i]==true)
        count++;
    }
    return count;
}
console.log(countTrue(arr1));