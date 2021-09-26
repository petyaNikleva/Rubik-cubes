const express = require('express');
const initHadlebars = require('./config/handlebars')
const path = require('path');
const routes = require('./routes');
const config = require('./config/config.json')[process.env.NODE_ENV || 'development'];


const app = express();

app.use(express.urlencoded({extended: true}));

initHadlebars(app);

app.use(express.static(path.resolve(__dirname, './public')));
app.use(routes);


app.listen(config.PORT, console.log.bind(console, `Application is running on http:localhost:${config.PORT}`));