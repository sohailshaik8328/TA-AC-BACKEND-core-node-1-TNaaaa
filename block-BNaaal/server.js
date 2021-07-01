let http = require("http");

let server = http.createServer(handleServer);

function handleServer(req, res) {
    res.end("Congrats! Sohail You just created your first http server ")
}

server.listen(4000, () => {
   console.log(`Server started at port 4000`);
})