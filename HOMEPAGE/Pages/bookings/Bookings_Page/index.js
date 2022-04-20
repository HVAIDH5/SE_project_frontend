const token = localStorage.getItem("jwt");
if (token) {
    




// const moviename = document.querySelector(".moviename");
// const date = document.querySelector(".date");
// const seat = document.querySelector(".seat");
// const container = document.querySelector(".card");
const container = document.querySelector(".container");
const url = 'https://web-dev-bakend-movieplex.herokuapp.com/booknow/showbook';

const fetchUrl = "https://web-dev-bakend-movieplex.herokuapp.com/booknow/showbook";

fetch(url, {
    method: "POST",
    headers: {
        authorization:token,
    }
})
.then((data) =>{
    return data.text();
})
.then((result) => {
//console.log(result);
const arr = JSON.parse(result);
console.log(arr);

arr.forEach((element) => {
    const card = document.createElement("div");
    card.classList.add("bookings_data");
    // card.innerHTML=`<div class="state">State</div><div class="state-name">${element.moviename}</div><div class="confirmed">confirmed cases</div><div class="confirmed-content">${element.date}</div><div class="active">active</div><div class="active-content">${element.seats}</div><div class="death">deaths</div><div class="death-count"></div><div class="recovered">Recovered</div><div class="recovered-content"></div>`; 
    card.innerHTML=`<div class="M_name">${element.moviename}</div><div class="M_seats">${element.seats}</div><div class="M_date">${element.date}</div><div class="M_rate">Rate!!</div>`; 
    
    // document.container.appendChild(result);
    container.appendChild(card);
})
});


const bookform = document.querySelector(".M_rate")

bookform.addEventListener("click", (event) => {
    event.preventDefault();
    
    location.href = "../Rating_Page/rating.html";

})


const loginbutton = document.getElementById("login");


if (token) {
    login.innerHTML = "Logout";

}

loginbutton.addEventListener("click", (event) => {

    localStorage.removeItem("jwt");
    localStorage.removeItem("username");
})








}
else {
    window.stop();
    location.href ="../../login_page/index.html"
}











