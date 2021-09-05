const http = require('http')
const fs = require('fs')
const AppUrl = 'https://alves45.herokuapp.com/'
const PORT = process.env.PORT || 3000
const page = fs.readFileSync('index.html', 'utf8')

http
	.createServer((req, res) => {
		if (req.headers['x-forwarded-proto'] == 'https') {
			res.statusCode = 200
			res.setHeader('Content-Type', 'html')
			res.end(page)
		} else {
			res.writeHead(302, { Location: AppUrl})
			res.end()
		}
	})
	.listen(PORT)
