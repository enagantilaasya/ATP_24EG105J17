/*write a function that recevies an array and search element as args
 and returns the index of that search element in the array.It should "not found"
 when search element not found*/
let arraySearch=function(arr,find)
{
    let i=0;
    for(i=0;i<arr.length;i++)
    {
        if(arr[i]===find)
        {
            return i;
        }
    }
    return -1;
}
let array=[10,78,3,83,93,88]
let result=arraySearch(array,93)
if(result===-1)
{
    console.log("Not Found");
}
else
{
    console.log("Element found at index :",result)
}