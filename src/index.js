import { Board } from "./board.1.js";

const num = 4;
const fourByFour = new Board( num );

const board = document.querySelector( ".board" );

for ( let index = 0; index < num; index++ ) {
  for (let i = 0; i < num; i++) {
    const div = document.createElement( "div" );
    if ( fourByFour[ index ][ i ] === 0 ) {
      div.setAttribute( "data-display", "hidden" );
    }
    div.innerHTML = fourByFour[ index ][ i ];
    div.className = `tile${document.querySelectorAll("div").length}`;
    board.appendChild( div );
  }
}

board.setAttribute("style", `grid-template-columns: repeat(${num}, auto);`);

const update = ( num ) => {
  let zeroFirst = false;
  document.querySelectorAll( "div" ).forEach( div => {
    if (div.innerHTML == num || div.innerHTML == 0) {
      if ( div.innerHTML == num ) {
        div.innerHTML = 0;
        div.setAttribute("data-display", "hidden");
      } else {
        zeroFirst = true;
        div.innerHTML = num;
        div.removeAttribute( "data-display" );
      }
    }
  } );
  let secondOccurance = false;
  document.querySelectorAll( "div" ).forEach( div => {
    if (zeroFirst) {
      if (div.innerHTML == num) {
        if (secondOccurance == false) {
          secondOccurance = true;
        } else {
          div.innerHTML = 0;
          div.setAttribute("data-display", "hidden");
        }
      }
    } else {
      if (div.innerHTML == 0) {
        if (secondOccurance == false) {
          secondOccurance = true;
        } else {
          div.innerHTML = num;
          div.removeAttribute("data-display");
        }
      }
    }
  } );
};

const clickCounter = () => {
  const clicks = document.querySelector( ".clicks" );
  clicks.innerHTML++;
};

const solutionCheck = () => {
  const biggest = fourByFour.size ** 2 - 1;
  document.querySelectorAll( "div" ).forEach( (div, i) => {
    const cls = div.classList;
    const ordinalStr = cls.toString().match( /\d+/ )[ 0 ];
    const ordinal = Number(ordinalStr);
    const html = Number( div.innerHTML );
    if ((html + ordinal) === biggest && ordinal !== 15) {
      div.setAttribute( "data-solved", "true" );
    }
  } );
};

document.querySelectorAll("div").forEach(div => {
  div.addEventListener( "click", () => {
    const numStr = div.innerHTML;
    const num = Number( numStr );
    const swappedNum = fourByFour.moveNeighbour( num );
    if ( typeof swappedNum != "number" ) {
      console.dir( swappedNum );
    } else {
      update( num );
      clickCounter();
      solutionCheck();
    }
  } );
} );

const shuffle = document.querySelector( "button" );
shuffle.addEventListener( "click", () => {
  location.reload();
} );
