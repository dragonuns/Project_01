
const fs = require('fs');

// fs.writeFile("./成绩.txt",'Hello!node.js',function(err,result){
//     if(err){
//         console.log("写入文件失败：\n"+err.mesage);
//     }
//     console.log("写入文件成功!" );
// })
fs.readFile("./成绩.txt",'utf8',function(err,result){
    if(err){
        console.log("读取文件失败!\n"+err.mesage);
    }
    console.log("读取文件成功!\n" );
    const arrOld = result.split('');
    console.log(arrOld);
})
