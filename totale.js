function totale(n1,n2, operador){
  var output = 0;


  switch (operador) {
    case "+":
      output = Number(n1) + Number(n2);
      break;

    case "-":
      output = n1 - n2;
      break;

    case "*":
      output = n1 * n2;
      break;

    case "/":
      if (n2 == 0) {
        output = 0;
      }else{
        output = n1 / n2;
      }
      break;
  }
  return output
}

module.exports = totale;
