//objects using constructor function
let Employee=function(firstname,lastname,age){
    this.name=firstname;
    this.sirname=lastname;
    this.age=age;
    this.fullname=function(){
        return `${this.name} ${this.sirname} ${this.age}`
    }
}
let employee=new Employee("ambesh","singh",30);
let employee1=new Employee("gaurav","singh",40);
 console.log(" first name is :" +employee.name);
 console.log(" last name is :"+ employee.sirname);
 console.log(" age  is :" +employee.age);
 console.log(" full name is :"+employee.fullname());
 console.log(" first name is :" +employee1.name);
 console.log(" last name is :"+ employee1.sirname);
 console.log(" age  is :" +employee1.age);
 console.log(" full name is :"+employee1.fullname());
 console.log(" age  is :" +employee.age);
 //literal function
let obj={
    name:"ambesh",
    age:21,
    num:9922252402,
     abc : function(n){
        this.age=this.age+n;
        return(this.age);
    },
}
let obj1=obj;
let obj2=obj;
obj1.age=20;
obj2.age=30;
console.log(obj1.age);
console.log(obj2.age);





  