class ab{
    static b=0;
    constructor(b)
    {
        this.b= b+1 ;
    }
    print()
    {
        console.log("hello print");
        
    }
}
let a=new ab();
a.print();
let b=new ab();
console.log(ab.b);
//console.log(a);

