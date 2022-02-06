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
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]
  
  
console.log("winningCombos")
console.log(winningCombos)
//console.log(winningCombos)

// 5) Next, the app should wait for the user to click a square and call a handleClick function
board.addEventListener("click", handleClick)

  function handleClick(event) {
    let sqIdx = parseInt((event.target.id).replace('sq',''))
    if (boardArr[sqIdx] === null && winner === null) {
      boardArr[sqIdx] = turn
      turn = turn * -1
      render()
      getWinner()
    }
  }

  	// 5.6) Set the winner variable if there's a winner by calling a new function: getWinner.
	//   const sums =[]
  // function getWinner() {
  //     winningCombos.forEach(function(combo, idx){
  //       let addCombos = (Math.abs(boardArr[combo[0]] + boardArr[combo[1]] + boardArr[combo[2]]))
  //       if (addCombos === 3) {
  //         winner = boardArr[combo[0]]
  //       }
  //      if (boardArr[combo] !== null) {
  //       winner === "T"
  //     }

  //     else {
  //       winner === null
  //     }
  //     }) 
  //     getWinner()
  //     render()
   // }
function getWinner() {
  let addCombos = []
  for(let i = 0; i < winningCombos.length; i++) {
    let total = boardArr[winningCombos[i][0]] + boardArr[winningCombos[i][1]] + boardArr[winningCombos [i][2]]
    addCombos.push(total)
    console.log("total" + total)
    console.log("i" + i)
  }
    
  let xWins = addCombos.some(element => element == 3)
  let oWins = addCombos.some(element => element == -3)
  let tie = boardArr.every(element => element != null)
  console.log("xWins" + xWins)
  console.log("oWins" + oWins)
  console.log("tie" + tie)
  

     //const tie = 
  if (xWins) {
  winner = 1
  } else if (oWins) {
  winner = -1
  } else if (tie) {
    winner = 'T'
  }
  console.log("winner" + winner)
  render()
}
