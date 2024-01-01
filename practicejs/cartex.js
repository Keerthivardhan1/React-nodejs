

const cart = ["shirt" , "pen"];

const myorders = [];

//---------------------------------   worng  buy.addEventListener("" , procress(cart));
//=================================    right buy.addEventListener("" , ()=>{procress(cart)});

let buy = document.querySelector(".buy");

buy.addEventListener("click" , ()=>{ procress(cart)})

function procress(cart){
        
    creatOrder(cart)
    .then( (orderid)=>{
    return proceedToPayment(orderid)
    })
    .then((successfull)=>{
        if(successfull){
            console.log("payment completed ");
        }
    })
    .catch((err)=>{
        console.log(err.message);
    })


}


function creatOrder(cart){
    console.log(cart);
    console.log("creating order");
    const pr = new Promise( function (resolve , reject){
        if(!validatecart(cart)){
            reject(new Error("validation of cart is faild"))
        }
        resolve("123455")
    })
    return pr;
}


function proceedToPayment(orderid){
    console.log("proceding to payment");
    const pr = new Promise( (resolve , reject) =>{
        /*
        check the payment method 
        card datiles 
        payment 

        if(money got cridited to our account ) return true(resolve) else false(reject)
        */

        if(moneyCredited()){
            console.log("-----payment completed");
            addToMyOrders(cart); 
            console.log("------myorders-----" , myorders);
            resolve(true)
        }
        reject(new Error("payment faield"))
    })
}

function moneyCredited(){
    console.log("money checking ");
    return true;
}

function validatecart(cart){
    console.log("validating cart");
    return true;
}

function addToMyOrders(cart){
    i=0;
    for (key in cart){
        myorders[i] = cart[key];
        i++;
    }
}


