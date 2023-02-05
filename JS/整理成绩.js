const path = require("path");
const fs = require('fs');
const http = require("http")
const server = http.createServer()
server.on("request",req=>{
    const str = "Your request url is${req.url} ,requset method is ${req.method}"
    console.log(str);
})
server.listen(8080,()=>{
    console.log('server running at http://127.0.0.1');
})
fs.readFile( path.join( __dirname,"/成绩.txt"),'utf8',function(err,result){
    // console.log(err);
    if(err){
        console.log("读取文件失败!\n"+err.mesage);
    }
    else{
          console.log("读取文件成功!" );
    }
  
   const arrOld = result.split(" ");
   const arrNew = [];
   arrOld.forEach(item=>{
    arrNew.push(item.replace("=",":"))
    
   })
const newStr = arrNew.join("\r\n");

fs.writeFile(path.join(__dirname,"/成绩_ok.txt"),newStr,function(err,result){
    if(err){
        console.log("写入文件失败!\n"+err.mesage);
    }
    console.log("写入文件成功!" );
   
 })
})