module.exports = function () {
  let i, j, temp, length = 100000;
  let array = [];
  for (i = length; i > 0; i--) {
    array.push(i);
  }

  for (i = 0; i < length; i++) {
    for (j = 0; j <= length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
};
