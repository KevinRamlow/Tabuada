function clicar() {
  multiplicationTable.innerHTML = "";
  var txtNumber = document.getElementById("number");
  number = Number(txtNumber.value);

  if (txtNumber.value == "") {
    return window.alert("[ERRO] Faltam dados para prosseguir!");
  }

  var multiplier = 1;
  for (var multiplier; multiplier <= 10; multiplier++) {
    var result = number * multiplier;
    multiplicationTable.innerHTML += `${number} x ${multiplier} = ${result} <br/>`;
  }
}
