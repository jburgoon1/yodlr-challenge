const mail = document.querySelector('input[name="email"]')
const first = document.querySelector('input[name="firstName"]')
const last = document.querySelector('input[name="lastName"]')
const button = document.querySelector('button')
const signUpForm = document.querySelector('form')

signUpForm.addEventListener('submit', async function(e){
    e.preventDefault()
    let firstName = first.value
    let lastName = last.value
    let email = mail.value
let newUser = await axios.post(`http://localhost:3000/users/`, {firstName, lastName, email})
console.log(newUser)
})

