// (function () {
//     var foo = function () { return 1; }
//     foo() === 1;
//     (function () {
//         var foo = function () { return 2; }
//         foo() === 2;
//     })();
//     foo() === 1;
// })();

//  {
//     function foo () { return 1 }
//     console.log(foo() === 1);
    
//     {
//         function foo () { return 2 }
//        console.log( foo() === 2);
       
//     }
//    console.log( foo() === 1);
   
// }
// console.log(['1','7','11'].map(parseInt));
function f (x, y) {
    var a = Array.prototype.slice.call(arguments,2);
    return (x + y) * a.length;
};
console.log(f(1, 2, "hello", true, 7) === 9);


