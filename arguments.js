let abc=function(){
    let sum=0;
    console.log(arguments.length);
    let number=[].slice.call(arguments);
   // let number=Array.prototype.slice.call(arguments);
    number.sort();
    console.log(number);
   for(let i=0;i<arguments.length;i++){         
        sum+=arguments[i];
    }
    return sum; 
}
console.log(abc(20,30,10,1, 7, 3,40));

