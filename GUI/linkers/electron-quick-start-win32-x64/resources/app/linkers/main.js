var ps = require("python-shell")

function addition() {
var options = {
		mode: 'text',
    	scriptPath : '../../Engine/',
	}

  ps.PythonShell.run('addition.py', options, function (err, results) {
    if (err) throw err;
    console.log(results[0]);
  });

} // end of the function definition addition

function multiplication() {
var options = {
		mode: 'text',
    	scriptPath : '../../Engine/',
	}

  ps.PythonShell.run('multiplication.py', options, function (err, results) {
    if (err) throw err;
    console.log(results[0]);
  });

} // end of the function definition addition


function gen_fake_data() {
var options = {
		mode: 'text',
    	scriptPath : '../../Engine/',
	}

  ps.PythonShell.run('gen_fake_data.py', options, function (err, results) {
    if (err) throw err;
    console.log(results);
  });

} // end of the function definition addition