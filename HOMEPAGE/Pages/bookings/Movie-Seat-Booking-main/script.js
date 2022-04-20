const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const price = document.getElementById("price");
const token = localStorage.getItem("jwt");

console.log(container);

// const apiUrl = "http://localhost:3000/booknow/book?movieName=Black+Panther";
const apiUrl = "https://web-dev-bakend-movieplex.herokuapp.com/booknow";

const movieSelect = document.getElementById("movie");
let ticketPrice = +movieSelect.value;
console.log(ticketPrice);






fetch((`${apiUrl}/blackpanther`), {
  method: "GET",
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
console.log(arr);
  arr.forEach((element) => {
    console.log(element.seat)
    
  seats[element.seat].classList.add("occupied");
})
});








const populateUI = () => {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add("selected");
        console.log(index);
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");
  const selectedMoviePrice = localStorage.getItem("selectedMoviePrice");
  console.log(selectedMoviePrice);
  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
    console.log(selectedMovieIndex);
  }

  if (selectedMoviePrice !== null) {
    // count.innerText = selectedSeats.length;
    // price.innerText = selectedSeats.length * +selectedMoviePrice;
  }
};

populateUI();

selectedMovie = (movieIndex, moviePrice) => {
  localStorage.setItem("selectedMovieIndex", movieIndex);
  localStorage.setItem("selectedMoviePrice", moviePrice);
};

const updateSelectedSeatsCount = () => {
  const selectedSeats = document.querySelectorAll(".row .selected");
  
  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));
  console.log(seatsIndex);

  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));
  
  const selectedSeatsCount = selectedSeats.length;
  
  count.innerText = selectedSeatsCount;
  price.innerText = selectedSeatsCount * ticketPrice;
};

// const lockseat = () => {
//   const userseats = document.querySelectorAll(".row .selected");
  
// }













// Seat select event
container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
    updateSelectedSeatsCount();
  }
});

function myFunction() {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
  console.log(selectedSeats);
  for (let i = 0; i < selectedSeats.length; i++) {
    seats[selectedSeats[i]].classList.add("occupied");
  }

  console.log(selectedSeats.length);
  console.log(seats[selectedSeats[0]]);
  // for (let i = 0; i <)

  // console.log(seats[33]);
  // seats[33].classList.add("occupied");
  // alert("You button was pressed");
};  















const updatehtml = () => {

  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
  console.log(selectedSeats);
  for (let i = 0; i < selectedSeats.length; i++) {
    seats[selectedSeats[i]].classList.add("occupied");
  }

  console.log(selectedSeats.length);
  console.log(seats[selectedSeats[0]] );
  // for (let i = 0; i <)

  // console.log(seats[33]);
  // seats[33].classList.add("occupied");

}


// Movie select event
movieSelect.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;

  selectedMovie(e.target.selectedIndex, e.target.value);

  updateSelectedSeatsCount();
});




const seatbook = document.querySelector(".seatbook")

seatbook.addEventListener("submit", (event) => {
  
  event.preventDefault();
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
  const date = document.querySelector("#bookdate").value;


    fetch((`${apiUrl}/book?movieName=Black+Panther`), {
        method: "POST",
      headers: {
           "Authorization":`${token}`,
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "https://web-dev-bakend-movieplex.herokuapp.com",
            "Access-Control-Request-Method": "POST"
        },
        body: JSON.stringify({ date, selectedSeats}),
    })
      .then((res) => {
        // console.log(res);
            return res.json();
          
        } )
    .then((data) => {
      console.log(data.message);
      // container.target.classList.toggle("occupied");
      updatehtml();
      localStorage.removeItem("selectedSeats");


      // localStorage.removeItem("selectedSeats");
      // function myFunction() {
      //   document.querySelector(".fas.fa-couch.seat.selected").classList.toggle(".fas.fa-couch.seat.occupied");
      //   console.log("run");
      // }
      // myFunction();
      location.href ="./thankyou/index1.html";
      alert(data.message);
    })
    .catch((err) => {
      // alert("Error Signing In!!! Re-try....");
      console.log(err);
    });

})



