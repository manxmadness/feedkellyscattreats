import '../style/style.css';
import io from 'socket.io-client';
import { url } from '../config';

(function() {

    const switchElement = document.getElementById('switch');

    const toggle = () => {

      socket.emit(`led:on`);
      console.log(`Sent: led:on`);
    };

    // Connect to the socket server
    const socket = io.connect(url);

    // Turn off the LED when the page loads
    socket.emit('led:on');

    // Add an event listener (click) to the switch to turn the LED on/off
    switchElement.addEventListener('click', toggle); // When the light is on


    // When the event led:on is received toggle the switch to on
    socket.on('led:on', () => {
      console.log('Received: on');
      //setLight('on');
    });

  }
)();
