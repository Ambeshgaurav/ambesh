let input1=[1,2,4,5];
let input2=[5,6,7,8];
// let input3=[...input1,...input2];
// console.log(input3);
input2.map((n)=>
{
    input1.push(n);
})
console.log(input1);


