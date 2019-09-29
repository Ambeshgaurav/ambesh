var fs=require("fs");
// let read=fs.readFileSync(__dirname+"/ambesh.txt","utf8")
// console.log(read);
// let read1=fs.readFile(__dirname+"/ambesh.txt","utf8",(err,data)=>{
//    console.log(data);
//    //console.log(err);
   
// })
// console.log("ambesh");

 
fs.readFile("ambesh.txt", (err, data) => {
  if (err) throw err
  console.log(data.toString())
});
