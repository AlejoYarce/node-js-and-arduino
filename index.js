var SerialPort = require("serialport");


/*
SerialPort.list(function(err, ports) {
  ports.forEach(function(port) {
    console.log(port.comName);
    console.log(port.pnpId);
    console.log(port.manufacter);
  });
});
*/


var port = new SerialPort('/dev/ttyACM0', {
  baudRate : 9600,
  parser: SerialPort.parsers.readline("\n")
});

port.on('open', function() {

  port.on('data', function(data) {
    console.log(data);
  });

  port.write(new Buffer('4', 'ascii'));

});
