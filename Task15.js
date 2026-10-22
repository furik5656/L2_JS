function howManyTimes(time1, time2) {
  var d1 = new Date(time1).getTime();
  var d2 = new Date(time2).getTime();
  var c = 0;
  var cur = new Date(d1);
  
  cur.setSeconds(0);
  cur.setMilliseconds(0);

  while (cur.getTime() < d2) {
    var m = cur.getMinutes();
    var h = cur.getHours();
    var n = 0;
    
    if (m == 0) {
      n = h % 12;
      if (n == 0) n = 12;
    } else if (m == 30) {
      n = 1;
    }
    
    if (n > 0) {
      for (var i = 0; i < n; i++) {
        var strike = cur.getTime() + i * 1000;
        if (strike >= d1 && strike < d2) {
          c = c + 1;
        }
      }
    }
    
    cur.setMinutes(cur.getMinutes() + 1);
  }
  
  return c;
}