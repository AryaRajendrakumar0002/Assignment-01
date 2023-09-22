// program to find the sum of squares of array elements

const arr=[1,2,3,4,5];
let sum=0;
for(let i=0;i<arr.length;i++)
{
    sum+=arr[i]*arr[i];
}
console.log("sum of squares:",sum);