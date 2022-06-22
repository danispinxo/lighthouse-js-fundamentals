function lastIndexOf(list, num) {
  let isPresent = false;
  let index;
  for (let i = list.length - 1; i >= 0; i--) {
    if (list[i] === num) {
      index = i;
      isPresent = true;
      break;
    }
  }
  if (index >= 0) {
    return index;
  } else {
    return -1;
  }
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);