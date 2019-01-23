console.log('server.js loaded')

http = require('http')
port = process.env.PORT || 3000
server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Hello World, server time is ${Date()}\n`);
});


server.listen(port)
console.log(`listening to port ${port}`);