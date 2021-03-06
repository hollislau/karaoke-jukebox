describe('socket server integration', function() {
  var io = require('socket.io-client');
  var socketURL = 'http://localhost:3000';
  var socketOptions = {
    transports: ['websocket'],
    'force new connection': true
  };
  var socket;

  beforeEach(function(done) {
    socket = io.connect(socketURL, socketOptions);
    socket.on('connect', function() {
      done();
    });
  });

  it('should integrate with express', function(done) {
    socket.on('pong', function() {
      done();
    });
    socket.emit('ping');
  });

  afterEach(function(done) {
    if (socket.connected) {
      socket.disconnect();
    }
    done();
  });

});

