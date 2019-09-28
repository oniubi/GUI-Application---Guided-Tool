var ps = require("python-shell")

function addition() {
var options = {
		mode: 'text',
    	scriptPath : '../Engine/',
	}

  ps.PythonShell.run('addition.py', options, function (err, results) {
    if (err) throw err;
    console.log(results[0]);
  });

} // end of the function definition addition