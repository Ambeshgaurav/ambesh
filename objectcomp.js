
let ambesh={

    name1:"gaurav",
    age2:27,
}
let gaurav={
    name1:"gaurav",
    age2:27,
    //id:2,

}
// console.log(gaurav[name1]);

let check=(singh1,singh2)=>
{
    let a=Object.getOwnPropertyNames(ambesh);
    let b=Object.getOwnPropertyNames(gaurav);
    if(a.length!==b.length)
    {
         return false;
    }
    for(var i=0;i<a.length;i++)
    {
        let c=a[i];
        if(singh1[c]!==singh2[c])
           return false;
    }
  if(i==a.length)
  {
      return true;
  }

}
console.log(check(ambesh,gaurav));




// let check=(ambesh,gaurav)=>
// {
// let a=Object.getOwnPropertyNames(ambesh);
// let b=Object.getOwnPropertyNames(gaurav);
// for(var i=0;i<a.length;i++)
// {
//     console.log(a[i]);
//     var c=a[i];
//     console.log(ambesh[c]);
    
    
// }
// }
// var arr = ['a', 'b', 'c'];
// console.log(Object.getOwnPropertyNames(arr)); 
// let a={
//     name :"ambesh",
//     age:21,
//     id:1,
//     2:3,
// }
// console.log(Object.getOwnPropertyNames(a));






