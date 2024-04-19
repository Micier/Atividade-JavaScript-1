function fatorial(n) {
  let fat = 1;
  for (let i = n; i > 1; i--) {
    fat *= i;
  }

  return fat
}

function combinacao(n, k){
  let resultado = fatorial(n) / (fatorial(k) * fatorial(n - k))
  document.querySelector("#resultado").innerHTML = "Resultado: " + resultado;
}

formulario.addEventListener("submit", (event) => {
  event.preventDefault()
  n = Number(document.querySelector("#numero").value)
  k = Number(document.querySelector("#amostra").value)
  combinacao(n, k)
});