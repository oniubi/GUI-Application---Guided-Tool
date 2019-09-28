var ps = require("python-shell")

function addition() {
var options = {
		mode: 'text',
    	scriptPath : '../Engine/',
    	pythonPath : 'C:/Users/DELL/AppData/Local/Programs/Python/Python37-32'
	}

  ps.PythonShell.run('addition.py', options, function (err, results) {
    if (err) throw err;
    swal(results[0]);
  });

} // end of the function definition addition