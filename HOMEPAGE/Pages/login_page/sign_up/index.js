// const loginbutton = document.getElementById("login");

// loginbutton.addEventListener("click", (event) => {
    
//     location.href = ""
    
// })


// const signupForm = document.querySelector("#signup-form")

const apiUrl = "https://web-dev-bakend-movieplex.herokuapp.com/auth/signup";

// signupForm.addEventListener("submit", (event) => {
//     event.preventDefault();
//     console.log("submitted");


//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;
//     const username = document.getElementById("username").value;
//     const repassword = document.getElementById("repassword").value;
    
//     console.log(email, password, username, repassword);
//     if (repassword != password) {
//         alert("Passwords dont match ");
//         return;
//     }
//     else {
     
//         fetch(`${hosturl}/auth/signup`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Access-Control-Allow-Origin": "http://localhost:3000",
//                 "Access-Control-Request-Method": "POST"
//             },
//             body: JSON.stringify({ username, email, password }),
//         })
//             .then((response) => {
//          return response.json();
//         }  )
//             .then((data) => {
//                 const { token } = data;

//                 console.log(data);
//                 localStorage.setItem("jwt", token);
//                 location.href = "../index.html";
//                 console.log(success);
                


//             }).catch((error) => {
//             console.log(error);
//         })

//     }


//     })

// =================================================================================================================================================
const signupForm = document.querySelector("#signup-form")


signupForm.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const signInemail = document.querySelector("#email");
    const signInPassword = document.querySelector("#password");
    const signInUsername = document.querySelector("#username");
    const signInrepassword = document.querySelector("#repassword");


    const username = signInUsername.value;
    const repassword = signInrepassword.value
    const email = signInemail.value;
    const password = signInPassword.value;
      console.log(email);
    console.log(password);
    console.log(username);
    console.log(repassword);


    if (repassword != password) {
              alert("Passwords dont match ");
              return;
          }
    else {
      fetch((apiUrl), {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "https://web-dev-bakend-movieplex.herokuapp.com",
            "Access-Control-Request-Method": "POST"
        },
        body: JSON.stringify({ username ,email, password }),
    })
      .then((res) => {
        // console.log(res);
            return res.json();
          
        } )
    .then((data) => {
      const { token, username } = data;

      if (token) {
        localStorage.setItem("jwt", token);
        localStorage.setItem("username", username);
          location.href = "../../../index.html";
          console.log(success);
      } else {
        alert("SignUp Again");
      }
    })
    .catch((err) => {
      // alert("Error Signing Up!!! Re-try....");
      console.log(err);
    });
}
      
  });
// =================================================================================================================================================









const login = document.getElementById("login");

login.addEventListener("click", (event) => {

    location.href = "/pages/login_page/index.html";
});