

let getNumber = document.getElementById("numberHere");
let fibURL = "http://localhost:5050/fibonacci/"
let answer = document.getElementById("answer")

function getFib(){
  console.log(`${fibURL}${getNumber.value}`)
fetch(`${fibURL}${getNumber.value}`)
  .then(function (response) {
    
return response.json() })
.then (function (data){
 answer.innerHTML = (data.result)
 
}
)
}


document.getElementById("submitButton").addEventListener("click", getFib)



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

