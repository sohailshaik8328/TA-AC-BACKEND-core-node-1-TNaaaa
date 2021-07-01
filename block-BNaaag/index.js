let fs = require('fs');

// sync code
console.log("first task1");

for(let i = 0 ; i < 1000 ; i++) {
    
}

fs.readFile("./content.md", (err, content) => {
    console.log(content.toString());
})

console.log("last task1");

// Async code
console.log("first task2");

setTimeout(() => {
    console.log("Hey I am timer")
})

fs.readFile("./content.md", (err, content) => {
    console.log(content.toString());
})

console.log("last task2");

let buff1 = Buffer.alloc(10);
buff1.write("Welcome to buffer");
buff1.toString();
console.log(buff1.toString());

