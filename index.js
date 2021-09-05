const http = require('http');
const fs = require('fs');
const PORT = process.env.PORT || 5000;
const page = fs.readFileSync('index.html', 'utf8');

http.createServer((req, res) => {
		if (req.headers['x-forwarded-proto'] == 'https') {
			res.statusCode = 200;
			res.setHeader('Content-Type', 'html');
			res.end(page);
		} else {
			res.writeHead(301, { Location: 'https://' + req.headers.Host });
		}
		console.log(req.headers.host);
	})
	.listen(PORT);
