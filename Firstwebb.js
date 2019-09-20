var http = require('http');

  http.createServer(function (request, result) {
    result.writeHead(200, {'Content-Type':'text/html'});
    result.end('
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
    ');
  }).listen(8080);