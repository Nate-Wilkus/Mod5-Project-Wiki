const express = require('express');
const { engine } = require('express-handlebars');
const app = express();
const cubeRoutes = require('./routes/cubes');
const port = process.env.PORT || 8080;

app.engine('hbs', engine({extname: '.hbs'}))

app.set('view engine', 'hbs');

app.use(express.static('public'));

app.use(express.urlencoded({ extended: false }));

app.use(articleRoutes);

app.listen(port, console.log(`Server running on port ${port}`))