  const http = require('http')

  http.createServer((req,res)=>{
      res.write('Deu ceretttooo Lucas Alves')
      res.end();
  }).listen(5000)