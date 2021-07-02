let http = require("http");
let fs = require("fs");

let server = http.createServer(handleServer);

function handleServer(req, res) {
    if(req.url === "/") {
        res.writeHead(200, {"Content-Type" : "text/html"});
        fs.createReadStream("../../index.html").pipe(res);
    } else if(req.url.split('.').pop() === 'css') {
        console.log(req.url)
        res.setHeader('Content-Type', 'text/css');
        fs.createReadStream("../.." + req.url).pipe(res);
    } else if(['jpeg', 'jpg', 'jfif', 'png'].includes(req.url.split('.').pop())) {
        res.setHeader('Content-Type', 'image/*');
        fs.createReadStream("../.." + req.url).pipe(res);
    } else if(req.url === "/about") {
        res.writeHead(200, {"Content-Type" : "text/html"});
        fs.createReadStream("../../about.html").pipe(res);
    } else if (req.url.split('.').pop() === 'css') {
        res.setHeader('Content-Type', 'text/css');
        fs.createReadStream("../.." + req.url).pipe(res);
    } else if (['jpg ', 'jfif', 'png'].includes(req.url.split('.').pop())) {
        res.setHeader('Content-Type',  "image/*");
        fs.createReadStream("../.." + req.url).pipe(res);
    } else {
        res.setHeader('Content-Type', 'application/javascript');
        fs.createReadStream("../.." + req.url).pipe(res);
    }
}

server.listen(3000, () => [
    console.log("Server is listening at port 3000")
])