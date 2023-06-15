const express = require('express');
const port = 7770;
const app = express();
const activites = ['Code','Anime','Music'];

app.use(express.json());

app.get('/todos',(req,res)=>{
    res.status(200).send(activites);
});

app.post('/todos',(req,res)=>{
    //let item_to_add = req.body["item"];
    let item_to_add = req.body.item;
    activites.push(item_to_add);
    res.status(201).send({
        "message" : "Item added"
    });
});

app.delete('/todos',(req,res)=>{
    let item_to_del = req.body["item"];
    activites.find((element,index)=>{
        if(element === item_to_del){
            activites.splice(index,1);
        }
    })
    res.status(202).send({
        "message" : "Item deleted"
    });
});

app.all('/todos',(req,res)=>{
    res.status(505).send();
});

app.all('*',(req,res)=>{
    res.status(404).send();
});

app.listen(port,()=>{
    console.log(`Working on the ${port}`);
});