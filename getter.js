// class person{
//     constructor(name)
//     {
//         this._name=name;
//     }
//     get first()
//     {
//         return this._name.toUpperCase();
//     }
//     set first(value)
//     {
//         if(value.length>2)
//         {
//             this._name=value;
//         }
//         else{
//             console.log("rejected");
            
//         }
//     }
// } 
// let test=new person("ambesh")
// console.log(test);
// //test.first="hello";
// console.log(test.first);
class Rectangle {
    constructor (width, height) {
        this._width  = width
        this._height = height
    }
    set width  (width)  { this._width = width               }
    get width  ()       { return this._width                }
    set height (height) { this._height = height             }
    get height ()       { return this._height               }
    get area   ()       { return this._width * this._height }
}
var r = new Rectangle(50, 20)
console.log(r.area === 1000);


