function calcularDiferenca() {
  let dataString = prompt("Digite uma data no formato dd/mm/aaaa:");

  // Verificar se a data está no formato correto
  if (!/^([0-2]\d|3[0-1])\/(0\d|1[0-2])\/\d{4}$/.test(dataString)) {
    alert("Formato de data incorreto. Por favor, digite no formato dd/mm/aaaa.");
    calcularDiferenca(); // Dar nova chance ao usuário
    return;
  }

  // Parse da string para obter o objeto Date
  let partesData = dataString.split('/');
  let dia = parseInt(partesData[0], 10);
  let mes = parseInt(partesData[1], 10) - 1; // Os meses em JavaScript são base 0
  let ano = parseInt(partesData[2], 10);
  let dataDigitada = new Date(ano, mes, dia);

  // Verificar se a data é válida
  if (isNaN(dataDigitada.getTime())) {
    alert("Data inválida. Por favor, insira uma data válida.");
    calcularDiferenca(); // Dar nova chance ao usuário
    return;
  }

  if(dataDigitada < new Date()){
    alert("Digite uma data posterior");
    calcularDiferenca(); // Dar nova chance ao usuário
    return;
  }

  return dataDigitada;
}

// calcularDiferenca();

function calcularDiferencaEntreDatas(data1, data2) {
  // Convertendo as datas para objetos Date
  var dt1 = new Date(data1);
  var dt2 = new Date(data2);

  // Calculando a diferença em milissegundos
  var diff = Math.abs(dt2 - dt1);

  // Convertendo a diferença de milissegundos para dias
  var dias = Math.floor(diff / (1000 * 60 * 60 * 24));

  // Calculando anos
  var anos = Math.floor(dias / 365);
  dias -= anos * 365;

  // Calculando meses
  var meses = Math.floor(dias / 30);
  dias -= meses * 30;

  return { anos: anos, meses: meses, dias: dias };
}

var dataDigitada = calcularDiferenca();

// Exemplo de uso
// hoje = new Date();
// var data1 = hoje.getDate() + "/" + (hoje.getMonth() + 1) + "/" + hoje.getFullYear(); // hoje
// console.log(data1);
// var data2 = dataDigitada;
// console.log(data2);

hoje = new Date();
var data1 = hoje.getFullYear() + "-" + (hoje.getMonth() + 1) + "-" + hoje.getDate();
var data2 = dataDigitada;

var diferenca = calcularDiferencaEntreDatas(data1, data2);

alert(diferenca.anos + " anos " + diferenca.meses + " meses " + diferenca.dias + " dias");