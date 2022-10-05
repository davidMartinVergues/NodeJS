// Imports modules
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')


const router = require('./network/routes')


//------end imports------

//---- config app
const app = express()


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
router(app)
app.use(express.static(path.join(__dirname, "public")))
//-----end config app---



app.listen(3000);



