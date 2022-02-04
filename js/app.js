/*-------------------------------- Constants 
--------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/

let turn 
let winner


/*------------------------ Cached Element References ------------------------*/
let squareElems = document.querySelectorAll('.square')
let statusMessage = document.querySelector('#message')

/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/

// 3.1) Call an initialize function
init() 

// 3.2.1) Initialize the board array to 9 nulls to represent empty squares.
function init(){
  boardArr = [1, 1, 1, -1, -1, 1, null, null, 1]
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
    // 3.3.2) Render a message reflecting the currrent game state:
  })

  //let winner = "5"

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


const winningCombos = [
  boardArr[0]+boardArr[1]+boardArr[2]=== 3 || -3,
  boardArr[3]+boardArr[4]+boardArr[5]=== 3 || -3,
  boardArr[6]+boardArr[7]+boardArr[8]=== 3 || -3,
  boardArr[0]+boardArr[3]+boardArr[6]=== 3 || -3,
  boardArr[1]+boardArr[4]+boardArr[7]=== 3 || -3,
  boardArr[2]+boardArr[5]+boardArr[8]=== 3 || -3,
  boardArr[0]+boardArr[4]+boardArr[8]=== 3 || -3,
  boardArr[2]+boardArr[4]+boardArr[6]=== 3 || -3
  

]

console.log(winningCombos)
