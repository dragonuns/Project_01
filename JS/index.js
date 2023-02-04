$(function(){
const fs = require('fs');
fs.readFile("./1.txt",'utf8',function(err,result){
    if(err){
        console.log(err.mesage);
    }
    console.log(result);
})


})