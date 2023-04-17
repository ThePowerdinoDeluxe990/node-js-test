var http = require('http');
var fs = require('fs');

const PORT=8080; 


fs.readFile('./index.html',function (err, html) {

    if (err) throw err;    

    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);
        response.write(Date())  
        response.end();  
    }).listen(PORT,()=>{
        console.log(`El server esta en localhost: ${PORT}`)
    });
});


