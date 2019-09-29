let ambesh={
    id1:1,
    name1:"ambesh",
     age:21,
     greet()
     {
         console.log("hello gaurav");
         
     }
}
let gaurav={
    id:1,
    name:"ambesh",
    age:21,
    greet()
    {
        console.log("hello Ambesh");
        
    },
    gender :"male",
}

console.log(Object.is(ambesh, gaurav)); // this function compare two object are equal or not 
//console.log(_.isEqual(ambesh,gaurav)); // this function will work only on browser not in console 
// this function comaparing all the properties of both object
console.log(ambesh.id1===gaurav.id);
console.log(ambesh.name==gaurav.name);
console.log(ambesh.age===gaurav.age);
console.log(ambesh.greet()===gaurav.greet());

