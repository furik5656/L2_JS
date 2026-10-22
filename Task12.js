function longest(arr, n) {
  var r = "";
  
  for (var k = 0; k < n; k++) {
    var m = -1;
    var idx = 0;
    
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].length > m) {
        m = arr[i].length;
        idx = i;
      }
    }
    
    r = arr[idx];
    arr[idx] = ""; 
  }
  
  return r;
}