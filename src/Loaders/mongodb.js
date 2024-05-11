const mongoose = require("mongoose");

async function startDB(){
    await mongoose.connect("mongodb+srv://gustavoolicardoso07:@Gu0000Gu@cluster0.c8arjxi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
}

module.exports = startDB;