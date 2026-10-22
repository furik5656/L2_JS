function hexStringToRGB(hexString) {
  var s = hexString.replace("#", "");
  var o = {};
  
  o.r = parseInt(s.slice(0, 2), 16);
  o.g = parseInt(s.slice(2, 4), 16);
  o.b = parseInt(s.slice(4, 6), 16);
  
  return o;
}