const btnSubmit=document.getElementById("btn")
const btnDismiss=document.getElementById("btn-dismiss")
const emailInput = document.getElementById("email")
const error = document.getElementById("error")
const emailidSpan=document.querySelector(".emailid")
const successPage = document.querySelector(".success-page")
const emailPage=document.querySelector(".email-page")


function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}
btnSubmit.addEventListener("click", (e) => {
    e.preventDefault()
    const email = emailInput.value.trim()
    if (validateEmail(email)) {
        emailPage.classList.add("hidden")
        successPage.classList.remove("hidden")
        emailidSpan.innerHTML = email
        emailInput.value=""
        
    }
    else {
        error.classList.remove("hidden")
        emailInput.classList.add("error-input")
    }
    
})
btnDismiss.addEventListener("click", () => {
    successPage.classList.add("hidden")
    emailPage.classList.remove("hidden")
    error.classList.add("hidden")
    emailInput.classList.remove("error-input")
    
})