// let a="ambeshsingh@gmail.com"
// let patt1 = /@+/;
// let result = a.match(patt1);
// if(result)
// {
//     console.log("true");
    
// }
// else {
//     console.log("false");
    
// }
function validateEmail(input){      
    let email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    console.log(email.test(input));
     
  } 
        let check="lpuambeshgaurav@gmail.in";
       validateEmail(check);


function phonenumber(input)
{
    let numberpattern=/^\+91[0-9]{8,10}$/;
    console.log(numberpattern.test(input));
}
let phone_check ="+9188965254561";
phonenumber(phone_check);

       
        
  
