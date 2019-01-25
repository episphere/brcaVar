//console.log('server.js loaded')

http = require('http')
port = process.env.PORT || 3000
server = http.createServer((req, res) => {
  res.writeHead(200, {
      //'Content-Type': 'text/plain',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*'
  });
  //res.write(`Hello World, server time is ${Date()}\n`, 'utf-8');
  res.end(JSON.stringify({hello:`from server at ${Date()}`}));
  //res.statusCode = 200;
  //res.setHeader('Content-Type', 'text/plain');
  //res.setHeader('Access-Control-Allow-Origin', '*');
  //res.end(`Hello World, server time is ${Date()}\n`);
});

server.listen(port, function () {
    console.log(`brcavar server.js listening to port ${port}`)
});