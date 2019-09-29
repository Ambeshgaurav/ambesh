let number=[10,20,30,40];

let sum=(...add)=>
{
    let total_sum=0;
    for(let i=0;i<add.length;i++)
    {
       total_sum+=add[i];
    }
    return(total_sum);
}
console.log(sum(10,20,30,40,50));
