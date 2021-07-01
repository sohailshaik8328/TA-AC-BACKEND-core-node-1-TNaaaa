let http = require("http");
let server = http.createServer(handleServer);

function handleServer(req, res) {
    if(req.method === "GET" && req.url === "/") {
        res.write("Welcome to homepage");
        res.end();
    } else if (req.method === "GET" && req.url === "/about") {
        res.writeHead(201, {"Content-Type" : "text/html"});
        res.write("<h2>this is all about NodeJS</h2>");
        res.end();
    } else if (req.method === "POST" && req.url === "/about") {
        res.writeHead(201, {"Content-Type" : "application/json"});
        res.write(`{message: this is a post request}`);
        res.end();
    } else {
        res.writeHead(401, {"Content-Type" : "text/html"});
        res.end("Page Not Found!");
    }
}

server.listen(5000, () => {
    console.log(`Server is running at port 5000`);
})