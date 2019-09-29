let a=121;
let temp=a;
let c=0,b;
while(a!=0)
{
     b=a%10;
    c=(c*10)+b;
    a=a/10;
}
console.log(c);

if(c==temp)
{
    console.log("yes");
    
}else{
    console.log("no");
    
}

