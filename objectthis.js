let abc={
    name:"Ambesh Singh",
    age:21,
    fname:"upendra singh",
    fage:51,
    input:function(num){
        this.age+=num;
    },
    output:function(){
        return `hello your age is ${this.age}`

    }
}
abc.input(4);
console.log(abc.output());

