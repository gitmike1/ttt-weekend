/*-------------------------------- Constants 
--------------------------------*/


/*---------------------------- Variables (state) ----------------------------*/

let turn 
let winner


/*------------------------ Cached Element References ------------------------*/
let squareElems = document.querySelectorAll('.square')
let statusMessage = document.querySelector('#message')
let board = document.querySelector('.board')
/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/

// 3.1) Call an initialize function
init() 

// 3.2.1) Initialize the board array to 9 nulls to represent empty squares.
function init(){
  boardArr = [null, null, null, null, null, null, null, null, null]
  turn = 1
  winner = null
  render() 
}

function render(){
  boardArr.forEach(function(square, idx){
    //console.log (squareElems[idx])
    //console.log(square)
    if(square === 1) {
      squareElems[idx].textContent ="X" 
      squareElems[idx].style.color ="red" 
      squareElems[idx].style.background = "blue" 
    }
    if(square === -1) {
      squareElems[idx].textContent = "O"
      squareElems[idx].style.color = "blue"
      squareElems[idx].style.background = "red"
    }
    
  })
  // 3.3.2) Render a message reflecting the currrent game state:
    if (winner === null) {
    statusMessage.textContent = `it's ${turn ===1 ? 'X' : 'O'}'s turn`
    }
    else if (winner === 'T') {
    statusMessage.textContent = "It's a tie!"
    }
    else {
    statusMessage.textContent = `Congratulations, ${winner === 1 ? 'X' : 'O'}  wins!)`
    }
}


// 4.1) Define the 8 possible winning combinations as an array of arrays.
const winningCombos = [
  [boardArr[0],boardArr[1],boardArr[2]],
  [boardArr[3],boardArr[4],boardArr[5]],
  [boardArr[6],boardArr[7],boardArr[8]],
  [boardArr[0],boardArr[3],boardArr[6]],
  [boardArr[1],boardArr[4],boardArr[7]],
  [boardArr[2],boardArr[5],boardArr[8]],
  [boardArr[0],boardArr[4],boardArr[8]],
  [boardArr[2],boardArr[4],boardArr[6]]
]
console.log(winningCombos)
//console.log(winningCombos)

// 5) Next, the app should wait for the user to click a square and call a handleClick function
  board.addEventListener("click", handleClick)

  function handleClick(event) {
    let sqIdx = (event.target.id).replace('sq','')
    if (boardArr[sqIdx] === null && winner === null) {
   
    boardArr[sqIdx] = turn
    console.log(boardArr)
    turn = turn * -1
    render()
    }
}

  	// 5.6) Set the winner variable if there's a winner by calling a new function: getWinner.
	  
    function getWinner() {
      winningCombos.forEach(function(combo){
        if (Math.abs(boardArr[combo[0]] + boardArr[combo[1]] + boardArr[combo[2]]) === 3) {
        winner = boardArr[combo[0]]
        }
        
      })
    }
