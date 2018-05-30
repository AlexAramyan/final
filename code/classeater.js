global.grassEaten = 0;
global.dead = 0;
module.exports = class Xotaker extends Parent {
    constructor(x, y, gender) {
        super(x, y);
        this.multiply = Math.round(random(0, 8));
        this.speed = 100; // 2
        this.directions = [];
        this.eat = 0;
        this.E = 5;
        this.countOFmoves = 0;
        this.gender = gender;
        this.gender = (gender == 0 ? "male" : 'female');
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    yntrelVandak(inchManGal) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == inchManGal) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }


    sharjvel() {
        this.stanalNorKordinatner();
        var vandak = random(this.yntrelVandak(0));
        if (vandak) {
            matrix[this.y][this.x] = 0;
            this.x = vandak[0];
            this.y = vandak[1];
            matrix[this.y][this.x] = 2;
            this.countOFmoves++;
            this.E--;
        }
    }

    utel() {
        var norVandak = random(this.yntrelVandak(1));
        if (norVandak) {
            //console.log(norVandak);
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[norVandak[1]][norVandak[0]] = 2;

            for (var i in grassArr) {
                if (norVandak[0] == grassArr[i].x && norVandak[1] == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    grassEaten++;
                }
            }

            //this.multiply = 1;
            //this.E++;
        }
        else {
            this.sharjvel();
            //console.log("asd");
        }
        /*if (norVandak == 1) {
            this.eat++;
        }*/
    }

    bazmanal() {
        if (this.gender == "male") {
            var vandak = random(this.yntrelVandak(2.5));
            var norVandak = random(this.yntrelVandak(0));
            if (this.multiply >= this.speed && norVandak && this.eat == 5 && vandak) {
                //console.log(this.eat);
                if (this.E >= 5 || this.countOFmoves < 5) {
                    var norXotaker = new Xotaker(norVandak[0], norVandak[1]);
                    eaterArr.push(norXotaker);
                    matrix[norVandak[1]][norVandak[0]] = 2;
                    this.multiply = 0;
                    this.eat = 0;
                }
            }
        }
    }


    mahanal() {
        for (var u in eaterArr) {
            //console.log("merav");
            if (this.E == 0 || this.countOFmoves == 5) {
                eaterArr.slice(u, 1);
                dead++;
            }
        }
    }
}