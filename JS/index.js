
const fs = require('fs');
fs.readFile("./1.txt",'utf8',function(err,result){
    if(err){
        console.log("读取文件失败：\n"+err.mesage);
    }
    console.log("读取文件成功：\n" + result);
})