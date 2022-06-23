let getNumber = document.getElementById("numberHere");
let fibURL = "http://localhost:5050/fibonacci/";
let answer = document.getElementById("answer");
let mySpinner = document.getElementById("spinner")

function getFib() {
  mySpinner.classList.remove("visually-hidden");
  answer.classList.add("visually-hidden");

  console.log(`${fibURL}${getNumber.value}`);

  fetch(`${fibURL}${getNumber.value}`)
    .then(function (response) {
      if (!response.ok) {
        response.text().then((error) => {
          answer.classList.remove("visually-hidden");
          answer.classList.add("text-danger");
          getNumber.classList.add("border-danger");
          answer.innerText = error;
          mySpinner.classList.toggle("visually-hidden");
          console.log(error);
        });
      }
      return response.json();
    })

    .then((data) => {
      answer.innerHTML = data.result;
    })

    .then((spinner) => {
     mySpinner.classList.toggle("visually-hidden");
      answer.classList.remove("visually-hidden");
      answer.classList.remove("text-danger");
      getNumber.classList.remove("border-danger");
    });
}

document.getElementById("submitButton").addEventListener("click", getFib);

/* function fibonacci(e){
  e.preventDefault();
  let num = document.getElementById("numberHere").value;
  let x = 0, y = 1, c;

  for (let i = 1; i < num; i++) {
  c = x + y;
  x = y;
  y = c;

}

return y;
}

document.getElementById("submitButton").addEventListener("click", fibonacci)
 */
