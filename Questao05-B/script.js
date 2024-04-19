function mudarBackground() {
  let dataAtual = new Date();
  let hora = dataAtual.getHours();
  let corFundo, corTexto;

  if (hora >= 6 && hora < 12) {
    corFundo = "white";
    corTexto = "black";
  } else if (hora >= 12 && hora < 18) {
    corFundo = "yellow";
    corTexto = "black";
  } else if (hora >= 18 && hora < 24) {
    corFundo = "darkgray";
    corTexto = "white";
  } else {
    corFundo = "blue";
    corTexto = "white";
  }

  document.body.style.backgroundColor = corFundo;
  document.body.style.color = corTexto;
}

mudarBackground();
