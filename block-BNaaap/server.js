let http = require("http");
let server = http.createServer(handleServer);

function handleServer(req, res) {
    res.statusCode = 201;
    req.method = "POST";
    console.log(req.method);
    res.setHeader("Content-Type", "text/html");
    res.write(`<h1>Welcome Back!</h1>`);
    res.end();
}

server.listen(4444, () => {
    console.log("Server listening at port 4444")
})