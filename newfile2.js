var http = require('http');
// creating a web server

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write('<h3>Hello World!</h3>');
    res.write('<p style="color:red">Hi my name is Ayush</p>')
    res.end();


}).listen(5500);
// To see results: Go on Chrome and type localhost:5500.