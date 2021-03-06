const express = require('express');
const initHadlebars = require('./config/handlebars')
const path = require('path');
const routes = require('./routes');
const config = require('./config/config.json')[process.env.NODE_ENV || 'development'];
const initDatabase = require('./config/database');

const app = express();

app.use(express.urlencoded({extended: true}));

initHadlebars(app);

app.use(express.static(path.resolve(__dirname, './public')));
app.use(routes);

initDatabase(config.DB_CONNECTION_STRING)
    .then(() => {
        app.listen(config.PORT, console.log.bind(console, `Application is running on http:localhost:${config.PORT}`));
    })
    .catch(err => {
        console.log('Application init failed: ', err);
    });
