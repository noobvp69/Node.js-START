let promise = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        let success =true; // Let's assume the operation is successful
        if (success) {
            resolve('Operation Successful!');
        } else {
            reject('Operation Failed!');
        }
    }, 2000);
});
promise
.then((result) => {
    console.log(result);
})
.catch((error) =>{
    console.log(error);
});