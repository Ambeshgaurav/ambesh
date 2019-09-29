let r1=require("readline");
let p=r1.createInterface(process.stdin,process.stdout);
p.question("Enter the number",function(n1){
p.question("Enter the number",function(n2){
    console.log(+n1+(+n2));
    process.exit();
});
});