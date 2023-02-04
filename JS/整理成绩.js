
const fs = require('fs');
fs.readFile(__dirname+"/成绩.txt",'utf8',function(err,result){
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

fs.writeFile(__dirname+"/成绩_ok.txt",newStr,function(err,result){
    if(err){
        console.log("写入文件失败!\n"+err.mesage);
    }
    console.log("写入文件成功!" );
   
 })
})