const quizButton = document.querySelector(".knap")
const overlay = document.querySelector("#overlay")
const quizBox = document.querySelector("#quiz__box")
const exitIcon = document.querySelector("#")

quizButton.addEventListener("click", () => {
  triggerModal()
})

function triggerModal() {
  overlay.classList.add("overlay__active")
  quizBox.style.display = "block"
}

function closeModal() {}
