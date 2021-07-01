let fs = require('fs');

let result = fs.readFileSync("./content.md", "utf8");
console.log(result);

fs.readFile("./content.md", (err, content) => {
    console.log(content.toString());
})

let buff1 = Buffer.alloc(10);
buff1.write("Welcome to buffer");
console.log(buff1.toString());

