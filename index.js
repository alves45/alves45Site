import { createServer } from "http"
import { readFileSync } from "fs"
const AppUrl = "https://alves45.herokuapp.com/"
const PORT = process.env.PORT || 3000
const pageLogin = readFileSync("login.html", "utf8")

createServer((req, res) => {
	if (!(req.headers["x-forwarded-proto"] == "https")) {
		res.statusCode = 200
		let response = ''
		req.addListener('data', (chunk) => {
			response = chunk
		})
		req.addListener('end', (a) => {
			console.log('end:' + response)
			if (response) {
				res.setHeader('Consent-Type', 'application/json')
			} else {
				res.setHeader('Content-Type', 'text/html')
				res.end(pageLogin)
			}
		})
	} else {
		res.writeHead(302, { 'Location': AppUrl })
		res.end()
	}
}).listen(PORT)


