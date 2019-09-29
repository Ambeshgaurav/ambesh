
let check=(input)=>{      
    let email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}(.[a-zA-Z]{2,4})?$/;
    console.log(email.test(input));
     
  } 

        let input="lpuambeshgaurav@gmail.comf6";
         check(input);