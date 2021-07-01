console.log(`Welcome to node.JS`);

let sum = 0;

for(let i = 1 ; i <= 10 ; i++) {
    sum += i
}
console.log(sum);


// let path = require('path');
// let os = require('os');

// let pathFile = path.join(__dirname, 'file.md');
// let freeM = os.freemem();
// let cpus = os.cpus().length;

// console.log(pathFile);
// console.log(freeM);
// console.log(cpus);

// let fs = require('fs');
// console.log("first");

// console.time("task1");
// setTimeout(() => {
//     console.log("Timer Executed");
//     console.timeEnd("task1");
// }, 1000);

// console.time("task2");
// fs.readFile('./index.md', (err, content) => {
//     console.log(err, content.toString());
//     console.timeEnd("task2");
// })

// console.log("last");
