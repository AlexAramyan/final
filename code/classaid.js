module.exports = class AID extends Parent{
    constructor(x, y) {
        super(x, y);
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
                    grassEaten++;
                    dead++;
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