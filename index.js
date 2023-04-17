/*

const os= require('os')

console.log(os.platform())
console.log(os.release())
console.log("free mem: ",os.freemem())
*/



/*
const fs = require('fs')

fs.writeFile('./text.txt',"GAY SEX",function(err){
    if(err){
        console.log(err)
        console.log("esta mal pendejo")
    }
    console.log("Esta bien no ha explotado")
})
*/
const http= require('http');

http.createServer(function(req,res){
res.write('<h1>Hola boludos</h1>')
res.end()
}).listen(3000)


