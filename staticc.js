class stat{
     static  a=10;
    static increment()
    {
        this.a=++this.a;
    }
    greet()
    {
    console.log("hello");
    }
    
}
stat.increment();
console.log(stat.a);
stat.increment();
console.log(stat.a);
let ab=new stat();
ab.greet();


// class stat{
//     //let a=10;
//     increment(a)
//    {
//        this.a=++a;
//    }
//    print()
//    {
//        console.log(this.a);
       
//    }
// }
// let a=new stat()
// a.increment(10);
// console.log(a.print());
// a.increment();
// console.log(a.print());



