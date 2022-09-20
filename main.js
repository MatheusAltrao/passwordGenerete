const btn = document.getElementById('btn')
let input = document.getElementById('input')
let label = document.getElementById('label')
let password = document.getElementById('password')
let flag = document.getElementById('flag')

label.innerHTML = input.value

input.addEventListener('change', () => {
  label.innerHTML = input.value
})

function randomPassword() {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const symbols = ['!', '@', '#', '$', '%']
  const caractersLower = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ]

  const caractersUpper = caractersLower.map(i => i.toUpperCase())

  const array = [numbers, symbols, caractersLower, caractersUpper]

  var list = []

  for (let i = 0; i < input.value; i++) {
    let v1 = Math.floor(Math.random() * 4)
    let v2 = Math.floor(Math.random() * array[v1].length)

    list.push(array[v1][v2])
  }

  password.innerHTML = list.join('')


  let copy = password.innerText

  navigator.clipboard.writeText(copy)
  console.log(copy)
}
