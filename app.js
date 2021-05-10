const quizButton = document.querySelector(".knap")
const overlay = document.querySelector("#overlay")
const quizBox = document.querySelector(".quiz__box")
const quizContent = document.querySelector(".question__content")
const exitIcon = document.querySelector("#exitIcon")
const questionNumber = document.querySelector(".quiz-box__question-number")
const body = document.getElementsByTagName("body")[0]
// Points tæller
let points = 0

// MODAL BOKS STYRING OG NULSTILLING  stage 1

// Trykkes der på knappen, kommer quiz boksen frem '
quizButton.addEventListener("click", () => {
  overlay.classList.add("overlay__active")
  quizBox.style.display = "block"
  document.body.style.overflow = "hidden"
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
  quizDefaultState()
})

// Funktionen, der nulstiller alle spørgsmålerne, points, osv. er brugt i linje 11, 207,222
function quizDefaultState() {
  quizBox.style.backgroundColor = "#006df0"
  result1.classList.add("hide")
  result2.classList.add("hide")
  result3.classList.add("hide")
  answer1.classList.add("hide")
  answerPresentation1.classList.add("hide")
  form2.classList.add("hide")
  form3.classList.add("hide")
  checkButton2.classList.add("hide")
  checkButton3.classList.add("hide")
  quizContent.children[0].style.color = "#006df0"
  quizContent.children[0].innerHTML =
    "Cyberkriminalitet er kun målrettet mod store virksomheder?"
  questionNumber.innerHTML = "Spørgsmål 1 ud af 8"
  form1.classList.remove("hide")
  checkButton1.classList.remove("hide")
  const radios = Array.from(quizContent.getElementsByTagName("input"))
  resultsContainer.style.display = "none"
  // Uncheck alle radio buttons
  radios.forEach((radio) => {
    radio.checked = false
  })
  points = 0
}

// Funktionen, der lukker quiz popup vindue
function closeModal() {
  overlay.classList.remove("overlay__active")
  quizBox.style.display = "none"
  document.body.style.overflow = "initial"
}

// Luk quiz
exitIcon.addEventListener("click", closeModal)

// SPØRGESMÅL 1   stage 2
const form1 = document.querySelector(".quiz__form")
const checkButton1 = document.querySelector(".checkAnswer-1")
const answers1 = Array.from(document.getElementsByName("question1"))
const result1 = document.querySelector(".question1__result")
const answerPresentation1 = document.querySelector(".question__content-svar")
const answer1 = document.querySelector(".answer1")

// Tjek dit svar 1
checkButton1.addEventListener("click", () => {
  // Array med alle svar muligheder er filteret, for at tjekke om de er selected eller ej
  let answers1Filtered = answers1.filter((selectedItem) => {
    return selectedItem.checked
  })
  // Hvis filteret svar indeholder Btrue value, så går videre til rigtigt svar vidue
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
    points++
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

// SPØRGESMÅL 2 stage 3, 4

const form2 = document.querySelector(".quiz__form2")
const checkButton2 = document.querySelector(".checkAnswer-2")
const answers2 = Array.from(document.getElementsByName("question2"))
const result2 = document.querySelector(".question2__result")
const nextQuestionButton1 = document.querySelector(".next-question-1")

// Næste spørgsmål 1
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

// Tjek dit svar 2
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
    points++
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

// SPØRGESMÅL 3 stage 5,6

const form3 = document.querySelector(".quiz__form3")
const checkButton3 = document.querySelector(".checkAnswer-3")
const answers3 = Array.from(document.getElementsByName("question3"))
const nextQuestionButton2 = document.querySelector(".next-question-2")
const result3 = document.querySelector(".question3__result")

//Næste spørgesmål 2
nextQuestionButton2.addEventListener("click", () => {
  result2.classList.add("hide")
  answer1.classList.add("hide")
  answerPresentation1.classList.add("hide")
  quizContent.children[0].style.color = "#006df0"
  quizContent.children[0].innerHTML =
    "Hvor lang skal en stærk adgangskode være?"
  questionNumber.innerHTML = "Spørgsmål 3 ud af 8"
  quizBox.style.backgroundColor = "#006df0"
  form3.classList.remove("hide")
  checkButton3.classList.remove("hide")
})

// Tjek dit svar 3
checkButton3.addEventListener("click", () => {
  let answers1Filtered = answers3.filter((selectedItem) => {
    return selectedItem.checked
  })
  if (answers1Filtered[0].value === "B3true") {
    quizBox.style.backgroundColor = "green"
    quizContent.children[0].textContent = "Tillykke, dit svar er rigtigt!"
    quizContent.children[0].style.color = "green"
    form3.classList.add("hide")
    checkButton3.classList.add("hide")
    result3.classList.remove("hide")
    answerPresentation1.classList.remove("hide")
    answer1.classList.remove("hide")
    answer1.textContent = "Så lang som muligt"
    points++
  } else {
    quizBox.style.backgroundColor = "red"
    quizContent.children[0].textContent = "Desværre, dit svar er forkert"
    quizContent.children[0].style.color = "red"
    form3.classList.add("hide")
    checkButton3.classList.add("hide")
    result3.classList.remove("hide")
    answerPresentation1.classList.remove("hide")
    answer1.classList.remove("hide")
    answer1.textContent = "Så lang som muligt"
  }
})

// VIS RESULTATET stage 7,8
const checkResultsButton = document.querySelector(".show-results")
const quizContainer = document.querySelector(".quiz__container")
const resultsTemplate = document.querySelector("#resultsTemplate")
const resultsContainer = document.querySelector(".results-container")

// Overgang til results vindue
checkResultsButton.addEventListener("click", () => {
  quizContent.classList.add("hide")
  quizBox.children[0].classList.add("hide")
  quizBox.children[1].classList.add("hide")
  resultsContainer.style.display = "flex"
  quizBox.classList.add("results-container__resize")
  quizBox.style.backgroundColor = "white"
  resultsContainer.children[2].innerText = `Du har fået ${points} ud af 3 rigtige`
  // Exit Quiz Button
  const exitQuizButton = document.querySelector(".exitQuizButton")
  exitQuizButton.addEventListener("click", () => {
    closeModal()
    quizDefaultState()
    quizContent.classList.remove("hide")
    quizBox.children[0].classList.remove("hide")
    quizBox.children[1].classList.remove("hide")
    quizBox.classList.remove("results-container__resize")
  })
  // Quiz Again Button
  const quizAgainButton = document.querySelector(".quizAgainButton")
  quizAgainButton.addEventListener("click", () => {
    quizContent.classList.remove("hide")
    quizBox.children[0].classList.remove("hide")
    quizBox.children[1].classList.remove("hide")
    quizBox.classList.remove("results-container__resize")
    quizDefaultState()
  })
})

// PASSWORD TJEKKER stage 9, 10

const passwordInput = document.querySelector("#passwordInput")
const passwordSubmit = document.querySelector(".tjek__submit")
const errorListe = document.querySelector(".errorListe")
const errorContainer = document.querySelector(".error")
// Tømt array, som vil være fyldt med error strings, når fejl er begået
let ErrorArray = []

// Når sumbit button er clicked, så tjek dens value, og vis error messages i containeren
passwordSubmit.addEventListener("click", () => {
  clearErrors()
  checkLength()
  checkCharacters()
  checkSpecCharacters()
  checkNumbers()
  // Loop igennem errors i ErrorArray og tilføj list item til hver
  ErrorArray.forEach((ErrorMessage) => {
    const newElement = document.createElement("li")
    newElement.innerText = ErrorMessage
    errorListe.appendChild(newElement)
  })
  // Hvis ErrorArray er tømt, så skift "Du har begået følgende fejl:" til succes besked, og skift containeren baggrund til grøn
  if (ErrorArray.length == 0) {
    errorContainer.style.display = "block"
    errorContainer.style.backgroundColor = "#3CB145"
    errorContainer.children[0].innerText =
      "Tillyke din adganskode lever op til alle krav af sikkert password"
  } else {
    errorContainer.style.display = "block"
    errorContainer.style.backgroundColor = "#006df0"
    errorContainer.children[0].innerText = "Du har begået følgende fejl:"
  }
})

// Hvis angivet adganskode er kortere end 16 tegn, så tilføj fejl besked til ErrorArray
function checkLength() {
  if (passwordInput.value.length < 16) {
    ErrorArray.push("Brug minimum 16 tegn")
  }
}

// Regex test| Hvis angivet adganskode ikke indeholder store OG små bogstaver, så tilføj fejl besked til ErrorArray
function checkCharacters() {
  if (
    !/[A-Z][a-z]/.test(passwordInput.value) &&
    !/[a-z][A-Z]/.test(passwordInput.value)
  ) {
    ErrorArray.push("Brug en blanding af store og små bogstaver")
  }
}

//  Regex test| Hvis angivet adganskode ikke indeholder specialtegn(ikke ord), så tilføj fejl besked til ErrorArray
function checkSpecCharacters() {
  if (!/\W/.test(passwordInput.value)) {
    ErrorArray.push("Brug mindst ét specialtegn")
  }
}

// Regex test| Hvis angivet adganskode ikke indeholder tal, så tilføj fejl besked til ErrorArray
function checkNumbers() {
  if (!/[0-9]/.test(passwordInput.value)) {
    ErrorArray.push("Brug mindst ét tal")
  }
}

// Funktionen er kørt i begyndelsen, når submit button er clicked, den fjerner alle error list items og tømmer ErrorArray, så errors ikke er duplikeret hver gang, når brugeren clicker på submit button
function clearErrors() {
  // Så langt som errorListe ul har li, så kør videre
  while (errorListe.firstChild) {
    errorListe.removeChild(errorListe.firstChild)
  }
  ErrorArray = []
}
