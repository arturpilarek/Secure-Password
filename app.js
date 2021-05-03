const quizButton = document.querySelector(".knap")
const overlay = document.querySelector("#overlay")
const quizBox = document.querySelector("#quiz__box")
const quizContent = document.querySelector(".question__content")
const exitIcon = document.querySelector("#exitIcon")
const questionNumber = document.querySelector(".quiz-box__question-number")
// Password variables
const passwordInput = document.querySelector("#passwordInput")
const passwordSubmit = document.querySelector(".tjek__submit")
const errorListe = document.querySelector(".errorListe")
const errorContainer = document.querySelector(".error")
var body = document.getElementsByTagName("body")[0]

let ErrorArray = []
console.log(errorContainer.firstChild)

quizButton.addEventListener("click", () => {
  triggerModal()
})

function triggerModal() {
  overlay.classList.add("overlay__active")
  quizBox.style.display = "block"
  document.body.style.overflow = "hidden"
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}

//

exitIcon.addEventListener("click", () => {
  closeModal()
})

function closeModal() {
  overlay.classList.remove("overlay__active")
  quizBox.style.display = "none"
  document.body.style.overflow = "initial"
}

// Spørgesmål 1
const form1 = document.querySelector(".quiz__form")

const checkButton1 = document.querySelector(".checkAnswer-1")
const answers1 = Array.from(document.getElementsByName("question1"))
const result1 = document.querySelector(".question1__result")
const answerPresentation1 = document.querySelector(".question__content-svar")
const answer1 = document.querySelector(".answer1")
const nextQuestionButton1 = document.querySelector(".next-question-1")

checkButton1.addEventListener("click", () => {
  let answers1Filtered = answers1.filter((selectedItem) => {
    return selectedItem.checked
  })
  if (answers1Filtered[0].value === "Btrue") {
    quizBox.style.backgroundColor = "green"
    quizContent.children[0].textContent = "Tillykke, dit svar er rigtigt!"
    quizContent.children[0].style.color = "green"
    form1.classList.add("hide")
    checkButton1.classList.add("hide")
    result1.classList.remove("hide")
    answerPresentation1.classList.remove("hide")
    answer1.classList.remove("hide")
    answer1.textContent = "Falsk"
  } else {
    quizBox.style.backgroundColor = "red"
    quizContent.children[0].textContent = "Desværre, dit svar er forkert"
    quizContent.children[0].style.color = "red"
    form1.classList.add("hide")
    checkButton1.classList.add("hide")
    result1.classList.remove("hide")
    answerPresentation1.classList.remove("hide")
    answer1.classList.remove("hide")
    answer1.textContent = "Falsk"
  }
})

// Spørgesmål 2

const form2 = document.querySelector(".quiz__form2")
const checkButton2 = document.querySelector(".checkAnswer-2")
const answers2 = Array.from(document.getElementsByName("question2"))
const result2 = document.querySelector(".question2__result")

nextQuestionButton1.addEventListener("click", () => {
  result1.classList.add("hide")
  answer1.classList.add("hide")
  answerPresentation1.classList.add("hide")
  quizContent.children[0].style.color = "#006df0"
  quizContent.children[0].innerHTML =
    "Hvilke tegn skal du bruge i en adgangskode for at gøre den stærk?"
  questionNumber.innerHTML = "Spørgsmål 2 ud af 8"
  quizBox.style.backgroundColor = "#006df0"
  form2.classList.remove("hide")
  checkButton2.classList.remove("hide")
})

checkButton2.addEventListener("click", () => {
  let answers1Filtered = answers2.filter((selectedItem) => {
    return selectedItem.checked
  })
  if (answers1Filtered[0].value === "Dtrue") {
    quizBox.style.backgroundColor = "green"
    quizContent.children[0].textContent = "Tillykke, dit svar er rigtigt!"
    quizContent.children[0].style.color = "green"
    form2.classList.add("hide")
    checkButton2.classList.add("hide")
    result2.classList.remove("hide")
    answerPresentation1.classList.remove("hide")
    answer1.classList.remove("hide")
    answer1.textContent = "Alle de ovenstående"
  } else {
    quizBox.style.backgroundColor = "red"
    quizContent.children[0].textContent = "Desværre, dit svar er forkert"
    quizContent.children[0].style.color = "red"
    form2.classList.add("hide")
    checkButton2.classList.add("hide")
    result2.classList.remove("hide")
    answerPresentation1.classList.remove("hide")
    answer1.classList.remove("hide")
    answer1.textContent = "Alle de ovenstående"
  }
})

// Password tjekker

passwordSubmit.addEventListener("click", () => {
  clearErrors()
  checkLength()
  checkCharacters()
  checkSpecCharacters()
  checkNumbers()
  ErrorArray.forEach((ErrorMessage) => {
    const newElement = document.createElement("li")
    newElement.innerText = ErrorMessage
    errorListe.appendChild(newElement)
  })
  if (ErrorArray.length == 0) {
    errorContainer.style.display = "block"
    errorContainer.style.backgroundColor = "#3CB145"
    errorContainer.children[0].innerText =
      "Tillyke din adganskode leve op til alle krav af sikkert password"
  } else {
    errorContainer.style.display = "block"
    errorContainer.style.backgroundColor = "#006df0"
    errorContainer.children[0].innerText = "Du har begået følgende fejl:"
  }
})

function checkLength() {
  if (passwordInput.value.length < 16) {
    ErrorArray.push("Overvej at bruge flere tegn")
  }
}

// ! does not work to make negative expression LAILA
// error: if the first letter is uppercase, will not work properly
function checkCharacters() {
  if (
    !/[A-Z][a-z]/.test(passwordInput.value) &&
    !/[a-z][A-Z]/.test(passwordInput.value)
  ) {
    ErrorArray.push("Brug blanding af store og smaa bogstaver")
  }
}

function checkSpecCharacters() {
  if (!/\W/.test(passwordInput.value)) {
    ErrorArray.push("Overvej at bruge specialtegn")
  }
}

function checkNumbers() {
  if (!/[0-9]/.test(passwordInput.value)) {
    ErrorArray.push("Overvej at bruge tal")
  }
}

function clearErrors() {
  while (errorListe.firstChild) {
    errorListe.removeChild(errorListe.firstChild)
  }
  ErrorArray = []
  console.log(ErrorArray)
}
