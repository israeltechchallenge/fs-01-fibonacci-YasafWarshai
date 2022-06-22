
function fibonacci(e){
  e.preventDefault();
  let num = document.getElementById("numberHere").value;
  let x = 0, y = 1, c;

  for (let i = 1; i < num; i++) {
  c = x + y;
  x = y;
  y = c;

}
document.getElementById("answer").innerHTML = y;

return y;
}

document.getElementById("submitButton").addEventListener("click", fibonacci)