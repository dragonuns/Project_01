
const fs = require('fs');
fs.readFile("./成绩.txt",'utf8',function(err,result){
    if(err){
        console.log("读取文件失败!\n"+err.mesage);
    }
    console.log("读取文件成功!" );
   const arrOld = result.split(" ");
   const arrNew = [];
   arrOld.forEach(item=>{
    arrNew.push(item.replace("=",":"))
   })
   const newStr = arrNew.join("\n");
   console.log(newStr);
})