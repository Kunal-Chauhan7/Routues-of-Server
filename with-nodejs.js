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
                let newToDo = activites;
                newToDo.push(body["name"]);
                newToDo.push(body.Age);
                console.log(newToDo);
                res.writeHead(201);
            });
        }
        else if(method === "DELETE"){
            let body = "";
            req.on('error',(err)=>{
                console.error(err);
            }).on('data',(chunk)=>{
                body+= chunk;
            }).on('end',()=>{
                body = JSON.parse(body);
                //let todel = body["item"];
                let todel = body.item;
                //for (let i = 0; i < activites.length; i++) {
                //    if(todel === activites[i]){
                //        activites.splice(i,1);
                //        console.log(activites);
                //    }
                //}
                activites.find((element,index)=>{
                    if(element === todel){
                        activites.splice(index,1);
                    }
                })
            })
        res.writeHead(204);
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
