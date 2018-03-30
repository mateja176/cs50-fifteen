const rowsArray = [];
const columnsArray = [ 0 ];
let zeroColumn = 0;
let zeroRow = 0;

class Board {
  constructor ( size ) {
    this.size = size;
    for ( let index = 0; index < size; index++ ) {
      rowsArray.push( `row${ index }` );
      this[rowsArray[ index ]] = [];
      for ( let i = 0; i < size; i++ ) {
          this[rowsArray[index]].push(columnsArray[columnsArray.length - 1]);
          columnsArray.push(columnsArray[columnsArray.length - 1] + 1);
      }
    }
  }
  move ( direction ) {
    switch (direction) {
      case "left":
        [this[`row${zeroRow}`][zeroColumn], this[`row${zeroRow}`][zeroColumn + 1]] = [this[`row${zeroRow}`][zeroColumn + 1], this[`row${zeroRow}`][zeroColumn]];
        zeroColumn++;
        break;
      case "right":
        [this[`row${zeroRow}`][zeroColumn], this[`row${zeroRow}`][zeroColumn - 1]] = [this[`row${zeroRow}`][zeroColumn - 1], this[`row${zeroRow}`][zeroColumn]];
        zeroColumn--;
        break;
      case "down":
        [this[`row${zeroRow}`][zeroColumn], this[`row${zeroRow + 1}`][zeroColumn]] = [this[`row${zeroRow + 1}`][zeroColumn], this[`row${zeroRow}`][zeroColumn]];
        zeroRow++;
        break;
      case "up":
        [ this[`row${zeroRow}`][ zeroColumn ], this[`row${zeroRow - 1}`][ zeroColumn ] ] = [ this[`row${zeroRow - 1}`][ zeroColumn ], this[`row${zeroRow}`][ zeroColumn ] ];
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
fourByFour.move( "right" );
fourByFour.move( "down" );
fourByFour.move( "up" );
console.dir(fourByFour.row0);
console.dir(fourByFour.row1);
console.dir(fourByFour.row2);
console.dir(fourByFour.row3);

