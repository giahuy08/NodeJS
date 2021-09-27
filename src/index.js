const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const morgan = require('morgan');
const path = require('path');
const port = 3000;
const methodOverride = require('method-override')
const route = require('./routes');
const db = require('./config/db');


// Connnect to DB
db.connect();


app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(methodOverride('_method'))
app.use(express.json());

// app.use(morgan('combined'))
//Template engine
      app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        helpers: {
              sum:(a,b)=>a+b
        }
    }),
);
    app.set('view engine', 'hbs');
    app.set('views', path.join(__dirname, 'resources','views'));

// Router init
  route(app);

app.listen(port,()=>
    console.log(`App listening at http://localhost:${port}`)
);
