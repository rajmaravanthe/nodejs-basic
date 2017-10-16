var http = require('http');

//variable declaration
var add = 0;
var server = http.createServer(function(request, response) {
    response.writeHead(200, {"content-type": "text/plain"});

    add = 1+4;

    console.log("Addition result is :" + add);
    response.end("Addition result is :" + add);
});

server.listen(3000);