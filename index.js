const express = "express";
const app = express();

const PORT = 4000;

function handleListening(req,res){
    console.log(`Listening on : http://localhost:${PORT}`);
}

app.listen(PORT,handleListening);