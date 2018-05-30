module.exports = class Grass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.speed = 8;
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

        switch (weather) {
            case "summer":
                this.speed = 2;
                break;
            case "fall":
                this.speed = 4;
                break;
            case "winter":
                this.speed = 8;
                break;
            case "spring":
                this.speed = 2;
            default:
                this.speed = 2;
                break;
        }
    }

    yntrelVandak(ch) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == 0) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    bazmanal() {
        this.multiply++;
        var norVandak = random(this.yntrelVandak(0));
        // console.log(norVandak, this.multiply);
        if (this.multiply >= this.speed && norVandak) {
            var norXot = new Grass(norVandak[0], norVandak[1]);
            grassArr.push(norXot);
            matrix[norVandak[1]][norVandak[0]] = 1;
            this.multiply = 0;
        }
    }

}

class Xotaker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = Math.round(random(0, 8));
        this.speed = 2; // 0
        this.directions = [];
        this.eat = 0;
        this.E = 5;
        this.countOFmoves = 0;
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
                }
            }

            //this.multiply = 1;
            //this.E++;
        }
        else {
            this.sharjvel();
        }
        /*if (norVandak == 1) {
            this.eat++;
        }*/
    }

    bazmanal() {
        var norVandak = random(this.yntrelVandak(0));
        if (this.multiply >= this.speed && norVandak && this.eat == 5) {
            console.log(this.eat);
            if (this.E >= 5 || this.countOFmoves < 5) {
                var norXotaker = new Xotaker(norVandak[0], norVandak[1]);
                eaterArr.push(norXotaker);
                matrix[norVandak[1]][norVandak[0]] = 2;
                this.multiply = 0;
                this.eat = 0;
            }
        }
    }


    mahanal() {
        for (var u in eaterArr) {
            //console.log("merav");
            if (this.E == 0 || this.countOFmoves == 5) {
                eaterArr.slice(u, 1);
            }
        }
    }
}
class AID {
    constructor(x, y) {
        this.x = x;
        this.y = y;
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
            matrix[this.y][this.x] = 3;
            //this.countOFmoves++;
            //this.E--;
        }
    }

    utel() {
        frameRate(1);

        // var norVandak = random(this.yntrelVandak(1));
        // if (norVandak) {
        //     grassArr.splice(i, 1);
        //     eaterArr.splice(i, 1);
        //     matrix[norVandak[1]][norVandak[0]] = 3;
        // }
        var norVandak = random(this.yntrelVandak(2));
        var norVandak1 = random(this.yntrelVandak(1));
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[norVandak[1]][norVandak[0]] = 3;

            // for (var i in grassArr) {
            //     if (norVandak[0] == grassArr[i].x && norVandak[1] == grassArr[i].y) {
            //         grassArr.splice(i, 1);
            //     }
            // }
            for (var j = 0; j < eaterArr.length; j++) {
                if (norVandak[0] == eaterArr[j].x && norVandak[1] == eaterArr[j].y) {
                    eaterArr.splice(j, 1);
                }
            }
            //this.multiply = 1;
            //this.E++;
        }
        else {
            this.sharjvel();
        }
        if (norVandak1) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak1[0];
            this.y = norVandak1[1];
            matrix[norVandak1[1]][norVandak1[0]] = 3;

            for (var a in grassArr) {
                if (norVandak1[0] == grassArr[a].x && norVandak1[1] == grassArr[a].y) {
                    grassArr.splice(a, 1);
                }
            }
        }
        else {
            this.sharjvel();
        }
    }


    bazmanal() {
        var norVandak = random(this.yntrelVandak(0));
        if (norVandak) {
            var newAid = new AID(norVandak[0], norVandak[1]);
            aidArr.push(newAid);
            matrix[norVandak[1]][norVandak[0]] = 3;
        }
    }
}

class Fire {
    constructor(x, y) {
        this.x = x;
        this.y = y;
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
            matrix[this.y][this.x] = 3;
            //this.countOFmoves++;
            //this.E--;
        }
    }

    bazmanal() {
        var norVandak = random(this.yntrelVandak(0));
        if (norVandak) {
            var newFire = new Fire(norVandak[0], norVandak[1]);
            fireArr.push(newFire);
            matrix[norVandak[1]][norVandak[0]] = 4;
        }
    }

    utel() {
        var norVandak = random(this.yntrelVandak(2));
        var norVandak1 = random(this.yntrelVandak(1));
        var norVandak2 = random(this.yntrelVandak(3));

        if (norVandak) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[norVandak[1]][norVandak[0]] = 4;

            for (var j = 0; j < eaterArr.length; j++) {
                if (norVandak[0] == eaterArr[j].x && norVandak[1] == eaterArr[j].y) {
                    eaterArr.splice(j, 1);
                }
            }
        }

        else {
            this.sharjvel();
        }

        if (norVandak1) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak1[0];
            this.y = norVandak1[1];
            matrix[norVandak1[1]][norVandak1[0]] = 4;

            for (var a in grassArr) {
                if (norVandak1[0] == grassArr[a].x && norVandak1[1] == grassArr[a].y) {
                    grassArr.splice(a, 1);
                }
            }
        }
        else {
            this.sharjvel();
        }

        if (norVandak2) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak2[0];
            this.y = norVandak2[1];
            matrix[norVandak2[1]][norVandak2[0]] = 4;

            for (var q in aidArr) {
                if (norVandak2[0] == aidArr[q].x && norVandak2[1] == aidArr[q].y) {
                    aidArr.splice(q, 1);
                }
            }
        }
        else {
            this.sharjvel();
        }
    }
}

class SaintWater {
    constructor(x, y) {
        this.x = x;
        this.y = y;
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
        var vandak1 = random(this.yntrelVandak(3));
        if (vandak || vandak1) {
            if (vandak) {
                matrix[this.y][this.x] = 0;
                this.x = vandak[0];
                this.y = vandak[1];
                matrix[this.y][this.x] = 55;
            }
            else{
                matrix[this.y][this.x] = 0;
                this.x = vandak1[0];
                this.y = vandak1[1];
                matrix[this.y][this.x] = 55;
            } 
        }
    }

    hangtsnel() {
        var norVandak = random(this.yntrelVandak(4));
        if (norVandak) {
            matrix[this.x][this.y] = 0;
            this.x = norVandak[1];
            this.y = norVandak[0];
            matrix[this.x][this.y] = 55;

            for (var i in fireArr) {
                if (norVandak[0] == fireArr[i].x && norVandak[1] == fireArr[i].y) {
                    fireArr.splice(i, 1);
                }
            }
        }

        else {
            this.sharjvel();
        }
    }
    
    bazmanal() {
        var norVandak = random(this.yntrelVandak(0));
        if (norVandak) {
            var newWater = new SaintWater(norVandak[0], norVandak[1]);
            Water.push(newWater);
            matrix[norVandak[1]][norVandak[0]] = 55;
        }
    }
}