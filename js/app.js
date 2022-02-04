/*-------------------------------- Constants --------------------------------*/



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

	
function init(){
  boardArr = [1, 1, null, null, -1, null, null, null, 1]
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
      
      
    }
    if(square === -1) {
      squareElems[idx].textContent = "O"
      
    }
    
  })
  
}



