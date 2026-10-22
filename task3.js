function whatCentury(year) {
  var n = Math.ceil(year / 100), s = "th", m = n % 10, h = n % 100;
  if (h < 11 || h > 13) {
    if (m == 1) s = "st";
    if (m == 2) s = "nd";
    if (m == 3) s = "rd";
  }
  return n + s;
}