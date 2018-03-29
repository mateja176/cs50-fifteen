const rowsArray = [];
const valuesArray = [ 0 ];
let zeroColumn = 0;
let zeroRow = 0;

class Board {
  constructor ( size ) {
    this.size = size;
    for ( let index = 0; index < size; index++ ) {
      rowsArray.push( `row${ index }` );
      this[rowsArray[ index ]] = [];
      for ( let i = 0; i < size; i++ ) {
          this[rowsArray[index]].push(valuesArray[valuesArray.length - 1]);
          valuesArray.push(valuesArray[valuesArray.length - 1] + 1);
      }
    }
  }
  move ( direction ) {
    switch (direction) {
      case "left":
        [this.row0[zeroColumn], this.row0[zeroColumn + 1]] = [this.row0[zeroColumn + 1], this.row0[zeroColumn]];
        zeroColumn++;
        break;
      case "right":
        [this.row0[zeroColumn], this.row0[zeroColumn - 1]] = [this.row0[zeroColumn - 1], this.row0[zeroColumn]];
        zeroColumn--;
        break;
      case "down":
          [this.row0[zeroColumn], this.row1[zeroColumn]] = [this.row1[zeroColumn], this.row0[zeroColumn]];
          zeroRow++;
          zeroRow = 0;
        break;
      case "up":
          [ this.row1[ zeroColumn ], this.row0[ zeroColumn ] ] = [ this.row0[ zeroColumn ], this.row1[ zeroColumn ] ];
          zeroRow--;
        break;
      default:
        break;
    }
  }
}

const fourByFour = new Board( 4 );

console.dir(fourByFour.row0);
console.dir(fourByFour.row1);
console.dir(fourByFour.row2);
console.dir(fourByFour.row3);
fourByFour.move( "left" );
fourByFour.move( "down" );
console.dir(fourByFour.row0);
console.dir(fourByFour.row1);
console.dir(fourByFour.row2);
console.dir(fourByFour.row3);

// fourByFour.move( "right" );
// fourByFour.move( "up" );
