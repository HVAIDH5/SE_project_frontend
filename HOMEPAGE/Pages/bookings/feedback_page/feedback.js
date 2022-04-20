
let star = document.querySelectorAll('input');
let showValue = document.querySelector('#rating-value');
const apiUrl = "https://web-dev-bakend-movieplex.herokuapp.com/feedback/add?movieName=avengers+2";
const token = localStorage.getItem("jwt");

for (let i = 0; i < star.length; i++) {
	star[i].addEventListener('click', function() {
		i = this.value;

		showValue.innerHTML = i + " out of 5";
		// let stars = i;
	});
}


const feedbackForm = document.querySelector(".rating_css");

feedbackForm.addEventListener("submit", (event) => {
	event.preventDefault();
  


	
	// const staring = document.querySelector("#rating-value").value;


	if (star[0].checked == true) {
		staring = 5;
	}
	else if (star[1].checked == true) {
		staring = 4;
	}
	else if (star[2].checked == true) {
		staring = 3;
	}
	else if (star[3].checked == true) {
		staring = 2;
	}
	else {
		staring = 1;
	}

	

	// const stars = staring.value;
	console.log(staring);





	const feedbackinput = document.querySelector("#input");
	const feedback = feedbackinput.value;
			i = this.value;
			// showValue.innerHTML = i + " out of 5";
	console.log(token);
	
	
	
	
	
	
	
	fetch((apiUrl), {
		method: "POST",
		headers: {
			  "Authorization":`${token}`,
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "https://web-dev-bakend-movieplex.herokuapp.com",
			"Access-Control-Request-Method": "POST"
		},
		body: JSON.stringify({ feedback, staring }),
	})
	  .then((res) => {
		// console.log(res);
			return res.json();
		  
		} )
	.then((data) => {
		console.log(data);
		location.href = "../../../index.html";
		alert(data.message);
	})
	.catch((err) => {
	  // alert("Error Signing In!!! Re-try....");
	  console.log(err);
	});


	//   console.log(feedback);
	  
	
  });
  