export class Board {
  constructor ( size ) {
    this.size = size;
    for ( let index = 0; index < this.size; index++ ) {
      this[ index ] = [];
      for (let i = 0; i < this.size; i++) {
        this[ index ].push(i + (this.size * index));
      }
    }
    this.zeroRow = 0;
    this.zeroColumn = 0;
  }
  move ( direction ) {
    switch (direction) {
      case "left":
        [this[this.zeroRow][this.zeroColumn], this[this.zeroRow][this.zeroColumn + 1]] = [this[this.zeroRow][this.zeroColumn + 1], this[this.zeroRow][this.zeroColumn]];
        this.zeroColumn++;
        break;
      case "right":
        [this[this.zeroRow][this.zeroColumn], this[this.zeroRow][this.zeroColumn - 1]] = [this[this.zeroRow][this.zeroColumn - 1], this[this.zeroRow][this.zeroColumn]];
        this.zeroColumn--;
        break;
      case "down":
        [this[this.zeroRow][this.zeroColumn], this[this.zeroRow + 1][this.zeroColumn]] = [this[this.zeroRow + 1][this.zeroColumn], this[this.zeroRow][this.zeroColumn]];
        this.zeroRow++;
        break;
      case "up":
        [this[this.zeroRow][this.zeroColumn], this[this.zeroRow - 1][this.zeroColumn]] = [this[this.zeroRow - 1][this.zeroColumn], this[this.zeroRow][this.zeroColumn]];
        this.zeroRow--;
        break;
      default:
        break;
    }
    console.dir(this.zeroRow);
    console.dir(this.zeroColumn);
  }
  moveNeighbour (num) {
    if (this.zeroColumn + 1 <= this.size && this[this.zeroRow][this.zeroColumn + 1] == num) {
      this.move("left");
      return num;
    } else if (this.zeroColumn - 1 >= 0 && this[this.zeroRow][this.zeroColumn - 1] == num) {
      this.move("right");
      return num;
    } else if (this.zeroRow + 1 <= this.size && this[this.zeroRow + 1][this.zeroColumn] == num) {
      this.move("down");
      return num;
    } else if (this.zeroRow - 1 >= 0 && this[this.zeroRow - 1][this.zeroColumn] == num) {
      this.move("up");
      return num;
    } else {
      return "Incorrect tile number";
    }
  }
}
