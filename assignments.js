// for(var i=0;i<10;i++){
//  console.log("i>>>>",i);
//  setTimeout(function()
//  {
//      console.log(i);
     
//  },1000)
// }
// for(let i=0;i<10;i++){
//     console.log("i>>>>",i);
//     setTimeout(function()
//     {
//         console.log(i);
        
//     },1000)
//    }
// var a=10;
// let func=()=>{
//     console.log(a);
//     for(var a=1;a<5;a++)
//     {
//         console.log(a);
        
//     }
//     console.log(a);
// }
// func();
// let a=("success" && "not success")||1;
// console.log(a);
// function abc()
// {
//     console.log(b);
// }
// let b="delta";
// abc();
// function abc()
// {
//     console.log(b);
// }
// abc();
// let b="delta";
// let a=new Date();
// const day=['Sunday','monday','Tuesday','wednesday','Thursday','Friday','Saturday']
// console.log("Today is:",day[a.getDay()]);
// let a=Date.now();
// let b=a/(1000*60*60);
// console.log(b);
// var x = [typeof x, typeof y][1];

// console.log(typeof typeof x);
// for(let i = 0; i<10; i++){
//     console.log("i >>>>" , i);

//                 setTimeout(function(){
//                     console.log(i);
//     },1000)
// }
    
    // for(let i = 0; i<10; i++){
    //     console.log("i >>>>" , i);
    //                 setTimeout(function(){
    //                     console.log(i);
    //     },1000)
    //     }
    let a=new Date();
    let hours=a.getHours();
    let minute=a.getMinutes();
    let second=a.getSeconds();
    if(hours<12)
    {
      var hours_format=(hours)%12;
      hours_format+=" AM"
    }
    else{
         hours_format=(hours)%12;
      hours_format+=" PM";
    }
    console.log("current time is: "+ hours_format+" :"+minute+" :"+second);
    

    
    

    







