var socket = io();
var weather;
var side = 15;

function rainbow() {
    noFill();
    strokeWeight(20);
    
    for (var y = 0; y < 7; y++) {
        stroke(random(255), random(255), random(255));
        bezier(0, (height / 2) + (y * 20), width / 3, (height / 4) + (y * 20), width / 1.5, (height / 4) + (y * 20), width, (height / 2) + (y * 20));
    }
    stroke(0, 0, 0);
    strokeWeight(1);
    fill(0, 0, 0);
    textSize(64);
    fill(random(150, 255), random(150, 255), random(150, 255));
    text("R", 60, 270);
    fill(random(150, 255), random(150, 255), random(150, 255));
    text("a", 60 + 64, 270);
    fill(random(150, 255), random(150, 255), random(150, 255));
    text("i", 60 + 64 + 64, 270);
    fill(random(150, 255), random(150, 255), random(150, 255));
    text("n", 60 + 64 + 64 + 64, 270);
    fill(random(150, 255), random(150, 255), random(150, 255));
    text("b", 60 + 64 + 64 + 64 + 64, 270);
    fill(random(150, 255), random(150, 255), random(150, 255));
    text("o", 60 + 64 + 64 + 64 + 64 + 64, 270);
    fill(random(150, 255), random(150, 255), random(150, 255));
    text("w", 60 + 64 + 64 + 64 + 64 + 64 + 64, 270);
}

setInterval(rainbow, 5000);

function setup() {
    createCanvas(36 * side, 36 * side);
    background('#acacac');
    noStroke();
}
socket.on('matrix', function (matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                if (weather == 0) {
                    fill("#fff");
                }
                else if (weather == 1)
                { fill("#42f448"); }
                else if (weather == 2) {
                    fill("green");
                }
                else {
                    fill("#F88017");
                }
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2 || matrix[y][x] == 2.5) {
                if (matrix[y][x] == 2.5) {
                    fill('#D4A017');
                }
                if (matrix[y][x] == 2) {
                    fill("yellow");
                }
                rect(x * side, y * side, side, side);

            }
            else if (matrix[y][x] == 0) {
                fill(35);
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("#000");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("#ce2029");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 55) {
                fill("#00f");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 10) {
                fill("silver");
                rect(x * side, y * side, side, side);
            }
        }
    }
});

socket.on('weather', function (data) {
    weather = data;
});