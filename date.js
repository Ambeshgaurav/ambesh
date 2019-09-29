//  console.log(new Date());
//  let a=new Date("Septmber 9,2019,11:49:20");
//  console.log(a);
//  let b=new Date(2019,8,9,11,50,23,15);
//  console.log(b); 
//let a=new Date();
// let set =new Date(2019, 0, 1, 10, 33, 30, 0)
// let b=new Date();
// let set_month=set.getMonth()
// let current_month=b.getMonth()
// const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
// console.log(diffDays);
// var date1 = new Date("7/11/2010");
// var date2 = new Date("8/11/2010");
// //var diffDays = parseInt((date2 - date1) / (1000 * 60 * 60 * 24)); 
// let abc=parseInt((date2 - date1))
// console.log(abc);
//  let setdate = new Date(2019,0,1);
//  let currentdate = new Date();
//  let diffTime = Math.abs(setdate.getTime() - currentdate .getTime());
//  let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
//  console.log(diffDays);
let a=new Date("sep 9,2018")
console.log(Date.parse(a));
let b=new Date();
console.log(Date.parse(b));
let diff=Math.abs(a-b);
let days=((diff))/(1000*60*60*24);
console.log(days);  












 
 
  


