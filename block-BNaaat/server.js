let http = require("http");
let fs = require("fs")
let server = http.createServer(handleServer);

function handleServer(req, res) {
    if(req.method === "GET" && req.url === "/") {
        res.writeHead(201, {"Content-Type": "text/html"});
        res.end("WElcome to the Index page");
    } else if (req.method === "GET" && req.url === "/node") {
        fs.readFile("./node.html", (err, content) => {
            res.writeHead(201, {"Content-Type": "text/html"});
            res.end(content);
        });
    } else if (req.method === "GET" && req.url === "/node") {
        res.writeHead(201, {"Content-Type": "text/html"});
        fs.createReadStream("./node.html").pipe(res);
    } else {
        res.writeHead(401, {"Content-Type": "text/html"});
        res.end("<h1>Page Not Found!</h1>");
    }
}

server.listen(5555, () => {
    console.log("Server is listening at port 5555")
})