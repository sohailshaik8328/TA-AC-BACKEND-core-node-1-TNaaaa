let http = require("http");
let fs = require("fs");
let url = require("url");

let server = http.createServer(handleServer);

// first 

// function handleServer(req, res) {
//     console.log(req, res);
// }

// server.listen(5000, () => {
//     console.log("Server is listening at port 5000")
// })

// second

// function handleServer(req, res) {
//     res.end("My first server in NodeJS")
// }

// server.listen(5100, () => {
//     console.log("Server is listening at port 5100")
// })

// third

// function handleServer(req, res) {
//     console.log(req.method, req.headers);
//     res.setHeader("Content-Type", "text/plain")
//     res.end(req.headers.pragma["user-agent"]);
// }

// server.listen(5555, () => {
//     console.log("Server is listening at port 5555")
// })

// fourth

// function handleServer(req, res) {
//     console.log(req.method, req.url);
//     res.setHeader("Content-Type", "application/json")
//     res.end(req.method, req.url);
// }

// server.listen(5566, () => {
//     console.log("Server is listening at port 5566")
// })

// fifth


// function handleServer(req, res) {
//     res.setHeader("Content-Type", "application.json")
//     // fs.createReadStream("req.headers").pipe(res)
//     res.end(req.headers);
// }

// server.listen(7000, () => {
//     console.log("Server is listening at port 7000")
// })

//sixth

// function handleServer(req, res) {
//     res.statusCode = 202
//     console.log(res.statusCode);
//     res.end()
//     }

//     server.listen(3333, () => {
//     console.log("Server is listening at port 3333")
// })

//seventh

// function handleServer(req, res) {
//     res.setHeader("Content-Type", "text/html")
//     res.end(`<h3>Welcome to altcampus</h3>`)
// }

//     server.listen(8000, () => {
//     console.log("Server is listening at port 8000")
// })

//eight

// function handleServer(req, res) {
//     res.writeHead(201, {"Content-Type": "text/html"});
//     res.end(`<h3>Welcome to altcampus</h3>`)
// }

//     server.listen(8000, () => {
//     console.log("Server is listening at port 8000")
// })

//ninth

// function handleServer(req, res) {
//     res.writeHead(201, {"Content-Type": "application/json"});
//     res.end(`{success: true, message: 'Welcome to Nodejs'}`)
// }

//     server.listen(8888, () => {
//     console.log("Server is listening at port 8888")
// })

//ten

// function handleServer(req, res) {
//         if(req.method === "POST") {
//             res.writeHead(201, {"Content-Type": "text/html"});
//             res.end(`<h2>posted for first time</h2>`);
//         }
//     }
    
//         server.listen(5050, () => {
//         console.log("Server is listening at port 5050");
//     })

// eleven

// function handleServer(req, res) {
//     if(req.method === "GET" && req.url === "/") {
//         res.writeHead(201, {"Content-Type": "text/plain"});
//         res.end(`Sohail Shaik`);
//     } else if (req.url === "/about") {
//         res.writeHead(201, {"Content-Type": "text/html"});
//         res.end(`<h2>Sohail Shaik</h2>`)
//     } else {
//         res.writeHead(404, {"Content-Type" : "text/plain"});
//         res.end("Page Error");
//     }
// }

//     server.listen(2345, () => {
//     console.log("Server is listening at port 2345");
// })

//twelve

// function handleServer(req, res) {
//     if(req.method === "GET" && req.url === "/users") {
//         res.writeHead(201, {"Content-Type": "text/html"});
//         res.write(
//             `<form>
//                 <input placeholder="name" />
//                 <input placeholder="email" />
//             </form>`
//         )
//         res.end();
//     } else if (req.method === "POST" && req.url === "/users") {
//         res.writeHead(201, {"Content-Type": "text/html"});
//         res.end(`<h2>Posted for the second time</h2>`)
//     } else {
//         res.writeHead(404, {"Content-Type" : "text/plain"});
//         res.end("Page Error");
//     }
// }

//     server.listen(2345, () => {
//     console.log("Server is listening at port 2345");
// })

function handleServer(req, res) {
    let urlSTring = `http://localhost:2345/users?email=nodeserver@gmail.com`
    let parsedUrl = url.parse(urlSTring);
    console.log(parsedUrl)
    console.log(parsedUrl.pathname);
    console.log(req.url)
    console.log(parsedUrl.pathname.query)
    res.setHeader("Content-Type", "application/json");
    res.end(parsedUrl.query)
}

    server.listen(2345, () => {
    console.log("Server is listening at port 2345");
})