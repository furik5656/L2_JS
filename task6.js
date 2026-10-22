function toWeirdCase(string) {
  var r = "", c = 0;
  for (var i = 0; i < string.length; i++) {
    var l = string[i];
    if (l == " ") {
      r += " ";
      c = 0;
    } else {
      if (c % 2 == 0) {
        r += l.toUpperCase();
      } else {
        r += l.toLowerCase();
      }
      c++;
    }
  }
  return r;
}