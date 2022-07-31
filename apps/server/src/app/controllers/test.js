const spawn = require('child_process').spawn;
const pythonProcess = spawn('python', [
  '/Users/harry/pykadex/apps/server/src/app/controllers/mockPy.py',
]);

pythonProcess.stdout.on('data', (data) => {
  console.log(JSON.parse(parseInt(data)));
});

// const runPy = new Promise(function (sucess, failure) {
//   const spawn = require('child_process').spawn;
//   const pythonProcess = spawn('python', [
//     '/Users/harry/pykadex/apps/server/src/app/controllers/mockPy.py',
//   ]);

//   console.log('check 1');

//   pythonProcess.stderr.on('data', function (data) {
//     console.log('check 2');

//     console.log(JSON.parse(data));
//   });

//   pythonProcess.stderr.on('data', (data) => {
//     console.log('check 2');
//     console.log(data);
//   });
// });
