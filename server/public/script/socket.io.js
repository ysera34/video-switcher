var socket = io();

socket.emit('client_event', 'client_event_message');

socket.on('video_change', function(data) {
  console.log('Message from Server: ' + data);
});
