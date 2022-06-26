// if (!localStorage.getItem("token")) {
//     window.location.href = "/signin.html"
// }

function start(){
    if (!localStorage.getItem("token")) {
        window.location.href = "/signin.html"
    }
}
start().reload();