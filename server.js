console.log("Node.js is working!");
const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end("<h1>Hello! My Node.js Web App is Working!</h1>");
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});