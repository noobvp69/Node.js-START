var fs = require('fs');
// fs.readFile('newfile3.js',function (error,data) {
//     if (error) {
//         console.log(error);
//         return
//     }
//     console.log(data.toString());
// });
fs.writeFile('output.txt','Hsello World123!', function(error){
    if (error){
        console.log(error);
        return;
    }
    console.log("File written successfully!");
});
console.log('File reading initiated...')