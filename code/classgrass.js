module.exports = class Grass extends Parent {
    constructor(x, y) {
        super(x, y);
        this.multiply = 200;
        this.speed = 1000;
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
                //this.speed = 2;
                break;
            case "fall":
               // this.speed = 4;
                break;
            case "winter":
                //this.speed = 8;
                break;
            case "spring":
                //this.speed = 2;
            default:
                //this.speed = 2;
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