function expandedForm(num) {
  var s = num + "", res = [];
  
  for (var i = 0; i < s.length; i++) {
    var n = s[i];
    if (n != "0") {
      var z = "";
      for (var j = 1; j < s.length - i; j++) {
        z += "0";
      }
      res.push(n + z);
    }
  }
  
  return res.join(" + ");
}