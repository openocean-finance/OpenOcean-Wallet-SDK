var child_process = require('child_process');
function copyIt () {
  child_process.spawn('rm', ['-rf', './lib']);
  child_process.spawn('mkdir', ['./lib']);
  child_process.spawn('cp', ['-r', './src/assets', './lib/assets']);
}
copyIt();