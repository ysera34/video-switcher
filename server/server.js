const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.listen(port, () => {
  console.log("server is running on " + port);
})
