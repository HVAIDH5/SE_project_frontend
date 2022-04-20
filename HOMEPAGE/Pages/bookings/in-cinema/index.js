const pantherbutton = document.getElementById("panther");
const superManButton = document.querySelector(".superman");

const token = localStorage.getItem("jwt");
const loginbutton = document.getElementById("login");

console.log(pantherbutton);

pantherbutton.addEventListener("click", (event) => {
    
    if (token) {
        location.href = "../Movie-Seat-Booking-main/index.html";
        
    }
    else {
        location.href = "../../login_page/index.html";
        alert("Login Required");
    }

});



// myFunction = () => {
//     alert("chala")
//     if (token) {
//         location.href = "../Movie-Seat-Booking-main/index.html";
        
//     }
//     else {
//         location.href = "../../login_page/index.html";
//     }

// }

superManButton.addEventListener("click", (event) => {
    // location.href = "../Movie-Seat-Booking-main/index.html";

});




if (token) {
    login.innerHTML = "Logout";

}

loginbutton.addEventListener("click", (event) => {

    localStorage.removeItem("jwt");
    localStorage.removeItem("username");
})
