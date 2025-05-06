// let promise1= new Promise((resolve,reject) =>{

//     resolve("ok done ")
// });
// promise1.then((message)=>{
//     console.log("well done");
// }).catch((error)=>{
//     console.log("invalid");
// })

// multiple promise handling

let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Rupayan Bera");
    resolve(); // Now resolving the promise
  }, 1000);
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Kuntal Bera");
    resolve(); // Resolving the promise
  }, 2000);
});

let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Prabir Bera");
    reject("this is an error 3"); // Resolving the promise
  }, 4000);
});

// Fixing the typo in "message"
Promise.all([promise1, promise2, promise3]).then((message) => {
    console.log("All executed");
    
}).catch((error)=>{
    console.error("error number :"+ error);
}).finally((message)=>{
    console.log("we run all time ");
})
