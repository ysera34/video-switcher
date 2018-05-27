const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: true }));

require('./app/routes')(app, {});

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.listen(port, () => {
  console.log('server is running on ' + port);
});
