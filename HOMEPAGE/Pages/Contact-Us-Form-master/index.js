const contactform = document.querySelector(".contactform");

const apiUrl = "https://web-dev-bakend-movieplex.herokuapp.com/contactus/sendmail";

// .addEventListener("submit", (event) => {
//     preventDefault(event);

// })
contactform.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const username = document.querySelector("#username").value;
const email = document.querySelector("#email").value;
const message = document.querySelector("#message").value;
  
   
      console.log(email);
      console.log(username);
      fetch((apiUrl), {
          method: "POST",
        headers: {
              
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "https://web-dev-bakend-movieplex.herokuapp.com",
              "Access-Control-Request-Method": "POST"
          },
          body: JSON.stringify({ username,email,message }),
      })
        .then((res) => {
          // console.log(res);
              return res.json();
            
          } )
      .then((data) => {
          console.log(data);
          location.href="../../index.html"
          alert(data.message);
          
      })
      .catch((err) => {
        // alert("Error Signing In!!! Re-try....");
        console.log(err);
      });
  });
  


  
const token = localStorage.getItem("jwt");
const loginbutton = document.getElementById("login");


if (token) {
    login.innerHTML = "Logout";

}

loginbutton.addEventListener("click", (event) => {

    localStorage.removeItem("jwt");
    localStorage.removeItem("username");
})

