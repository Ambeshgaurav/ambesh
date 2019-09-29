getemployeedetails();
function getemplyeedetails()
{
  employee.prototype.getname=function()
{
    return this.name.toUppercase();
}
}
function employee(name)
{
  this.name=name;
}
employee.prototype.getname=function()
{
    return this.name;
}
let a=new employee("ambesh");
let b=new employee("singh");
let c=new employee("gaurav");
let d=new employee("ambesh singh");
console.log(a.getname());
console.log(b.getname());
console.log(c.getname());
console.log(d.getname());
