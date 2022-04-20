
const body = document.querySelector("body");
const apiUrl = "https://web-dev-bakend-movieplex.herokuapp.com/forgotpass/sendmail";

const signInForm = document.querySelector(".forgotform");
const submitbutton = document.querySelector("#submitbutton");




signInForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const foremail = document.querySelector("#email");
  const forusername = document.querySelector("#username");

  const email = foremail.value;
  const username = forusername.value;
    console.log(email);
    console.log(username);
    fetch((apiUrl), {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "https://web-dev-bakend-movieplex.herokuapp.com",
            "Access-Control-Request-Method": "POST"
        },
        body: JSON.stringify({ email, username }),
    })
      .then((res) => {
        // console.log(res);
            return res.json();
          
        } )
    .then((data) => {
      console.log(data.message);
      location.href = "../../index.html";
      alert(data.message);
      
    })
    .catch((err) => {
      // alert("Error Signing In!!! Re-try....");
      console.log(err);
    });
});



const signupbutton = document.getElementById("signupbutton");

signupbutton.addEventListener("click", (event) => {
  location.href = "./sign_up/index1.html";

})