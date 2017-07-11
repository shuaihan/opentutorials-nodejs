const fs = require('fs');

// sync
console.log(1);
var data = fs.readFileSync('pretty.min.js', {encoding:'utf8'});
console.log(data);

console.log(2);
// async
fs.readFile('README.md', {encodig:'utf8'}, (err, data) => {
    console.log(3);
    console.log('data : ' + data);
});
console.log(4);