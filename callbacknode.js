var rect=require("./rectangle");

   function solve (l,b)
   {
    console.log("solving for  rectangel where l=:" +l+ " and b is "+b);
    rect(l,b,(err,rectangle)=>
    {
      if(err)
      {
          console.log("Error is "+err.message);  
      }
      else{
          console.log("the area of rectngle is "+rectangle.area());
          console.log("the perimeter of rectngle is "+rectangle.perimeter());
          
      }
    });
    console.log("this statements is after call of rect()");
    
   }
   solve(10,20);
   solve(5,6);
   solve(6,7);
   solve(-1,2)
    
    

