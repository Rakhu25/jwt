const express = require('express');
const mongoose = require('mongoose');
const app = express();
const authRoutes = require('./routes/authRoutes');
app.use(authRoutes);

//middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//view engine
app.set('view engine','ejs');

console.log('hiii a');

//database connection
const dbURI = 'mongodb+srv://auth:auth123@cluster0.gatrz.mongodb.net/node-auth';
mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true})
.then((result)=>app.listen(3000))
.catch((err)=>console.log(err));

//routes
app.get('/',(req,res)=>res.render('home'));
app.get('/smoothies',(req,res)=>res.render('smoothies'));