var child = require('child_process');
var ps = child.spawn('clear');
ps.stdout.pipe(process.stdout);
ps.stdin.end();