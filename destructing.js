// let a=10;
// let b=5;
//   [b,a]=[a,b];
//  console.log(a);
//  console.log(b);
// let number=[10,20,30];
// [a,...b]=number
// console.log(a);
// console.log(b);
// let a=[1,10,20];
// [b, ,c]=a;
// let a=[10,12,20]
// console.log(b,c);
// let [a,b]=[10,12,13];
// console.log(a,b);
let a={
    name:"ambesh",
    age:27,
    greet()
    {
        console.log("hello every one");
        
    }
}
let {name,age,greet:ambesh}=a;
console.log(name,age);
//greet();
ambesh();





 
 
