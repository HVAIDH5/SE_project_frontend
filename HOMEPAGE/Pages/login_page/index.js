
const body = document.querySelector("body");
const apiUrl = "https://web-dev-bakend-movieplex.herokuapp.com/auth/signin";

const signInForm = document.querySelector(".signInForm");
const submitbutton = document.querySelector("#submitbutton");

const token = localStorage.getItem("jwt");


signInForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const signInemail = document.querySelector("#email");
  const signInPassword = document.querySelector("#password");

  const email = signInemail.value;
  const password = signInPassword.value;
    console.log(email);
    console.log(password);
    fetch((apiUrl), {
        method: "POST",
      headers: {
            
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "https://web-dev-bakend-movieplex.herokuapp.com",
            "Access-Control-Request-Method": "POST"
        },
        body: JSON.stringify({ email, password }),
    })
      .then((res) => {
        // console.log(res);
            return res.json();
          
        } )
    .then((data) => {
      const { token , username } = data;

      if (token) {
        localStorage.setItem("jwt", token);
        localStorage.setItem("username", username);
          location.href = "../../index.html";
          console.log(success);
      } else {
        alert("SignIn Again");
      }
    })
    .catch((err) => {
      // alert("Error Signing In!!! Re-try....");
      console.log(err);
    });
});


const forgotPassword = document.getElementById("forget");

forgotPassword.addEventListener("click", (event) => {
  // location.href = "forgot wala"
  console.log("Forgot password");
  
});

const signupbutton = document.getElementById("signupbutton");

signupbutton.addEventListener("click", (event) => {
  location.href = "./sign_up/index1.html";

})