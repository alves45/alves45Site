  const http = require('http')

  http.createServer((req,res)=>{
      res.write('Deu ceretttooo Lucas Alves')
      res.statusCode = 200
      res.end();
  }).listen(5000)