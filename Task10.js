function bingo(ticket, win){
  var c = 0;
  for (var i = 0; i < ticket.length; i++) {
    var s = ticket[i][0];
    var n = ticket[i][1];
    for (var j = 0; j < s.length; j++) {
      if (s[j].charCodeAt(0) == n) {
        c++;
        break; 
      }
    }
  }
  
  if (c >= win) {
    return "Winner!";
  } else {
    return "Loser!";
  }
}