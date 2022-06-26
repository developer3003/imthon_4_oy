const API = "https://fast-ravine-16741.herokuapp.com";
const elUserName = document.querySelector(".header__user-name");

async function loginRequest(dataPost) {
    try {
        const response = await fetch(`${API}/api/auth`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dataPost)
        })

        const result = await response.json()

        if(response.status > 300) throw new Error(result.error)

        return result

    } catch (error) {
        alert("Xatolik yuzberdi")
    }
}

async function getProfile() {
    try {
        const token = localStorage.getItem('token')
        const response = await fetch(`${API}/api/users/me`, {
            method: "GET",
            headers: {
                "Authorization": token
            }
        })

        const result = await response.json()

        return result
    } catch (error) {
        alert("Xatolik yuzberdi")
    }
}

getProfile().then(result => {
    elUserName.textContent = result.name
})

async function signUp(dataPostSignUp) {
    try {
        const response = await fetch(`${API}/api/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dataPostSignUp)
        })

        const result = await response.json()

        if(response.status > 300) throw new Error(result.error)

        return result

    } catch (error) {
        alert("Xatolik yuzberdi")
    }
}

async function getPost() {
    try {
        const token = localStorage.getItem('token')
        const response = await fetch(`${API}/api/posts`, {
            method: "GET",
            headers: {
                "Authorization": token
            }
        })

        const result = await response.json()

        return result
    } catch (error) {
        alert("Xatolik yuzberdi")
    }
}

// const newArr = []

getPost().then(result => {
    appRender(result.posts)
})

const elPostLeft = document.querySelector(".post-left");


const appRender = function (arr) {
    arr.forEach(i => {
        const html = `
        <div class="post-card">
        <div>
            <h3 class="post-card__title">${i.title.slice(0,40)}</h3>
            <p class="post-card__desc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea veniam unde autem, ullam ipsa
                modi, pariatur molestias magni aliquid exercitationem perferendis blanditiis dolores! Quas
                dolorum nulla tenetur quos libero totam.
            </p>
        </div>

        <div class="post-card__box">

            <button class="post-card__delet-btn btn">DELETE</button>
            <button class="post-card__edit-btn btn" onclick="clickModal()">EDIT</button>
            <button class="post-card__save btn">SAVE</button>
        </div>
    </div>
        `

        elPostLeft.insertAdjacentHTML("beforeend", html)
    })

    console.log(arr)
}

// appRender(newArr)
