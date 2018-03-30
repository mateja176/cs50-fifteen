import { Board } from "./board.1.js";

const num = 4;
const fourByFour = new Board( num );

const board = document.querySelector( ".board" );

for ( let index = 0; index < num; index++ ) {
  for (let i = 0; i < num; i++) {
    const div = document.createElement( "div" );
    div.innerHTML = fourByFour[ index ][ i ];
    div.className = `tile${document.querySelectorAll("div").length}`;
    board.appendChild( div );
  }
}

// let initialBoard = "";
// for (let index = 0; index < num; index++) {
//   initialBoard += (`[ ${fourByFour[index]} ]<br>`);
// }
// initialBoard += "----------------------------<br>";
// fourByFour.move( "left" );
// fourByFour.moveNeighbour( 1 );

board.setAttribute("style", `grid-template-columns: repeat(${num}, auto);`);

// document.querySelectorAll("div").forEach(div => {
//   div.addEventListener( "click", () => {
//     const num = div.classList.match( /\d+/ );
//     update(fourByFour.moveNeighbour( num ););
//   } );
// });
