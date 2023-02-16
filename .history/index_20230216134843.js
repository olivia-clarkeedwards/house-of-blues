/*--------------------------------------/
    Welcome to the house of blues 
/--------------------------------------*/
// Copyright 2023 Olivia Clarke-Edwards. //

const mainTitle = document.getElementById('main-title')
const background = document.getElementById('background')
const audioBG = document.getElementById('audio')
const btn=document.getElementById('btn')

let count = 0
const featureTime = 3
const numEggs = 3 //to add a feature, increment this number by 1 and add feature to blueEasterEgg function in the switch statement
let timer

document.onclick = changeBlues
btn.onclick=removeTearDrops

function changeBlues() {
  mainTitle.style.color = getRandomBlueColor()
  background.style.backgroundColor = getRandomBlueColor()
  if (count == featureTime) {
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
  console.log(randomEgg);
  switch (randomEgg) {
    case 0:
      heyBaby()
      break
    case 1:
      heyBaby()
      ettaJ()
      break
    case 3:
      heyBaby()
      
  }
  //add extra features here
}

function getRandom(max) {
  return Math.floor(Math.random() * max)
}

const sayingsArray = [
  'let it out',
  "hey baby, don't worry,<br> it ain't nothing but the blues",
  'let those teardrops fall',
  'just cry, darling',
]

function heyBaby() {
  mainTitle.innerHTML = sayingsArray[getRandom(sayingsArray.length)]
  if (mainTitle.innerHTML === "let those teardrops fall") {
    timer = setInterval(generateTearDrops, 200);
    btn.style.display = "block";
  }
}

function ettaJ() {
  if (!audioBG.classList.contains('etta')) {
    let ettaJames =
      '<audio autoplay loop controls src="etta-james-id-rather-go-blind.wav" type="audio/wav" alt="Etta James - I\'d Rather Go Blind">No Sound</audio>'
    audioBG.innerHTML = ettaJames
    audioBG.classList.add('etta')
  }
}

function generateTearDrops (params) {
  const drop = document.createElement("div");
  drop.classList.add("drop")
  drop.style.left = Math.random() * 100 + "vw";
  drop.style.animationDuration =  Math.random() * 2 + 2 + "s"
  document.body.appendChild(drop)
}

function removeTearDrops() {
  clearInterval(timer)
  btn.style.display="none"
}
