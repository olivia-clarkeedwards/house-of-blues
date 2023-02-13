/*---------------------------------/
    Welcome to the house of blues 
/---------------------------------*/

const mainTitle = document.getElementById('main-title')
const background = document.getElementById('background')
const audioBG = document.getElementById('audio')
const sayingsArray = [
  'let it out',
  "hey baby, don't worry,<br> it ain't nothing but the blues",
  'let those teardrops fall',
  'just cry, darling',
]

let count = 0
const numEggs = 2 //to add a feature, increment this number by 1 and add feature to blueEasterEgg function in the switch statement

document.onclick = changeBlues

function changeBlues() {
  mainTitle.style.color = getRandomBlueColor()
  background.style.backgroundColor = getRandomBlueColor()
  if (count == 5) {
    blueEasterEgg()
    count = 0
  }
  count++
}

function getRandomBlueColor() {
  let hue = Math.floor(Math.random() * 30 + 185)
  let saturation = Math.floor(Math.random() * 60 + 40)
  let lightness = Math.floor(Math.random() * 60 + 20)
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`
}

function blueEasterEgg() {
  let randomEgg = getRandom(numEggs)
  switch (randomEgg) {
    case 0:
      heyBaby()
      break
    case 1:
      heyBaby()
      ettaJ()
      break
  }
  //add extra features here
}

function getRandom(max) {
  return Math.floor(Math.random() * max)
}

function heyBaby() {
  mainTitle.innerHTML = sayingsArray[getRandom(sayingsArray.length - 1)]
}

function ettaJ() {
  if (!audioBG.classList.contains('etta')) {
    let ettaJames =
      '<audio autoplay src="etta-james-id-rather-go-blind.wav" type="audio/wav" alt="Etta James - I\'d Rather Go Blind">No Sound</audio>'
    audioBG.innerHTML = ettaJames
    audioBG.classList.add('etta')
  }
}
