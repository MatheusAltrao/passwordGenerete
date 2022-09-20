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
  const symbols = ['!', '@', '#', '$',]
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


  let newPassword = password.innerText

  navigator.clipboard.writeText(newPassword)


  return (caractersUpper, caractersLower, symbols, numbers)
}


function lvlPassword() {

  var password = document.getElementById('inputlvl').value
  var power = 0


  if ((password.length >= 4) && (password.length <= 7)) {
    power += 10;
  } else if (password.length > 7) {
    power += 25;
  }

  if ((password.length >= 5) && (password.match(/[a-z]+/))) {
    power += 10;
  }

  if ((password.length >= 6) && (password.match(/[A-Z]+/))) {
    power += 20;
  }

  if ((password.length >= 7) && (password.match(/[@#$%&;*]/))) {
    power += 25;
  }

  if (password.match(/([1-9]+)\1{1,}/)) {
    power += -25;
  }

  showPower(power);

  document.getElementById('inputlvl').value = ''

}

function showPower(power) {
  const lvlpass = document.getElementById('lvlpass')

  if (power === 0) {
    lvlpass.innerHTML = 'Insira a sua senha'
    lvlpass.style.color = ('#fff')
  }

  if ((power > 1) && (power < 30)) {

    lvlpass.innerHTML = 'Senha muito fraca'
    lvlpass.style.color = ('#bb2124')

  } else if ((power >= 30) && (power < 50)) {

    lvlpass.innerHTML = 'Senha fraca'
    lvlpass.style.color = ('#f0ad4e')

  } else if ((power >= 50) && (power < 70)) {

    lvlpass.innerHTML = 'Senha forte'
    lvlpass.style.color = ('#5bc0de')

  } else if (power > 70) {

    lvlpass.innerHTML = 'Senha muito forte'
    lvlpass.style.color = ('#22bb33')
  }
}

function showPassword() {
  const password = document.getElementById('inputlvl')

  password.type = password.type == 'text' ? 'password' : 'text'

}

