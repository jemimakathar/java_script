//promise is used to convert js into asynchronous
//3 state --- 1.fullfilled 2.rejected 3.pending

const myPromise = new Promise((resolve,reject)=>
{
    const error =false;
    if(!error)
    {
        resolve("Yes! resolve the problem ")
    }
    else{
        reject("No! rejected the promise ")
    }
})
console.log(myPromise);

myPromise.then(value => //.then -> thennables
{
    return value + "welcome" //this value is return to newValue
})
.then(newValue =>console.log(newValue))


