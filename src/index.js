const express = require('express');
const initHadlebars = require('./config/handlebars')
const path = require('path');
const routes = require('./routes');

const app = express();

initHadlebars(app);

app.use(express.static(path.resolve(__dirname, './public')));
app.use(routes);

app.listen(5000, () => console.log("App is running on http://localhost:5000"));