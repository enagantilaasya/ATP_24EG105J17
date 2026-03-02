//write a funtion that recevies 3 numbers args and return the big number
let findLargest=function(a,b,c)
{
    let large=0;
    if(a>b)
    {
        if(a>c)
        {
            large=a;
        }
        else
        {
            large=c;
        }
    }
    else
    {
        if(b>c)
        {
            large=b;
        }
    }
    return large;
}
let result=findLargest(100,20,98)
console.log(`The largest number is ${result}`)
console.log("largest number :",result)