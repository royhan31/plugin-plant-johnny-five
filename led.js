var firebase = require("firebase");
var five = require("johnny-five");

var config = {
  apiKey: "AIzaSyDNXp1FB7ZVeHXCjHw9IQUITTg1XvoIm5g",
  authDomain: "web-app-laravel.firebaseapp.com",
  databaseURL: "https://web-app-laravel.firebaseio.com",
  projectId: "web-app-laravel",
  storageBucket: "web-app-laravel.appspot.com",
  messagingSenderId: "2459932510",
  appId: "1:2459932510:web:bbac0218b494b49b"
};

this.app = firebase.initializeApp(config);
database = this.app.database().ref('sensor').child('led').child('on');

var board = new five.Board();

board.on("ready", function() {
  var led = new five.Led(13);
    this.repl.inject({
    led: led
    });
  var relay = new five.Relay(10);
  database.on('value', function(snapshot) {
  var data = snapshot.val();
     //Data is in JSON format.
  // if(data === true){
  //      led.stop();
  //      led.on();
  //   }
  // else if(data === 0){
  //   led.stop();
  //   led.blink();
  //   }
  //   else{
  //       led.stop();
  //       led.off();
  //   }
  if (data === true) {
    relay.on();
    console.log("hidup");
  }else {
    relay.off();
    console.log("mati");
  }
   });

});
