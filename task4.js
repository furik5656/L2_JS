function findMissing(list) {
  var a = list[1] - list[0];
  var b = list[2] - list[1];
  var d = a < b ? a : b;
  
  for (var i = 0; i < list.length - 1; i++) {
    if (list[i+1] - list[i] != d) return list[i] + d;
  }
}