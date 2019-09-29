let a=new Date(2018,8,8);
let b=a.setFullYear(2019,0,1);
//console.log(b);
let c=new Date();
let d=Date.parse(c);
//console.log(d);
let diff=Math.abs(b-d);
//console.log(diff);
let days=(diff)/(1000*60*60*24);
let hours=(days-Math.floor(days));
console.log(Math.floor(days));
console.log((hours));




// let check=new Date("jan 1,2019");
// console.log(Date.parse(check));




