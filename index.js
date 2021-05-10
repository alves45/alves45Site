const http = require('http')
const GenPages = require('./WebPages/GenPages.js').GenPages
const PORT = process.env.PORT || 5000

const pages = {
  login: GenPages('Login')
}

http.createServer((req,res)=>{
  res.statusCode = 200
  res.setHeader('Content-Type', 'html')
  res.end(GenPages('Login'))//pages.login)
}).listen(PORT)
console.log('OK')