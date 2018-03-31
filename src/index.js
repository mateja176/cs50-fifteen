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

const update = (num) => {
  document.querySelectorAll( "div" ).forEach( div => {
    if (div.innerHTML === num) {
      div.innerHTML = 0;
    }
  } );
};

const updateZero = (num) => {
  document.querySelectorAll("div").forEach(div => {
    if ( div.innerHTML === 0 ) {
      div.innerHTML = num;
      return;
    }
  });
};

document.querySelectorAll("div").forEach(div => {
  div.addEventListener( "click", () => {
    const cls = div.classList.toString();
    const num = cls.match( /\d+/ )[ 0 ];
    console.dir(num);
    const swappedNum = fourByFour.moveNeighbour( num );
    console.dir(swappedNum);
    if (swappedNum) {
      update( num );
      updateZero( num );
    }
  } );
});
