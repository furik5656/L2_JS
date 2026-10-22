function isCircleSorted(arr) {
  var d = 0;
  for (var i = 0; i < arr.length; i++) {
    var n = i + 1;
    if (n == arr.length) {
      n = 0;
    }
    
    if (arr[i] > arr[n]) {
      d++;
      if (d > 1) return false;
    }
  }
  return true;
}