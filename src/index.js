const express = require('express');
const initHadlebars = require('./config/handlebars')

const app = express();

initHadlebars(app);

app.all('/', (req, res) => {
    res.render('index')
});

app.listen(5000, () => console.log("App is running on http://localhost:5000"));