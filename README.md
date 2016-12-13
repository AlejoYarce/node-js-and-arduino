# node-js-and-arduino
Serial Port with Node.js and Arduino

# Configuration
In the **index.js** file, you have to set the serial port. If you are using a Raspberry to run the server, you need to use the port **/dev/ttyACM0**, you can get the port name running this command --> ls /dev/tty*


# HOW TO
1. Clone the project
2. **cd** to the main folder of the project
3. Execute **npm install** to install the SerialPort dependency
4. Run the arduino code **serialport.ino**
5. Run the project --> node index.js

