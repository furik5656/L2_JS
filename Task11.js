function domainName(url){
  var u = url;
  
  if (u.indexOf("//") > -1) {
    u = u.split("//")[1];
  }
  
  if (u.indexOf("www.") == 0) {
    u = u.substring(4);
  }
  
  return u.split(".")[0];
}