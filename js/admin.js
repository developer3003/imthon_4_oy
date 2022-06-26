const elLogoutBtn = document.querySelector(".header__logout");
const elEdinBtn = document.querySelector(".post-card__edit-btn");
const elModal = document.querySelector(".modal");

const clickModal = () => {
    elModal.classList.add("modal--open")
}

const clickModalCancel = () => {
    elModal.classList.remove("modal--open")
}

const handleLogout = () => {
    window.localStorage.removeItem("token");
    document.location.reload(true)
};
