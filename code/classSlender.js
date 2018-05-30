module.exports = class Slender {
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
        var cases = [this.yntrelVandak(0), this.yntrelVandak(1), this.yntrelVandak(2), this.yntrelVandak(2.5), this.yntrelVandak(3), this.yntrelVandak(4), this.yntrelVandak(55)];
        var vandak;
        // for (var i in cases){
        //     vandak = random(cases[i]);
        // }
        vandak = random(this.yntrelVandak(3));
        if (vandak) {
            matrix[this.y][this.x] = 0;
            this.x = vandak[0];
            this.y = vandak[1];
            matrix[this.y][this.x] = 10;
            this.countOFmoves++;
            this.E--;
        }
    }
}