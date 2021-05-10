const fs = require('fs')
const { JSDOM } = require('jsdom')
const El = require('./Elements/AllElements.js')
const SourcePage = new JSDOM(fs.readFileSync("./WebPages/index.html","utf-8"))
const SourceDocument = SourcePage.window.document

const functions = [
    function login(document){
        El.title(document, 'Login')
        /*document.body.style
        var div = document.createElement('div')
        document.body.appendChild(div)
        El.input(document)
    document.documentElement.innerHTML = fs.readFileSync('./WebPages/login.html','utf-8')
    */
    }
]

const NameFunctions = functions.map((func)=>{
    return func.name.toLowerCase()
})

exports.GenPages = (func)=>{
    var TempDocument = Object()
    Object.assign(TempDocument, SourceDocument)
    functions[
        NameFunctions.indexOf(func.toLowerCase())
    ](SourceDocument)
    return SourceDocument.documentElement.innerHTML
}
