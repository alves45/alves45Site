const http = require('http')
const fs = require('fs')
const { JSDOM } = require('jsdom')
const El = require('./WebPages/Elements/AllElements.js')
const PORT = process.env.PORT || 5000

function genPageLogin(){
  return fs.readFileSync("./WebPages/login.html","utf-8")
}

var pages = {login:genPageLogin()}

http.createServer((req,res)=>{
  res.statusCode = 200
  res.setHeader('Content-Type', 'html')
  res.end(pages.login)
}).listen(PORT)