const brain = require('brain.js');

const nn = new brain.NeuralNetwork();

//input[avgcash, avg expense], output; 1 - invest, 0- don't invest
nn.train([
  { input: [10000, 2000], output: [1] },
  { input: [12000, 3000], output: [1] },
  { input: [5000, 4500], output: [0] },
  { input: [20000, 6000], output: [1] },
  { input: [1000, 400], output: [0] }
]);

const output = nn.run([15000, 2000]);

console.log('output: ', output);