const path = require("path");
const fs = require('fs');
const http = require("http")
const server = http.createServer()
server.on("request",(req,res)=>{
    const url = req.url;
    const fpath = path.join(__dirname,url)
    // const str = "Your request url is${req.url} ,requset method is ${req.method}"
    // console.log(str);
    // res.setHeader("Content-Type","text/html",'charset=utf-8')
    // res.end(str);
fs.readFile( fpath,'utf8',function(err,result){
    // console.log(err);
    if(err){
      return res.end("404 Not found");
    }
         res.end(result)
// fs.writeFile(path.join(__dirname,"/成绩_ok.txt"),newStr,function(err,result){
//     if(err){
//         console.log("写入文件失败!\n"+err.mesage);
//     }
//     console.log("写入文件成功!" );
//  })
})
})
server.listen(80,()=>{
    console.log('server running at http://127.0.0.1');
})
