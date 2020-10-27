const http = require('http');
const url = require('url');
const fs = require('fs');


const index = fs.readFileSync('./public/index.html', 'utf-8');
const aboutus = fs.readFileSync('./public/aboutus.html', 'utf-8');
const E404 = fs.readFileSync('./public/404.html', 'utf-8');




const server = http.createServer((req, res) => {
    const pathName = url.parse(req.url, true);

    if (pathName.path === '/' || pathName.path === '/index.html') {

        res.writeHead(200, { 'Content-type': 'text/html' });
        res.end(index);

    } else if (pathName.path === '/aboutus.html' ) {

        res.writeHead(200, { 'Content-type': 'text/html' });
        res.end(aboutus);

    } else {
        res.writeHead(404, { 'Content-type': 'text/html' });
        res.end(E404);
    }
});

server.listen(3000, '127.0.0.1', () => {
    console.log('we are listening requests on port 3000');
});
