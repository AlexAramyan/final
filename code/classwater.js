global.braiseFire = 0;
module.exports = class SaintWater extends Parent {
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
        var vandak1 = random(this.yntrelVandak(3));
        if (vandak || vandak1) {
            if (vandak) {
                matrix[this.y][this.x] = 0;
                this.x = vandak[0];
                this.y = vandak[1];
                matrix[this.y][this.x] = 55;
            }
            else {
                matrix[this.y][this.x] = 0;
                this.x = vandak1[0];
                this.y = vandak1[1];
                matrix[this.y][this.x] = 55;
            }
        }
    }

    hangtsnel() {
        var norVandak1 = random(this.yntrelVandak(4));
        var norVandak2 = random(this.yntrelVandak(10));
        if (norVandak1) {
            matrix[this.x][this.y] = 0;
            this.x = norVandak1[1];
            this.y = norVandak1[0];
            matrix[this.x][this.y] = 55;

            for (var i in fireArr) {
                if (norVandak1[0] == fireArr[i].x && norVandak1[1] == fireArr[i].y) {
                    fireArr.splice(i, 1);
                    braiseFire = braiseFire + 1;
                }
            }
        }

        else {
            this.sharjvel();
        }

        if (norVandak2) {
            matrix[this.x][this.y] = 0;
            this.x = norVandak2[1];
            this.y = norVandak2[0];
            matrix[this.x][this.y] = 55;

            for (var i in slenderArr) {
                if (norVandak2[0] == slenderArr[i].x && norVandak2[1] == slenderArr[i].y) {
                    slenderArr.splice(i, 1);
                    braiseFire = braiseFire + 1;
                }
            }
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