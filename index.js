const http = require("http");
const port = 7770;
const activites = ["code","games","music"];

http
.createServer((req, res) => {
    const {method,url} = req;
    if(url === "/todos"){
        if(method === "GET"){
            res.writeHead(200);
            res.write(activites.toString());
        }
        else if(method === "POST"){
            let body = "";
            req.on('error',(err)=>{
                console.log(err);
            }).on('data',(chunk)=>{
                body+=chunk;
                console.log(chunk);
            }).on('end',()=>{
                body = JSON.parse(body);
                console.log(body);
            });
        }
    }
    else{
        res.writeHead(404);
    }
    res.end();
    })
.listen(port, () => {
    console.log(`Working on the ${port}`);  
    }
);
