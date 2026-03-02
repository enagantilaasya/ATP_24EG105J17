//write a function that recevies an array as arg and return their sum
let findSum=function(array)
{
    let sum=0;
    for(let i=0;i<array.length;i++)
    {
        sum=sum+array[i]
    }
    return sum;
}
let arr=[90,65,78,99]
let result=findSum(arr)
console.log(`The sum of the array : ${result}`)