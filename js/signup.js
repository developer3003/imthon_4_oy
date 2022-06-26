const elSignform = document.querySelector(".sign-up__form");
const elSignUser = document.querySelector(".sign-up__name")
const elSgnInputEmail = document.querySelector(".sign-up__email");
const elSignInputPassword = document.querySelector(".sign-up__password");

elSignform.addEventListener("submit", async evt => {
    evt.preventDefault()

    const dataPostSignUp = {
        name: elSignUser.value,
        email: elSgnInputEmail.value,
        password: elSignInputPassword.value,
        isAdmin: true,
    }

    const result = await signUp(dataPostSignUp)
    console.log(result)
    if (result) {
        const { name, isAdmin, ...loginCreadentials } = dataPostSignUp
        const result = await loginRequest(loginCreadentials)
        localStorage.setItem('token', result['Authorization'])
        window.location.href = "/index.html"
    }
})