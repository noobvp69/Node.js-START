var http = require('http');
// creating a web server

http.createServer(function(req,res){
    res.write('hello World!');
    res.end();


}).listen(5500);
// To see results: Go on hrome and type localhost:5500.