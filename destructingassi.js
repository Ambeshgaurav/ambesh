//Destructing  assignment is new features in ES6 .Destructing providing great features in ES6 which
//helps us to extract or unpack data or properties from array and objects respectively.Destructing is
//javascript expression.
// while extracting data from array we take care of position and while extracting properties from 
// object  we take care of name of properties. we can extract properties only by same name as given in 
//object while in array we can extract data by any name but take care of position of data

// Destructing in array:
 let input=[10,1,20,30,40,69,86];
  let [a,b,c]=input  //extracting 3 data from array
  console.log(a,b,c);
  let [a1,...d]=input; //extracting single data in one variable ;rest data in another array by using rest operator
  console.log(a1,d);
  // swapping of two number by destructing properties
  let n1=10,n2=20;
  [n2,n1]=[n1,n2];
  console.log(n1,n2);



  //Destructing in objects
   let obj={
       name :"Ambesh",
       age:27,
       gender:"male",
       fun1()
       {
           console.log(`your name is ${this.name} and your age is  ${this.age} :`);
           
       }

   } 
  let {name,gender,age,fun1:gaurav}=obj;
  console.log(name);
  console.log(gender);
  console.log(age);
   gaurav();
   //obj.fun1();
  
  
  
  
   
  
  
  

