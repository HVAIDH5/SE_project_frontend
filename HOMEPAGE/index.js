let bg =document.getElementById("bg");
let moon =document.getElementById("moon");
let mountain =document.getElementById("mountains");
let road =document.getElementById("road");
let text = document.getElementById("text");


const hosturl = "https://web-dev-bakend-movieplex.herokuapp.com";

window.addEventListener('scroll',function(){
    var value=window.scrollY;
    
    bg.style.top=value+0.5+'px';
    moon.style.left= -value+0.5+'px';
    mountains.style.top= -value+0.15+'px';
    road.style.top= -value+0.15+'px';
    text.style.top = value + 1 + 'px';
    text.style.transform.scale= value+20+'%';
    // text.style.gap=value+0.5+'px';
})




const token = localStorage.getItem("jwt");
const loginbutton = document.getElementById("login");


if (token) {
    login.innerHTML = "Logout";

}

loginbutton.addEventListener("click", (event) => {

    localStorage.removeItem("jwt");
    localStorage.removeItem("username");
})



// ------------------------------------------------------------------------------------------------------------------------------------------------
// adding code to be redirected to login page


// const loginbutton = document.getElementById("login");
// loginbutton.addEventListener('click', () => {
//     location.href = '../pages/login';
//     console.log("All good");
// })


// ---------------------------------------------------------------------------------------------------------------------------------------

// to be written in login index.js   
// sending loginpage data to backend 
    
// const signupForm = document.querySelector(".signup-form")

// signupForm.addEventListener("click", (event) => {
//     event.preventDefault();
//     console.log("submitted");


//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;
//     const username = document.getElementById("username").value;
//     const repassword = document.getElementById("repassword").value;
    
//     if (email != password) {
//         alert("Passwords dont match ");
//         return;
//     }
//     else {
     
//         fetch(`${hosturl}/auth/signup`, {
//             method: "POST",
//             headers: {
//                 contentType: "application/json",
//             },
//             body:JSON.stringify({username , email, password}),
//         }).then((response) => response.json())
//             .then((data) => {
//             console.log(data);
//             }).catch((error) => {
//             console.log(error);
//         })

//     }


//     })


// const login = document.getElementById("login");

// login.addEventListener("click", (event) => {

//     location.href = "/pages/login_page/index.html";
// });


