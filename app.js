const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const mysql = require('mysql')
const bodyParser = require('body-parser'); 

const path = require('path')


require('dotenv').config();

// templating engine

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/main')
app.use(expressLayouts)
 
app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(express.static(path.join(__dirname,'public')))


//router
const routes = require('./server/routes/user');
const e = require('express');
app.use('/', routes)

app.listen(process.env.PORT || 4000)

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());






