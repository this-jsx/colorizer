const colors = document.querySelector('.colors')

function setColor(howMany) {
  for(let i = 0; i < howMany; i++) {
    const box = document.createElement('div')
    box.classList.add('box')
    setInterval(function() {
      box.style.background = randomColor()
    }, 1000)
    colors.append(box)
  }
}

function randomColor() {
  const hex = 'abcdef0123456789'
  let color = ''
  for(let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * hex.length)]
  }
  return '#' + color
}

const das = randomColor()
setColor(80)
console.log(das);