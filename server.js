'use strict';

/**
 * Server Setup (requirements)
 */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const uriUtil = require('mongodb-uri');
let contacts = require('./data');

const mongodbUri = 'mongodb+srv://turtlez:##Tur7st00^^@cluster0-7jggc.mongodb.net/test?retryWrites=true&w=majority';
const mongooseUri = uriUtil.formatMongoose(mongodbUri);
const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use('/api/contacts', require('./api/contacts/routes/post_contact'));
app.use('/api/contacts', require('./api/contacts/routes/get_contacts'));

/**
 * Server running setup
 */
const hostname = '0.0.0.0';
const port = 3001;

app.listen(port, hostname, () => {

    mongoose.connect(mongooseUri, dbOptions, (err) => {
        if(err) { 
            console.log(err);
        }
        console.log(`Servier is running at ${hostname}:${port}`);
    })    
});