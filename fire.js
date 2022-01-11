const firebase = require("firebase");

//change the firebase configuration below according to your firebase SDK
const config = {
  apiKey: "AIzaSyCTf2RbdpNYsW3UUPOcdHcKEK2YTZdafTY",
  authDomain: "esp32-cadence-sensor.firebaseapp.com",
  projectId: "esp32-cadence-sensor",
  storageBucket: "esp32-cadence-sensor.appspot.com",
  messagingSenderId: "635512191661",
  appId: "1:635512191661:web:5720dcc453c221d4c12424",
};

const fire = firebase.initializeApp(config);
module.exports = fire;
