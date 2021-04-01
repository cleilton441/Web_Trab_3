const express = require("express");
const cors = require('cors');
const app = express();
const mysql = require("mysql");


const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "CRUD", 
});

app.use(cors());
app.use(express.json());

app.get("/api/get", (req, res)=>{
    const sqlSelect = "SELECT * FROM reviews";
    db.query(sqlSelect, (err, result)=>{
        res.send(result);
    });
});

//Sugestoes
app.post("/api/insert", (req, res)=>{

    const nome = req.body.nome;
    const review = req.body.review;
    
    const sqlInsert = "INSERT INTO reviews (nome, review) VALUES (?,?)"
    db.query(sqlInsert, [nome, review], (err, result)=>{
        console.log(result);
    });

});

app.delete("/api/delete/:nome", (req, res)=>{
    const nome = req.params.nome;
    const sqlDelete = "DELETE FROM reviews WHERE nome = ?";

    db.query(sqlDelete, nome, (err, result) => {
        if (err) console.log(err);
    });
});


app.put("/api/update", (req, res)=>{ 
    const nome = req.body.nome;
    const review = req.body.review;
    const sqlUpdate = "UPDATE reviews SET review = ? WHERE nome = ?";

    db.query(sqlUpdate, [review, nome], (err, result) => {
        if (err) console.log(err);
    });
});


//login
app.post("/api/insert", (req, res)=>{

    const nome = req.body.nome;
    const email = req.body.review;
    const senha = req.body.review;
    
    const sqlInsert = "INSERT INTO reviews (nome, email, senha) VALUES (?,?,?)"
    db.query(sqlInsert, [nome, email, senha], (err, result)=>{
        console.log(result);
    });

});

app.listen(3001, ()=>{
    console.log("Rodando na porta 3001");
});