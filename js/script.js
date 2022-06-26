const elForm = document.querySelector(".sign-in__form");
const elInputEmail = document.querySelector(".input-in__email");
const elInputPassword = document.querySelector(".input-in__password");

elForm.addEventListener("submit", async evt => {
    evt.preventDefault()

    const dataPost = {
        email: elInputEmail.value,
        password: elInputPassword.value,
    }

    const result = await loginRequest(dataPost)
    localStorage.setItem("token", result["Authorization"])
    window.location.href = "/index.html"
})


