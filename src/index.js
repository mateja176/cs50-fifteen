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

board.setAttribute("style", `grid-template-columns: repeat(${num}, auto);`);

// Single update
// [divZero.innerHTML, divNum.innerHTML] = [divNum.innerHTML, divZero.innerHTML];
const update = ( num ) => {
  for (let index = 0; index < document.querySelectorAll( "div" ).length; index++) {
    if (document.querySelectorAll( "div" )[index].innerHTML == num) {
      document.querySelectorAll( "div" )[ index ].innerHTML = 0;
    }
  }
  for (let index = 0; index < document.querySelectorAll( "div" ).length; index++) {
    if (document.querySelectorAll( "div" )[index].innerHTML == 0) {
      document.querySelectorAll( "div" )[ index ].innerHTML = num;
      return;
    }
  }
};

document.querySelectorAll("div").forEach(div => {
  div.addEventListener( "click", () => {
    const numStr = div.innerHTML;
    const num = Number( numStr );
    const swappedNum = fourByFour.moveNeighbour( num );
    if ( typeof swappedNum != "number" ) {
      console.dir( swappedNum );
    } else {
      update(num);
    }
  } );
});
