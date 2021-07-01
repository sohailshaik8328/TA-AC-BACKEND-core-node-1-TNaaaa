let http = require("http");
let server = http.createServer(handleServer);

function handleServer(req, res) {
    req.statusCode = 200;
    req.method = "POST";
    console.log(req.method);
    req.setHeader = "Content-Type", "text/html";
    res.write(`<h1>Welcome Back!</h1>`);
    res.end();
}

server.listen(4444, () => {
    console.log("Server listening at port 4444")
})