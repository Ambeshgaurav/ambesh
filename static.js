// function circle(Radius)
// {
//     radius=Radius;
//     circle.PI=3.14;
//     this.area=function()
//     {
//         return circle.PI*radius*radius;
//     }
// }
// let area1=new circle(20);
// console.log(area1.area());
function length(){
    length.count=++length.count;
    length.fun=function()
    {
         console.log("counting value for every instance");
         return (length.count)
         
    }
}
let obj=new length();
let obj1=new length();
let obj2=new length();
let obj3=new length();
let obj4=new length();
console.log(length.fun());


