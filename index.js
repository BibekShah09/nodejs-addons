const bubbleSortJs = require('./sort');
const {bubbleSort} = require('./build/Release/sort');

console.time('addon');
bubbleSort();
console.timeEnd('addon');
console.time('js');
bubbleSortJs();
console.timeEnd('js');
