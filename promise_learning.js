//THIS IS HOW COMMON CALLBACK WORKS
let bikeSpecification = [{
  name:" Yamaha Fz V3",
  distance_traveled:"6000",
  travel_unit :"km"  
}];
function showDriveDetail(){
    bikeSpecification.forEach(function (value) {
        console.log(value);
      });
}


function addBikeSpecification(bikeDetail,callback){
    bikeSpecification.push(bikeDetail);
    callback();
}

addBikeSpecification({ 
        name:" Yamaha FzX",
        distance_traveled:"0",
        travel_unit :"km"  
},showDriveDetail);

// IF FUNCTION EXECUTION TAKES UNPREDICTABLE AMOUNT OF TIME AND IF WE NEED TO DO IT ASYNCRONOUSLY 
// THEN THE WAY SHOULD BE DIFFERENT. THEN WE NEED TO USE CALLBACK 

function addAsyncBikeSpecification(bikeDetail){
    

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(" Inside addAsyncBikeSpecification()")
            bikeSpecification.push(bikeDetail);
            const error = false;
            if(!error){
                resolve("success");
            }else{
                reject("Error: in setting up bike specification")
            }
        },5000);
    });
}

// addAsyncBikeSpecification({
//         name:" Bajaj Pulsar",
//         distance_traveled:"0",
//         travel_unit :"km"  
// }).then(value => { 
//     console.log(value);
//     console.log(bikeSpecification);
// });


//TO HANDLE ASYNCHRONOUS METHOD WITH async await key word from another method

 async function init(){

    console.log(" before addAsyncBikeSpecification() ");

     await addAsyncBikeSpecification({
        name:" Bajaj Pulsar",
        distance_traveled:"0",
        travel_unit :"km"  
    }); 

    console.log(" after addAsyncBikeSpecification() ");
}

init();

// NOW INCASE OF HANDLING MULTIPLE ASYNC REQUEST AT THE SAME TIME

const promise1 = Promise.resolve("Promise 1");
const promise2 = Promise.resolve("Promise 2");
const promise3 = new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,"Good Bye");
});

Promise.all([promise1,promise2,promise3]).then(values =>{
    console.log(values);
});
