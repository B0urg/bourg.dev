const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use(expressLayouts);

app.set('views', path.join(__dirname, 'views'));
app.set('layout', 'layouts/default.ejs');

app.get('/', (req, res, next) => {
    res.render('index.ejs');
})

module.exports = app;