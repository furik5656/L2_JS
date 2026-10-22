function wave(str) {
  var res = [];
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) == " ") continue;
    var arr = str.split("");
    arr[i] = arr[i].toUpperCase();
    res.push(arr.join(""));
  }
  return res;
}