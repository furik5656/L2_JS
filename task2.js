function ipv4Parser(ip, mask) {
  var a = ip.split("."), b = mask.split("."), r1 = [], r2 = [];
  for (var x = 0; x < 4; x++) {
    var n = +a[x], m = +b[x];
    r1.push(n & m);
    r2.push(n & ~m & 0xFF);
  }
  return [r1.join("."), r2.join(".")];
}