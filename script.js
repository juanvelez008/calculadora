function valor (x) {
  document.getElementById('display').value += x;
}

function borrarDisplay (y) {
  document.getElementById('display').value = y;
}

function calResultado () {
  var result = eval(document.getElementById('display').value);
  document.getElementById('display').value =  result;
}