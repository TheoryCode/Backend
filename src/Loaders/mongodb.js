const mongoose = require("mongoose");

async function startDB(){
    await mongoose.connect("mongodb+srv://backend:OHCtHB1aY1tqCyPh@backend.rdr8bo8.mongodb.net/?retryWrites=true&w=majority&appName=Backend")
    console.log("banco de dados inicializado");
}

module.exports = startDB;

//OHCtHB1aY1tqCyPh



//mongodb+srv://gustavoolicardoso07:GAGAGA@cluster0.c8arjxi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0