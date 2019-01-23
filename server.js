//console.log('server.js loaded')

http = require('http')
port = process.env.PORT || 3000
server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Hello World, server time is ${Date()}\n`);
});

server.listen(port, function () {
    console.log(`brcavar server.js listening to port ${port}`)
});