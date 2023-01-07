const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const path = require('path');

const indexRouter = require('./routes/indexRouter');

app.use(express.static(path.join(__dirname, 'public')));
app.use(expressLayouts);

app.use('/', indexRouter);

app.set('views', path.join(__dirname, 'views'));
app.set('layout', 'layouts/default.ejs');



module.exports = app;