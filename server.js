
const http = require('http');

const utils = require('./utils'); 

const requestListener = (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Bem-vindo!');
  
  } else if (req.url === '/sobre') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Este é um servidor Node.js simples criado por [Seu Nome].');
  
  } else if (req.url === '/contato') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Entre em contato pelo e-mail: exemplo@dominio.com');
  

  } else if (req.url === '/numero') {
    const numeroAleatorio = utils.gerarNumeroAleatorio(); 
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Seu número aleatório é: ${numeroAleatorio}'); 
  
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Página não encontrada');
  }
};

const server = http.createServer(requestListener);


server.listen(3000, () => {
  console.log('Servidor está rodando na porta 3000');
});
