const http = require("http");
const port = 7770;

http
.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`<h1>Hello World! </h1>`);
    res.end();
    })
.listen(port, () => {
    console.log(`Working on the ${port}`);  
    }
);