const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const morgan = require('morgan');
const path = require('path');
const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// app.use(morgan('combined'))
//Template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Router init
route(app);

app.listen(3000);
