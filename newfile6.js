function greet(name,callback){
    console.log('Hello'+ name);
    setTimeout(() =>{
        callback();
    },2000);
}
greet('Ayush',() =>{
    console.log('This had happened after 2 seconds');
});