function solution(str){
  if (str == "") return [];
  var s = str;
  var r = [];
  if (s.length % 2 != 0) s += "_";
  
  for (var i = 0; i < s.length; i = i + 2) {
    r.push(s.substr(i, 2));
  }
  
  return r;
}