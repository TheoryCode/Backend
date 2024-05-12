const mongoose = require("mongoose");

async function startDB(){
    await mongoose.connect("mongodb+srv://gustavoolicardoso07:GAGAGA@cluster0.c8arjxi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    console.log("banco de dados inicializado");
}

module.exports = startDB;