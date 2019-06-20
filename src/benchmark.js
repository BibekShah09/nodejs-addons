const Benchmark = require('benchmark');
const bubbleSortJs = require('./sort');
const {bubbleSort} = require('../build/Release/sort');

const suite = new Benchmark.Suite;

// add tests
suite
  .add('JS Sorting', function () {
    bubbleSortJs();
  })
  .add('C++ Sorting', function () {
    bubbleSort();
  })
  // add listeners
  .on('cycle', function (event) {
    console.log(String(event.target));
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  // run async
  .run({'async': true});

