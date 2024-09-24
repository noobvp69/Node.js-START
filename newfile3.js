var fs = require('fs');
// fs.readFile('newfile3.js',function (error,data) {
//     if (error) {
//         console.log(error);
//         return
//     }
//     console.log(data.toString());
// });
var data = fs.readFileSync('newfile4.js');
console.log(data);

fs.writeFileSync('newfile4.js','Hi GOvind ');