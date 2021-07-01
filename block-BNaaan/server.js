let http = require("http");
let server = http.createServer(handleServer);

function handleServer(req, res) {
    console.log(req.headers);
    console.log(req.method);
    console.log(req.url);
    res.end("Hey welcome back");
}

server.listen(3000, () => {
    console.log("Server is running in port 3000")
})