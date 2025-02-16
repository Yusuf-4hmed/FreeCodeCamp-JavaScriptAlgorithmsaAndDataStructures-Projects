

const numberVali = () => {
  const userInput = document.getElementById('user-input');
  const results = document.getElementById('results-div');
  const numberRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;
  if (numberRegex.test(userInput.value) === true){
    results.innerHTML += "Valid US number: " + userInput.value + "<br>";
    confetti()
  } else if (!userInput.value){
    alert("Please provide a phone number");
  } else {
    results.innerHTML += "Invalid US number: " + userInput.value + "<br>";
  }
}

const numberClear = () => {
  const results = document.getElementById('results-div');
  results.innerHTML = ""
}

const userInput = document.getElementById("user-input")

userInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    
    document.getElementById("check-btn").click();
  }
});
