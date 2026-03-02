let a=[90,78,65,98]
let small=a[0]
for(let i=0;i<a.length;i++)
{
    if(small>a[i])
    {
        small=a[i]
    }
}
console.log("smallest is"+small)