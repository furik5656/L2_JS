Array.prototype.square = function() {
  var res = [];
  for (var i = 0; i < this.length; i++) {
    res.push(this[i] * this[i]);
  }
  return res;
};

Array.prototype.cube = function() {
  var res = [];
  for (var i = 0; i < this.length; i++) {
    res.push(this[i] * this[i] * this[i]);
  }
  return res;
};

Array.prototype.average = function() {
  if (this.length == 0) return NaN;
  var sum = 0;
  for (var i = 0; i < this.length; i++) {
    sum += this[i];
  }
  return sum / this.length;
};

Array.prototype.sum = function() {
  var sum = 0;
  for (var i = 0; i < this.length; i++) {
    sum += this[i];
  }
  return sum;
};

Array.prototype.even = function() {
  var res = [];
  for (var i = 0; i < this.length; i++) {
    if (this[i] % 2 == 0) {
      res.push(this[i]);
    }
  }
  return res;
};

Array.prototype.odd = function() {
  var res = [];
  for (var i = 0; i < this.length; i++) {
    if (this[i] % 2 != 0) {
      res.push(this[i]);
    }
  }
  return res;
};