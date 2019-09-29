class ambesh
 {
    constructor(name,age)
    {
        this.name=name;
       this.age=age;
    }
    greet(name,age)
    {
        console.log(`hello to the class my name is ${this.name} and my age is ${this.age} `);
    }
}
class gaurav extends ambesh
{
    constructor(age,name)
    {
        super(name);
       this.age=age;
      // this.name=name
    }
     greet(name)
     {
         console.log(`${name}`);   
     }
     greettwice()
     {
         this.greet();
          this.greet();
          super.greet();
          super.greet();
     }

}
let a=new gaurav(21,"ambesh");
  a.greet("gaurav");
  a.greettwice();
