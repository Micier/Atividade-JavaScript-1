function inverterTexto() {
  const inputTextarea = document.getElementById('inputTextarea');
  const outputTextarea = document.getElementById('outputTextarea');

  // Obter o texto do primeiro textarea
  const textoOriginal = inputTextarea.value.trim();

  // Dividir o texto em palavras, inverter a ordem e juntá-las novamente
  const textoInvertido = textoOriginal.split('').reverse().join('');

  // Definir o texto invertido no segundo textarea
  outputTextarea.value = textoInvertido;
}

document.getElementById('invertButton').addEventListener('click', inverterTexto);