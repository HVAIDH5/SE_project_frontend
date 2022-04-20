//using tmbs's database
const API_KEY = "api_key=f658c3fc0d328cb50b780fa1567e5c16";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
const IMG_URL = "https://image.tmdb.org/t/p/w500";
const searchURL = BASE_URL + "/search/movie?" + API_KEY;

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

// const BookNow = document.getElementById("BOOK_NOW");

// const url = "family=Poppins:wght@100&display=swap";
// const searchParams = new URLSearchParams(url);
// console.log(searchParams);
// for (let [key, value] of searchParams) 
//   console.log(key, value);
// 

getMovies(API_URL);

function getMovies(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.results);
      showMovies(data.results);
    });
}

function showMovies(data) {
  main.innerHTML = "";
  data.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;

    const movieEl = document.createElement("div");
    // document.querySelector("#submitForm").addEventListener("onclick") = (event) => {
    //   event.preventDefault();
    // }
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
        <img src="${IMG_URL + poster_path}" alt="${title}">

        <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getColor(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
          <h3>Overview</h3>
          ${overview}
     
          
          </div>
          `

    main.appendChild(movieEl);
  })
}
function getColor(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm) {
    getMovies(searchURL + "&query=" + searchTerm);
  } else {
    getMovies(API_URL);
  }
})

// BookNow.addEventListener("onclick",(event) => {
//  console.log("hello");
// });

const token = localStorage.getItem("jwt");
const loginbutton = document.getElementById("login");


if (token) {
    login.innerHTML = "Logout";

}

loginbutton.addEventListener("click", (event) => {

    localStorage.removeItem("jwt");
    localStorage.removeItem("username");
})
