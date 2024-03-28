
function calculateSum() {
  var value1 = parseFloat(document.getElementById("value1").value);
  var value2 = parseFloat(document.getElementById("value2").value);
  var sum = value1 + value2;
  document.getElementById("Hasil").innerHTML = "Hasil: " + sum;
}

function calculateDifference() {
  var value1 = parseFloat(document.getElementById("value1").value);
  var value2 = parseFloat(document.getElementById("value2").value);
  var difference = value1 - value2;
  document.getElementById("Hasil").innerHTML = "Hasil: " + difference;
}

function calculateProduct() {
  var value1 = parseFloat(document.getElementById("value1").value);
  var value2 = parseFloat(document.getElementById("value2").value);
  var product = value1 * value2;
  document.getElementById("Hasil").innerHTML = "Hasil: " + product;
}

function calculateQuotient() {
  var value1 = parseFloat(document.getElementById("value1").value);
  var value2 = parseFloat(document.getElementById("value2").value);
  if (value2 != 0) {
    var quotient = value1 / value2;
    document.getElementById("Hasil").innerHTML = "Hasil: " + quotient;
  } else {
    document.getElementById("Hasil").innerHTML = "Error: Division by zero";
  }
}