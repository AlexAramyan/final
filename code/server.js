var express = require("express");
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs');

global.weather = 0;
global.weatherTime = function () {
  weather++;
  if (weather == 4) {
    weather = 0;
  }
  io.sockets.emit('weather', weather);
}

global.random = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

app.use(express.static('.'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

server.listen(3000, function () {
  console.log("Server is running on port 3000");
});

// Array declaration
global.slenderArr = [];
global.grassArr = [];
global.eaterArr = [];
global.aidArr = [];
global.fireArr = [];
global.Water = [];

global.matrix = [];

// Classes
global.Parent = require('./classParent');
global.AID = require('./classaid');
global.Xotaker = require('./classeater');
global.Fire = require('./classfire');
global.Grass = require('./classgrass');
global.Slender = require('./classSlender');
global.SaintWater = require('./classwater');

// global.stop = false;
// function toggleStop() {
//   if (stop == true) {
//     stop = false;
//   }
//   else if (stop == false) {
//     stop = true;
//   }
// }

function setup() {
  // Fill matrix
  for (var i = 0; i < 36; i++) {
    matrix[i] = [];
    for (var j = 0; j < 36; j++) {
      var k = Math.floor(Math.random() * 40)
      if (k == 1 || k == 5 || k == 6) {
        matrix[i][j] = 1;
      }
      else if (k == 2) {
        matrix[i][j] = 2;
      }
      else if (k == 3) {
        matrix[i][j] = 3;
      }
      else if (k == 10) {
        matrix[i][j] = 10;
      }
      else {
        matrix[i][j] = 0;
      }
    }
  }
  matrix[matrix.length / 2][matrix.length / 2] = 4;
  matrix[0][matrix.length - 1] = 55;

  // Fill arrays
  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] == 1) {
        var gr = new Grass(x, y);
        grassArr.push(gr);
      }
      else if (matrix[y][x] == 2) {
        var r = (Math.round(Math.random())) / 2;
        var eat = new Xotaker(x, y, r);
        eaterArr.push(eat);
        matrix[y][x] += r;
      }
      else if (matrix[y][x] == 3) {
        var chuma = new AID(x, y);
        aidArr.push(chuma);
      }
      else if (matrix[y][x] == 4) {
        var fire = new Fire(x, y);
        fireArr.push(fire);
      }
      else if (matrix[y][x] == 55) {
        var fireF = new SaintWater(x, y);
        Water.push(fireF);
      }
      else if (matrix[y][x] == 10) {
        slender = new Slender(x, y);
        slenderArr.push(slender);
      }
    }
  }
}

function draw() {
  //if (!stop) {
  for (var i in grassArr) {
    grassArr[i].bazmanal();
  }
  for (var j in eaterArr) {
    eaterArr[j].utel();
    eaterArr[j].bazmanal();
    eaterArr[j].mahanal();
  }
  for (var l in aidArr) {
    aidArr[l].utel();
    aidArr[l].bazmanal();
  }
  for (var f in fireArr) {
    fireArr[f].utel();
    fireArr[f].bazmanal();
  }
  for (var w in Water) {
    Water[w].hangtsnel();
    Water[w].bazmanal();
  }
  for (var sl in slenderArr) {
    slenderArr[sl].sharjvel();
  }
  io.sockets.emit('matrix', matrix);
  var mat = matrix;
  var obj = {
    "grass_eaten": grassEaten,
    "dead_eaters": dead,
    "creatures_protected": creaturesProtected,
    "braised_fire": braiseFire
  };

  var myJSON = JSON.stringify(obj);
  fs.writeFileSync("stats.json", myJSON);
}

//}

setup();
setInterval(draw, 1000);
setInterval(weatherTime, 1500);

io.on('connection', function (socket) {
  console.log("New user connected: " + socket.id);
});
