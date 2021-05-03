const quizButton = document.querySelector(".knap")
const overlay = document.querySelector("#overlay")
const quizBox = document.querySelector("#quiz__box")
const exitIcon = document.querySelector("#exitIcon")
// Password variables
const passwordInput = document.querySelector("#passwordInput")
const passwordSubmit = document.querySelector(".tjek__submit")
const errorListe = document.querySelector(".errorListe")
const errorContainer = document.querySelector(".error")

let ErrorArray = []
console.log(errorContainer.firstChild)

quizButton.addEventListener("click", () => {
  triggerModal()
})

function triggerModal() {
  overlay.classList.add("overlay__active")
  quizBox.style.display = "block"
  document.body.style.overflow = "hidden"
}

exitIcon.addEventListener("click", () => {
  closeModal()
})

function closeModal() {
  overlay.classList.remove("overlay__active")
  quizBox.style.display = "none"
  document.body.style.overflow = "initial"
}

// Spørgesmål 1

const checkButton1 = document.querySelector(".checkAnswer-1")
const answers1 = Array.from(document.getElementsByName("question1"))

checkButton1.addEventListener("click", () => {
  let answers1Filtered = answers1.filter((selectedItem) => {
    return selectedItem.checked
  })
  console.log(answers1Filtered)
})

function checkAnswer() {}

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
