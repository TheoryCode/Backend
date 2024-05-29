const mongoose = require("mongoose");
const dotenv = require("dotenv")

async function startDB(){
    console.log(process.env.MONGO_URI);await mongoose.connect(process.env.MONGO_URI); 
    console.log("banco de dados inicializado");
}

module.exports = startDB;


//"mongodb+srv://backend:OHCtHB1aY1tqCyPh@backend.rdr8bo8.mongodb.net/?retryWrites=true&w=majority&appName=Backend"
//mongodb+srv://gustavoolicardoso07:GAGAGA@cluster0.c8arjxi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0