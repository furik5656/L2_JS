function primeFactors(n) {
  var str = "";
  var i = 2;
  
  while (n > 1) {
    var c = 0;
    while (n % i == 0) {
      n = n / i;
      c++;
    }
    if (c != 0) {
      str += "(" + i;
      if (c != 1) str += "**" + c;
      str += ")";
    }
    i++;
  }
  
  return str;
}