// var a=0,b=1;
// for(let i=1;i<=10;i++)
// {
//     console.log(a);
//     let c=a+b;
//     a=b;
//     b=c;
//     //console.log(b);
// }
let gradeFunction=function(currentmarks,totalmarks){
    let percentage=(currentmarks/totalmarks)*100;
     let grade='';
     if(percentage>=90){
         grade='A';  
     }
     else if(percentage<90 && percentage>=80){
        grade='B';  
    }
   else if(percentage>=55 && percentage<80){
        grade='C';  
    }
    else if(percentage>=40 && percentage<55){
        grade='D';  
    }
    else{
        grade='F';  
    }
    return "my percentage is" +percentage+" and grade is"+grade;
}
console.log(gradeFunction(500,600));
