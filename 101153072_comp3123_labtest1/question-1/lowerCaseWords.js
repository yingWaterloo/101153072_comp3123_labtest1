var promise = new Promise(function(resolve, reject){
    class lowerCaseWords{
        constructor(mixed_array){
            this.mixed_array = mixed_array;
            let filterLessThan20 = mixed_array.filter(item => typeof item === 'string').map(char=>char.toLowerCase());
            console.log(filterLessThan20);
        }
    }
    const isSuccessful = true;
    if(isSuccessful){
        let d = new lowerCaseWords(['PIZZA', 10, true, 25, false, 'Wings']);
        resolve("Stuff worked!");
    }
    else{
        reject(Error("it broke"));
    }
    }
);

promise.then(function(result){
    console.log(result);
}, function(err){
    console.log(err);
});