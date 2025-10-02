function resolvedPromise() { 
    setTimeout(()=>{
        let success={'message':'delayed success!'};
        console.log(success);
    }, 500);
    
}

function rejectedPromise() {
    setTimeout(() => {
        let error = {'error': 'delayed exception!'};
        console.error(error);    
    }, 500);
}



function makePromise(completed){
    return new Promise(function(resolve, reject){
        if(completed){
            resolve(resolvedPromise());
        }
        else{
            reject(rejectedPromise());
        }
    });
}

let promisefun = makePromise(true);

promisefun.then(
    success => console.log(success),
)

let promisefun1= makePromise(false);

promisefun1.then().catch(
    error => console.log(error),
)