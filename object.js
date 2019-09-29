
let class1={
    title:'about task',
    name:'name of the students',
    strength:'total number of students',
    length:15,
}
let class2={
    title:'about task',
    name:'name of the students',
    strength:'total number of students',
    length:10,
}
let fun=function(myobjects){
    return{
        format1:`hey the legth is ${myobjects.length}`,
        format2:`hey the length is ${myobjects.length}`
    }
}
//console.log(class1.title);
//console.log(fun(class2));
let abc=fun(class2);
console.log(abc.format2);


  