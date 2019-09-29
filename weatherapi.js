let request=require('request');
const url="https://api.darksky.net/forecast/29c64bac30787036fbce3754eea575aa/37.8267,-122.4233"
 request({url:url},(error,response)=>
 {
     const data=JSON.parse(response.body)
      console.log(data);
      

 })