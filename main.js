const container = document.querySelector('#container');
const buttonGrid = document.querySelector('#buttonGrid')
const buttonRainbow = document.querySelector('#buttonRainbow')
const buttonBlack = document.querySelector('#buttonBlack')
const buttonEraser = document.querySelector('#buttonEraser')
const buttonReset = document.querySelector('#buttonReset')
const slider = document.querySelector('#gridSlider');
const gridSize = document.querySelector('#gridSize');
let userInput = parseInt(slider.value)
let totalSquares = userInput * userInput
let buttonRainbowPressed = 0
let buttonEraserPressed = 0

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  console.log(slider.value)
}

createSquares()

function createSquares(){
  removeSquares()
  gridSize.textContent = userInput + ' X ' + userInput ;
  for(let i=0; i< totalSquares; i++){
    let content = document.createElement('div');
    content.classList.add('content');
    container.appendChild(content);

    content.addEventListener('mouseover',function(){
    if (buttonRainbowPressed === 1){
      content.style.setProperty('background-color', randomRGB())
      } else if (buttonEraserPressed === 1){
      content.style.backgroundColor="white";
      } else { 
      content.style.backgroundColor="black";
      }
    });
  }
}

slider.addEventListener('click', function(){
  if (userInput !== parseInt(slider.value)){
      userInput = parseInt(slider.value);
      totalSquares = userInput * userInput
      createSquares()
      gridTemplate()
  }
})

// buttonGrid.addEventListener('click', function(){
//   userInputString = prompt('Number of squares per side?')
//   if (userInputString > 0 && userInputString < 51){
//       userInput = parseInt(userInputString);
//       totalSquares = userInput * userInput
//       createSquares()
//       gridTemplate()
//   } else userInputString = alert('Please select a number between 1-50')
// })

function removeSquares() {
  while(container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function gridTemplate(){
  container.style.setProperty('grid-template-columns', 'repeat(' + userInput + ', 1fr)');
}


function randomRGB(){
  function randomNumber(){
    return Math.floor(Math.random()*255);
  }
  let r = randomNumber()
  let g = randomNumber()
  let b = randomNumber()
  let rgb = `rgb(${r},${g},${b})`
  return rgb
}


buttonBlack.addEventListener('click', function(){
  buttonRainbowPressed = 0
  buttonEraserPressed = 0
  buttonBlack.style.cssText = "box-shadow: 0px 0px 15px 5px orange;"
  buttonRainbow.style.cssText = ""
})

buttonRainbow.addEventListener('click', function(){
  buttonRainbowPressed = 1
  buttonEraserPressed = 0
  buttonRainbow.style.cssText = "box-shadow: 0px 0px 15px 5px orange;"
  buttonBlack.style.cssText = ""
  buttonEraser.style.cssText = ""
})

buttonEraser.addEventListener('click', function(){
  buttonEraserPressed = 1
  buttonRainbowPressed = 0
  buttonEraser.style.cssText = "box-shadow: 0px 0px 15px 5px orange;"
  buttonBlack.style.cssText = ""
  buttonRainbow.style.cssText = ""
})

buttonReset.addEventListener('click', function(){
  document.location.reload()
})
