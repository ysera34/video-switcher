const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);
const port = 3001;

app.use(express.static(path.join(__dirname + '/public')));
app.use(bodyParser.urlencoded({ extended: true }));

require('./app/routes')(app, {});
// const router = express.Router();
// const routes = require('./app/routes')(router, {});
// app.use('/', routes);

app.set('view engine', 'pug');
// app.set('views', path.join(__dirname, 'views'));

io.on('connection', function(socket) {
  socket.on('client_event', function(data) {
    console.log('client event data: ' + data);
    io.emit('video_change', 'server_event_message');
  });
})


server.listen(port, () => {
  console.log('server is running on ' + port);
});
