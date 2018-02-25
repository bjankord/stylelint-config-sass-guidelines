var shell = require('shelljs');
var prependFile = require('prepend-file');

// Copy over .stylelintrc.json as index.js
// This will replace index.js if it exists already
shell.cp('src/.stylelintrc.json', 'index.js');

// Add 'module.exports =' to object in index.js
prependFile('index.js', 'module.exports = ', function (err) {
	if (err) {
		console.log('Error prepending "module.exports = " to index.js');
	}
	console.log('Build successful');
});
