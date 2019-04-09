// step 1: find element you want to add an event to

const main = document.getElementById('main')

// step 2: add the event :
// 1. is the event we care about
// 2. the function that is supposed run when ^^ event happens

main.addEventListener('click', onClick)

//step 3: make the function that will happen on click. it's called onClick in this example. 

function onClick(){
  console.log('hey it was clicked!')
}

// adding event listeners to entire document

document.addEventListener('click', onClick)

// here's a way of showing you every single detail about the event in the console: 

function onClick(event){
  console.log(event)
}

function onKeyDown(event){
  console.log(event.keyCode)
}

main.addEventListener('click', onClick)
document.addEventListener('keydown', onKeyDown)

// add a new listener to input

const inputBox = document.getElementById('input')

function onInputKeyDown(event) {
 console.log(event) 
 if (event.keyCode === 71) {
   event.preventDefault()
 } 
}

inputBox.addEventListener('keydown', onInputKeyDown)

// yellow p tag << using anonymous functions (ES6 Javascript):

const p = document.getElementById('yellow')

function onYellowClick(event) {
}

p.addEventListener('click', (event) => {
  console.log(event)
  p.style.backgroundColor = 'yellow'
})

// button actions: adding a new element to the page using appendChild to put it on the body of the document

const button = document.getElementById('plus')

button.addEventListener('click', (event) => {
  const newP = document.createElement('p')
  newP.innerHTML = 'WELL LOOK AT YOU.'
  document.body.appendChild(newP)
})

// div stuff. make every div within "divs" do the same thing. Event bubbling! Can be a common bug. Need to add stopPropagation to the loop ("for..") if the action should only be applied to a single, nested div  

const divs = document.querySelectorAll('div')

for (let div of divs) {
  div.addEventListener('click', (event) => {
    console.log(event)
    event.stopPropagation()
  })
}

