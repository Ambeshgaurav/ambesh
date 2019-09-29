let b=(...c)=>  //rest operator
{
    let sum=0;
    for(let i=0;i<c.length;i++)
    {
       sum+=c[i];
    }
    return `Total sum equal to is ${sum}`;  // use of template  literal 

}
console.log(b(10,20,30,40));

//string
let s1 = 'foo';
s1[1]="1"
var s_obj = new String("gaurav");
s_obj="ambesh";
console.log(s1);
console.log(s_obj);
console.log(typeof s1);
console.log(typeof s_obj );

let g="amjesh";
g[2]='b';
console.log(g.length);

console.log(g[2]);



