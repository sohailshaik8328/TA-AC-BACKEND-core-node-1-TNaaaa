let http = require("http");
let server = http.createServer(handleServer);

function handleServer(req, res) {
    let url = require("url");
    let parsedUrl = url.parse("http://localhost:5000");
    let pathName = parsedUrl.pathname;
    if(req.method === "GET" && pathName === "/") {
        res.write("Welcome to homepage");
        res.end();
    } else if (req.method === "GET" && pathName === "/about") {
        res.writeHead(201, {"Content-Type" : "text/html"});
        res.write("<h2>this is all about NodeJS</h2>");
        res.end();
    } else if (req.method === "POST" && pathName === "/about") {
        res.write("message: this is a post request");
        res.end();
    } else {
        res.writeHead(401, {"Content-Type" : "text/html"});
        res.end("Page Not Found!");
    }
}

server.listen(5000, () => {
    console.log(`Server is running at port 5000`);
})