import { Board } from "./board.1.js";

const num = 4;
const fourByFour = new Board( num );

const board = document.querySelector( ".board" );

for ( let index = 0; index < num; index++ ) {
  for (let i = 0; i < num; i++) {
    const div = document.createElement( "div" );
    div.innerHTML = fourByFour[ index ][ i ];
    if (document.querySelectorAll("div").length === 0) {
      div.className = `zero`;
    } else {
      div.className = `tile${document.querySelectorAll("div").length}`;
    }
    board.appendChild( div );
  }
}

board.setAttribute("style", `grid-template-columns: repeat(${num}, auto);`);

// Single update
// [divZero.innerHTML, divNum.innerHTML] = [divNum.innerHTML, divZero.innerHTML];
const update = ( num ) => {
  // console.dir( `Num: ${ num }` );
  // console.dir( document.querySelectorAll( "div" ).length);
  const divs = document.querySelectorAll( "div" );
  // console.dir(divs[0].innerHTML);
  for (let index = 0; index < divs.length; index++) {
    // console.dir(divs[index].innerHTML);
    if (divs[index].innerHTML == num) {
      // console.dir(divs[index].innerHTML);
      // console.dir(divs[index].innerHTML);
      divs[ index ].innerHTML = 0;
    }
  }
  for (let index = 0; index < divs.length; index++) {
    if (divs[index].innerHTML == 0) {
      divs[ index ].innerHTML = num;
      return;
    }
  }
};

document.querySelectorAll("div").forEach(div => {
  div.addEventListener( "click", () => {
    const cls = div.classList.toString();
    const numStr = cls.match( /\d+/ )[ 0 ];
    const num = Number( numStr );
    // console.dir( num );
    // console.dir(typeof num);
    const swappedNum = fourByFour.moveNeighbour( num );
    // console.dir( swappedNum );
    // console.dir(typeof swappedNum);
    if ( typeof swappedNum != "number" ) {
      // console.dir( "Fail" );
    } else {
      // console.dir("Win");
      update(num);
      // updateZero(num);
    }
  } );
});
