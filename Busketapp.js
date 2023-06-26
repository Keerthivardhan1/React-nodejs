// import { myorders } from "./app"
import {mycart , products , myorders} from "./app.js"

console.log(myorders);

let place = document.querySelector(".placeOrder");
let remove = document.querySelector(".remove");
let increase = document.querySelector(".increase");
let decrease = document.querySelector(".decrease");

//  -----------------------********** on click off buy button **********  ---------------------




function createOrder(cart){
    const pr = new Promise( function (resolve , reject){
        if(!validatecart(cart)){
            reject(new Error("validation of cart is faild"))
        }
        console.log("cart validation compleated ...");
        console.log("order created .. ");
        console.log("proceeding to payment ....");
        resolve("123455")
    })
    return pr;
}


function proceedToPayment(orderid){
    const pr = new Promise( (resolve , reject) =>{
        
        //   check the payment method 
        // card datiles 
        // payment 

        // if(money got cridited to our account ) return true(resolve) else false(reject)

        if(moneyCredited()){
            console.log(" payment compleated ..");
            resolve(true)
        }
        reject(new Error("payment faield"))
    })
}

function moneyCredited(){
    console.log(" money credited to out account ");
    return true;
}

/*

place.addEventListener("click" , createOrder(mycart))
.then( (orderid)=>{
   return proceedToPayment(orderid)
}
)
.catch((err)=>{
    console.log(err.message);
})
.then((successfull)=>{
    if(successfull){
        console.log("payment completed ");
    }
})

*/

function validatecart(cart){
    return true;
}

place.addEventListener("click", () => {
    createOrder(mycart)
        .then((orderid) => {
            return proceedToPayment(orderid);
        })
        .then((successfull) => {
            if (successfull) {
                console.log("payment completed ");
            }
        })
        .catch((err) => {
            console.log(err.message);
        });
});

remove.addEventListener("click" , (e)=>{
    let itemid  = e.target.getAttribute("name");
    for(let i =0 ;i<mycart.length ; i++){
        if(mycart[i].id == itemid){
            mycart.pop(itemid);
            break;
        }
    }
})

increase.addEventListener("click" ,  (e)=>{

})

decrease.addEventListener("click" , (e)=>{

})

const popupButton = document.querySelector("#popup-button");
const popupContainer = document.getElementById("popup-container");
const popupClose = document.getElementById("popup-close");

popupButton.addEventListener("click", () => {
  popupContainer.style.display = "block";
});

popupClose.addEventListener("click", () => {
  popupContainer.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target == popupContainer) {
    popupContainer.style.display = "none";
  }
});

window.addEventListener("keyup", (event) => {
  if (event.key === "Escape") {
    popupContainer.style.display = "none";
  }
});