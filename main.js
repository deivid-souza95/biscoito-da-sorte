const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const screenOne = document.querySelector(".screen1")
const screenTwo = document.querySelector(".screen2")

let text = ['A vida trará coisas boas se tiver paciência.',
'Não compense na ira o que lhe falta na razão.',
'Não há que ser forte. Há que ser flexível.',
'Não importa o tamanho da montanha, ela não pode tapar o sol.',
'A adversidade é um espelho que reflete o verdadeiro eu.',
'Quem olha para fora sonha; quem olha para dentro acorda.',
'O conhecimento é a única virtude e a ignorância é o único vício.']
let randomNumber = Math.floor(Math.random() * (text.length))

let xAttempts = 0

btnTry.addEventListener("click", handleTryClick)
btnReset.addEventListener("click", handleResetClick)
document.addEventListener('keydown', function(event){
  if(event.key == 'Enter' && screenOne.classList.contains('hide')) {
    handleResetClick()
  }
})


function handleTryClick(event) {
  toogleScreen()
  event.preventDefault()

    screenTwo.querySelector('.screen2 p').innerHTML = `${text[randomNumber]}`

}

function handleResetClick(){
  toogleScreen()
  randomNumber = Math.floor(Math.random() * (text.length))
}

function toogleScreen(){
  screenOne.classList.toggle("hide")
  screenTwo.classList.toggle("hide")
}