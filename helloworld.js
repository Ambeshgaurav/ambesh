/*console.log('jai hanumang ji welcome ambesh')
let ab="ambesh Singh"
let bc=100
let aba="gaurav singh"
console.log(ab)
console.log(bc)
console.log(aba)
let name="anchal";
var anm="ambesh ";
if(true)
{
    console.log(name);
    let name1="gauravsingh";
    console.log(name1);
    var abc="ambesh singh";
    console.log(anm);
}
console.log(name);
//console.log(name1);
console.log(abc);*/
//const arr=["ambes","gau","abc",1,2,2.0];
/*console.log(arr);
console.log(arr);
console.log(arr.length);
console.log(arr[0]);
console.log("last element is " + arr[arr.length-1]);
console.log("hello world 2");
console.log(`hello world ${arr[arr.length-1]} is`);

console.log(arr.shift());
console.log(arr);
console.log(arr.unshift("ambesh"));
console.log(arr);
const arr=["amb","gau","anc","akas"];
arr.pop();
console.log(arr);
arr.push("ambesh");
arr.push(5);
console.log(arr);
arr.splice(2,1);
console.log(arr);
arr.splice(3,1,"anchal");
console.log(arr);*/
//fuction
// let am=function(n1,n2)
// {
//     console.log("hello every one ");
//     console.log(n1+n2);
//     console.log("my name is ambesh ");
//     console.log(`total result is ${n1+n2}`);
    
// }
// // let a=6;
// // let b=7;
// am(6,7);
// let amb =function(name)
// {
//  console.log("Hello world my name is :"+ name);
// }
// let name ="ambesh";
// amb(name);
// let my_adder=function(n1,n2)
// {
//     result=n1+n2;
//     return(result);
// }
// result=my_adder(7,8);
// console.log(result);
// let my_adder=function(n1,n2)
// {
//     return(n1+n2);
// }
// console.log(my_adder(7,9));
//foreach loop
// const days=['mon','tue','wed','thu','fri','sat','sun'];
// days.forEach(function(day,index)
// {
//     console.log(index+1,day); 
    
// })
// assignment
// const aakash=[];
// aakash.unshift("Buy bread");
// aakash.unshift("record video for youtube");
// aakash.unshift("go to gym");
// for(i=0;i<aakash.length;i++)
// {
//     console.log(aakash[i]);
    
// }
//assignment for calculating grade 
// let assi=function(n1,n2,gt)
// {
//     var c=((n1+n2)*100)/gt;
//     console.log(c);
    
//     if(c>=90)
//     {
//         return("A");
//     }
//     else if(c<90 && c>=80)
//     {
//         return("B");
//     }
//     else 
//     {
//         return("fail");
//     }
// }
// console.log("your result is "+assi(100,70,200));

// object creation in  javascript
// let myDetails={
//     Name:"Ambesh Singh",
//     Age: 21,
//     Address : "varanasi Uttarpradesh",
//     fathe_Name:"upendra singh"
// }
// console.log(myDetails);
// console.log(`my name is ${myDetails.Name} and my father name is ${myDetails.fathe_Name}`);
// let ambesh={
//     meeting:0,
//     meetdone:0,
//     days:"monday"
// }
// let addmetting=function(todo,meet=0)
// {
//   todo.metting=todo.meeting+meet;
// }
// let mettingdone=function(todo,meet=0)
// {
//   todo.meetdone=todo.meetdone-meet;
// }
// let reset=function(todo)
// {
//     todo.meeting=0;
//     todo.meetdone=0;
// }
// let summary=function(todo)
// {
//   let left=todo.meeting-todo.meetdone;
//   return(left);
// }
// addmetting(ambesh,4);
// addmetting(ambesh,2);
// mettingdone(ambesh,4);
// console.log(summary(ambesh));
// let ambesh={
//     name :"ambesh",
//     age:22,
//     class:"general",
//      abc:function(){
//         console.log(this);
//     }
// }
// ambesh.abc();
// let ambesh={
//     name :"ambesh",
//     age:22,
//     class:"general",
//      abc:function(num){
//         this.age=this.age+num;
//         console.log(this.age);
        
//     }
// }
// ambesh.abc(4);
//user and password check
// let user="ambeshk";
// let pass="@gghikhm";
// let userchecker=function(user1){
//     if((user.includes(123))&& (user.length>6)){
//         return true;
//     }
//     return false;
// }
// let passchecker=function(pass)
// {
//     if((pass.includes(123)) && (pass.length>6)){
//         return true;
//     }
//     return false;
// }
// console.log(userchecker(user));
// console.log(passchecker(pass));
// to fixed decimal number upto
// let a=22;
// let b=7;
// c=a/b;
// console.log(c.toFixed(4));
//arrow function
// let ambesh=[{
//     title:"ambesh",
//     isdone:true,
// },
// {
//     title:"Gaurav",
//     isdone:true,
// },
// {
//     title:"ambesh singh",
//     isdone:false,
// }]
// let dosomething=ambesh.filter((todo)=>todo.isdone==true) 
//  console.log(dosomething);
 //try catch handling
 alert("file is attached")
 let rupees=(dollar)=>{
     if(typeof dollar=='number'){
         return dollar*64;
     }else{
         throw Error("number not in the form of integer");
         
     }
 }
  try {
      let myvalue=rupees('6');
      console.log(myvalue);
  }catch(e){
      console.log(e);
      
  }
  console.log("my name is ambesh");
  



















