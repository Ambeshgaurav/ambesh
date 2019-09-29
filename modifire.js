function employee(firstname,lastname)
{
    //public variable
    this.name=firstname;
    this.lname=lastname;
    //private variable
     let a;
    //private methods
    let fun=function()
    {
        a=firstname+lastname;
        return a;
    }
    //privelledged function
    this.getfullname=function()
    {
        return fun();
    }
    //public function
    employee.prototype.publicname=function()
    {
        return this.getfullname();
    }
}
let ab=new employee("ambesh","singh");
console.log(ab.getfullname());
console.log(ab.publicname());
console.log(ab.a);
console.log(ab.fun);



