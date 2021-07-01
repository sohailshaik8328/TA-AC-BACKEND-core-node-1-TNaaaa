console.log("Welcome to Node.JS");

let os = require("os");
const { uptime } = require("process");

let osCpus = os.cpus().length;
console.log(osCpus);

let freeMemory = os.freemem();
console.log(freeMemory);

let upTime = os.uptime();
console.log(upTime);

let versionOs = os.version;
console.log(versionOs);

let {readFile, unlink}= require('fs');

let buff1 = Buffer.alloc(12);
buff1.write("Hai")
console.log(buff1.toString())

// Blocking code

console.log("first task1");

console.time("task1");
for(let i = 0 ; i < 10000000 ; i++) {

}
console.timeEnd("task1");

console.log("last task1");

// Non-blocking code

console.log("first task2");

console.time("task2")
setTimeout(() => {
    console.log("Hey am setTimeout function");
    console.timeEnd("task2");
}, 1000);

console.log("last task2")


