import {mycart , products , myorders} from "./app.js"

console.log(myorders);
console.log(mycart);

let place = document.querySelector(".placeOrder");
let remove = document.querySelector(".remove");
let increase = document.querySelector(".increase");
let decrease = document.querySelector(".decrease");
let Busket = document.querySelector(".Busket");

//  -----------------------********** on click off buy button **********  ---------------------

console.log(JSON.parse(localStorage.getItem("mydata")));

function createRest(){
    const  roid = document.createElement("div");
    roid.classList.add("removeOrIncreaseOrDecrease");
    roid.innerHTML = `
    <button class="qb remove"><i class='bx bxs-message-square-x'></i></button>
    <button class="qb increase">+</button>
    <button class="qb decrease">-</button>            
    `
    return roid;
}

function renderCartItems(cart){
    const  item = document.createElement("div");
    item.classList.add("item");
    const imgPrice = document.createElement('div');
    imgPrice.classList.add('imgPrice');
    item.appendChild(imgPrice);

    // Create img element
    const img = document.createElement('img');
    img.setAttribute('src', '');
    img.setAttribute('alt', '');
    imgPrice.appendChild(img);

    // Create price element
    const price = document.createElement('span');
    price.textContent = '200';
    imgPrice.appendChild(price);

}

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


function validatecart(cart){
    return true;
}

// -----------------------------------------  Concept of Promises 

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

const popupButton = document.querySelector(".placeOrder");
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

