const container = document.querySelector('#container');
const buttonGrid = document.querySelector('#buttonGrid')
let userInput = 16
let totalSquares = userInput * userInput


for(let i=0; i< totalSquares; i++){
    const content = document.createElement('div');
    content.classList.add('content');
    container.appendChild(content);

    content.addEventListener('mouseover',function(){
    content.style.backgroundColor="red";
    });
    // content.addEventListener('mouseleave',function(){
    //     content.style.backgroundColor="blue";
    //     });
}

buttonGrid.addEventListener('click', function(){
   userInputString = prompt('Number of squares per side?')
   userInput = parseInt(userInputString);
   return userInput
})

// container.style.setProperty('grid-template-columns', 'repeat(' + userInput + ', 1fr)');
