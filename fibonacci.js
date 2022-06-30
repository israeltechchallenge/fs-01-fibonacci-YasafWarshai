let getNumber = document.getElementById("numberHere");
let fibURL = "http://localhost:5050/fibonacci/";
let answer = document.getElementById("answer");
let mySpinner = document.getElementById("spinner");
let button = document.getElementById("submitButton");
let li = document.getElementsByClassName("li");
let alertBox = document.getElementById("alert");
const resultsListurl = "http://localhost:5050/getFibonacciResults";
const resultsListElement = document.getElementById("results-list");

function getFib() {
  mySpinner.classList.remove("visually-hidden");
  answer.classList.add("visually-hidden");
  if (getNumber.value > 50) {
    alertBox.classList.remove("visually-hidden");
    spinner.classList.add("visually-hidden");
  }
  if (getNumber.value < 50) {
    fetch(`${fibURL}${getNumber.value}`)
      .then(function (response) {
        if (!response.ok) {
          response.text().then((error) => {
            answer.classList.remove(
              "visually-hidden",
              "text-decoration-underline",
              "fw-bold"
            );
            answer.classList.add("text-danger");
            alertBox.classList.add("visually-hidden");
            getNumber.classList.add("border-danger");
            answer.innerText = error;
            mySpinner.classList.toggle("visually-hidden");
          });
        } else return response.json();
      })

      .then((data) => {
        answer.innerHTML = data.result;
      })

      .then((spinner) => {
        mySpinner.classList.toggle("visually-hidden");
        answer.classList.remove("visually-hidden", "text-danger");
        answer.classList.add("text-decoration-underline", "fw-bold");
        getNumber.classList.remove("border-danger");
        alertBox.classList.add("visually-hidden");
      });
  }
}

function getResults() {
  fetch(resultsListurl)
    .then((response) => response.json())
    .then((data) => {
      printResultstoList(data);
    })
    .then(fetch(resultsListurl));
}

function printResultstoList(data) {
  let myData = data.results;
  myData.sort((a, b) => b.createdDate - a.createdDate);
  resultsListElement.innerHTML = "";
  for (i = 0; i < 10; i++) {
    resultsListElement.innerHTML += `<li class="pb-2 pt-2 border-bottom border-secondary">The fibonacci of <b>${myData[i].number}</b> is <b>${myData[i].result}</b>. Calculated at: ${new Date(
      myData[i].createdDate
    )}</li>`;
  }
}

function fibonacci() {
  if (getNumber.value > 50) {
    alertBox.classList.remove("visually-hidden");
    spinner.classList.add("visually-hidden");
  } else {
    let x = 1,
      y = 0,
      c;

    for (i = 0; i < getNumber.value; i++) {
      c = x;
      x = x + y;
      y = c;
    }
    answer.innerHTML = y;
    answer.classList.remove("visually-hidden", "text-danger");
    answer.classList.add("text-decoration-underline", "fw-bold");
    getNumber.classList.remove("border-danger");
    alertBox.classList.add("visually-hidden");
  }
}

button.addEventListener("click", fibonacci);
button.removeEventListener("click", getFib);
button.removeEventListener("click", getResults);

let checkBox = document.querySelector("input[name=checkbox");
checkBox.addEventListener("change", (e) => {
  if (e.target.checked) {
    button.addEventListener("click", getResults);
    button.addEventListener("click", getFib);
    button.removeEventListener("click", fibonacci);
  } else {
    button.addEventListener("click", fibonacci);
    button.removeEventListener("click", getFib);
    button.removeEventListener("click", getResults);
  }
});
