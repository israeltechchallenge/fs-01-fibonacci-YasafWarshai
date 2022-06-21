const declaration = document.getElementById("declaration");

const n = document.querySelector("input").value

const submit = document.getElementById("submit")

function getFibonacciIndex(n) {
    let x = 0, y = 1, c = n;

    if (n<=1){
    return 1;
    }
    for(let i = 2; i <= n; i++) {
      c = x + y;
      x = y;
      y = c;
    }

return c;

};

submit.addEventListener("click", getFibonacciIndex())

declaration.innerText = getFibonacciIndex.value;




   




