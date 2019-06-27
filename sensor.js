var firebase = require("firebase");
var five = require("johnny-five");
//var firebaseRef = new Firebase(
  //"https://web-app-laravel.firebaseio.com/sensor"
//);

var config = {
	 databaseURL: "https://web-app-laravel.firebaseio.com/" //Link to my firebase account.
};
var firebaseRef = firebase.initializeApp(config);

var board = new five.Board();

board.on("ready", function() {
  var sensor = new five.Sensor({
    pin: 2,
    freq: 2000
  });

  sensor.on("data", function() {
    firebaseRef.database().ref('sensor').set({
	'temperature'  : Math.round(this.value/8)
    });
    console.log(Math.round(this.value/8));
    //firebaseRef.set(this.value);
  });
});



