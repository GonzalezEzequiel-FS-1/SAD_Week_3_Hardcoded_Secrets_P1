require("dotenv").config("./.env");

const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;

const fs = require("fs");
let directory_name = "./";
let fileNames = fs.readdirSync(directory_name);

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-type", "text-plain");
  f = "";
  fileNames.forEach((file) => {
    f = f + file + " \n";
  });
  res.end(f);
});
server.listen(port, hostname, ()=>{
  console.log("works?")
})