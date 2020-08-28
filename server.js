const server = require('http');

server.createServer(function(req, res){
    res.end('Ola mundo');
}).listen(3500);

console.log('O Servidor esta Rodando')