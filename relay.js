var five = require("johnny-five");
var board = new five.Board();
var LocalStorage = require('node-localstorage').LocalStorage,
localStorage = new LocalStorage('./toolID');

board.on("ready", function() {
  // localStorage.setItem('ID',"")
  var id = localStorage.getItem('ID');
  // console.log(id);
  if (id === "") {
    var generatorID = 'ARD' + Math.random().toString(36).substr(2, 9).toUpperCase();
    localStorage.setItem('ID',generatorID)
    id = localStorage.getItem('ID');
  }

  console.log(id);
  var r1 = new five.Relay({
    pin: 10,
    type: "NC",
  });
  var r2 = new five.Relay({
    pin: 9,
    type: "NC",
  });
  // var r3 = new five.Relay(11);
  //var relays = new five.Relays([r1, r2]);
  // console.log(r1);
  r1.close();
  r2.open();
  // r3.close()
  //relays.close();

  // Control the relay in real time
  // from the REPL by typing commands, eg.
  //
  //relay.on();
  //
  // relay.off();
  //
  this.repl.inject({
    r1: r1,
    r2: r2,
    // r3: r3
   });
});
