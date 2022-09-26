    const container = document.querySelector('#container');
const buttonGrid = document.querySelector('#buttonGrid')
let userInput = 16
let totalSquares = userInput * userInput

createSquares()


function createSquares(){
    removeSquares()
    for(let i=0; i< totalSquares; i++){
        
        let content = document.createElement('div');
        content.classList.add('content');
        container.appendChild(content);

        content.addEventListener('mouseover',function(){
        content.style.backgroundColor="red";
        });
    }
}

buttonGrid.addEventListener('click', function(){
    userInputString = prompt('Number of squares per side?')
    if  (userInputString > 0 && userInputString < 51){
        userInput = parseInt(userInputString);
        totalSquares = userInput * userInput
        createSquares()
        gridTemplate()
    } else userInputString = alert('Please select a number between 1-50')
})

function removeSquares() {
    while(container.firstChild) {
      container.removeChild(container.firstChild);
    }
  }

function gridTemplate(){
container.style.setProperty('grid-template-columns', 'repeat(' + userInput + ', 1fr)');
}


