function hasTwoCubeSums(n) {
  var _ = Math.cbrt(n) | 0, x = 1, y, z, arr = [];
  do {
    y = x + 1;
    do {
      z = x ** 3 + y ** 3;
      if (z === n) {
        if (arr.length && arr[0][0] != x && arr[0][1] != x && arr[0][0] != y && arr[0][1] != y) return true;
        arr.push([x, y]);
      }
      y++;
    } while (y <= _);
    x++;
  } while (x <= _);
  return false;
}