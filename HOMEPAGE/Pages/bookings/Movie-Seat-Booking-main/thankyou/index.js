
const token = localStorage.getItem("jwt");
const loginbutton = document.getElementById("login");


if (token) {
    login.innerHTML = "Logout";

}

loginbutton.addEventListener("click", (event) => {

    localStorage.removeItem("jwt");
    localStorage.removeItem("username");
})
