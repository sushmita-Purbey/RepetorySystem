const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/repertory')
const userSchema = new  mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: String
})

const UserModel=mongoose.model('Users',userSchema)
app.get('/getData', (req, res) => {
res.json( UserModel.find())
})

app.listen(3001,()=>{
    console.log('Server started on port 3001');
})