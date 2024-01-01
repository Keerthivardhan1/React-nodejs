

cart = ["1","2","3"]

function createorder(cart){
    const pr  = new Promise(function(resolve , reject){

        // code .... logic of handelling what ever we need to do --i.e job of creatorder function

        if(!validatecart(cart)){
            const err = new Error("cart is not valid")
            reject(err);
        }

        //logic for creatorder

        const orderid = "12341234";

        if(orderid){
            resolve(orderid);
        }


    })

    console.log("promiecs object---",pr);

    return pr;
}

function validatecart(cart){
    return true; 
}
// createorder(cart , function (orderid){
//     console.log("creatorder is called");
//     procedtopayment(orderid);
// })

// createorder(cart , procedtopayment(orderid));

function procedtopayment(orderid){
    const pr = new Promise((resolve , reject)=>{
            resolve("payment done");        
    })
    console.log("payment started ---" , orderid);
    return pr;
}

//*********************************** */
//---------------------------------------------------------------------------  attaching the function to the promiss object 
//---------------------------as soon as the promiss obj get filled it *****automatically calls the callback function 
//--------------callback is called 100% only ******---once 
//---states are 3 pandding , fullfilled ,  rejected and they are immutable

// const promiss = createorder(cart);

// promiss.then((orderid)=>{
//     procedtopayment(orderid);
// })


createorder(cart)
.then((orderid)=>{
    return orderid;
})
.then((orderid)=>{
   return procedtopayment(orderid)
})
.then((paymentinfo)=>{
    console.log(paymentinfo);
})
.catch(function(err){
    // ***********this catch is for all the errors that can come in the above then blocks

    /*
    What if we want to go even though the validating cart as been faild -----?????? 

    What if we want to continue our chain running????????????

    sol :->-->-->  every catch block is only consonrned about .then block above it -<--<---

            No matter what happens then block after catch block then block will be called 

    */
    console.log(err.message);
})



//---------------------------------------------------------------------------


/*


createorder(cart)
.then((orderid)=>{
    return orderid;
})
.catch(function(err){
    console.log(err.message);
})
.then((orderid)=>{
   return procedtopayment(orderid)
})
.then((paymentinfo)=>{
    console.log(paymentinfo);
})


=----   OUTPUT IS 

cart is not valid 
payment done


*/
