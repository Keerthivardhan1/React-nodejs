
/*
 adding multipple class to an elements ---> ii.classList.add("'bx','bx-cart-add','addCart'");
 himanshu
 shashi
*/


let products = [
    {
        img : "./img/product1.jpg",
        h3 : "Name1",
        price : 200,
        id :1
    },
    {
        img : "./img/product2.jpg",
        h3 : "Name2",
        price : 300,
        id :2
    },
    {
        img : "./img/product3.jpg",
        h3 : "Name4",
        price : 230,
        id:3
    },
    {
        img : "./img/product4.jpg",
        h3 : "Name1",
        price : 400,
        id:4
    },
    {
        img : "./img/product5.jpg",
        h3 : "Name7",
        price : 210,
        id:5
    },
    {
        img : "./img/product6.jpg",
        h3 : "Name9",
        price : 290,
        id:6
    },
    {
        img : "./img/product7.jpg",
        h3 : "Name7",
        price : 210,
        id:7
    },
    {
        img : "./img/product8.jpg",
        h3 : "Name7",
        price : 210,
        id:8
    }
]

const collection = document.querySelector(".Collection")
const num = document.querySelector(".num");
// const place = document.querySelector(".place");   //--------- buy now button 
const myorders = []
const ourcart = document.querySelector(".ourcart")

const mycart = [];
 
function renderproducts(){

    let i = 0;

    for (i in products){
      const  obj = products[i]
        // console.log(products[obj]);
        const cproduct = document.createElement("div");
        cproduct.classList.add("cproduct");
        const cimg = document.createElement("img");
        cimg.classList.add("cimg");
        cimg.src= obj.img;
        const  productbuy= document.createElement("div");
        productbuy.classList.add("product-buy");
        const  np= document.createElement("div");
        np.classList.add("np");
        const h3 = document.createElement("h3");
        // console.log( "h3----",obj.h3);
        h3.textContent=obj.h3;
        // h3.value = obj.h3;
        const span = document.createElement("span");
        span.setAttribute("id", "price")
        // console.log("price ---" , obj.price);
        // span.value=obj.price;
        span.textContent=obj.price+"/-";
        np.appendChild(h3);
        np.appendChild(span);
        const button = document.createElement("button");
        button.classList.add("cartbtn");
        button.name = ""+obj.id;                           //<-------  setting attribute (unique number) to button cartbtn to identify which product cart btn is clicked 
        // console.log(  "------------",button.name);
        // const ii = document.createElement("i");
        // ii.classList.add("'bx','bx-cart-add','addCart'");
        // button.appendChild(ii);
        button.style.backgroundImage = "url('./img/addtocart.svg')";
        productbuy.appendChild(np);
        productbuy.appendChild(button);
        cproduct.appendChild(cimg);
        cproduct.appendChild(productbuy);
        if(collection != null ){
        collection.appendChild(cproduct);
        }

        // ------------
        // num.textContent = "0";
        // =-----------
    }
}
// const addCart = document.querySelector(".addCart");

// addCart.addEventListener("click" , increaseCart(num));


window.addEventListener("onlode" , renderproducts());

// **********8888'





// ------------- increasing number products in the cart---------

function increaseCart(leble){
    // console.log("clicked on add to cart ");
    let num = Number(leble.textContent);
    num +=1;
    leble.textContent = num;
}

            // -------------**************---------

// -------------- Adding products to the cart ------------

const btn = document.querySelectorAll(".cartbtn");     // it will return collection of all the buttons with class cartbtn
// console.log(btn);

for(let i=0;i<btn.length;i++){     
    btn[i].addEventListener("click" , ()=>{
        // console.log("clickde");
        // console.log(btn[i].name);
        addToMyCart(btn[i].name);
        increaseCart(num)

    })
}

function addToMyCart(uid){
    // console.log("came");
    for (let i=0;i<products.length;i++){
        // console.log("obj is " + products[i]);
        // console.log("came2");
        // console.log("----" + products[i].id + "-------" + uid);     // this uid is in string we need to convert to number 
        if(products[i].id == Number(uid)){
            // console.log("came3");              // hear index of products array and uid are the same index == uid == id of product
            addProduct(products[i]);
        }
    }
}

function addProduct(obj){
    // console.log("------ added ",mycart );
    mycart.push(obj);
    feedbusket(obj);        // feeding the busket 
    console.log(mycart);
}

// -----------------------****---------------------


// -----------------------------------*****************************--------------------------------------------------
// const cart = document.querySelectorAll(".cart")    xxxxxx
const cart = document.getElementById("cart")
if(ourcart != null ){
ourcart.addEventListener("click",()=>{
    console.log("out--cart");
    const visibility = cart.getAttribute("data-visible")
    console.log("visivi00" , visibility);

    if(visibility === "false"){
        cart.setAttribute("data-visible" , "true")
    }
    if(visibility === "true"){
        cart.setAttribute("data-visible" , "false")
    }

})
}

//-----------------------------------*****************************--------------------------------------------------
//               Feeding to the Busket      ->--->


function feedbusket(obj){


}
//[[]][][[][][][][][][]]


export { mycart , products  , myorders };

// let place = document.querySelector(".place");
// let remove = document.querySelector(".remove");
// let increase = document.querySelector(".increase");
// let decrease = document.querySelector(".decrease");

// //  -----------------------********** on click off buy button **********  ---------------------


// place.addEventListener("click" , createOrder(mycart))
// .then( (orderid)=>{
//    return proceedToPayment(orderid)
// }
// )
// .catch((err)=>{
//     console.log(err.message);
// })
// .then((successfull)=>{
//     if(successfull){
//         console.log("payment completed ");
//     }
// })



// function creatOrder(cart){
//     const pr = new Promise( function (resolve , reject){
//         if(!validatecart(cart)){
//             reject(new Error("validation of cart is faild"))
//         }
//         console.log("cart validation compleated ...");
//         console.log("order created .. ");
//         console.log("proceeding to payment ....");
//         resolve("123455")
//     })
//     return pr;
// }


// function proceedToPayment(orderid){
//     const pr = new Promise( (resolve , reject) =>{
        
//         //   check the payment method 
//         // card datiles 
//         // payment 

//         // if(money got cridited to our account ) return true(resolve) else false(reject)

//         if(moneyCredited()){
//             console.log(" payment compleated ..");
//             resolve(true)
//         }
//         reject(new Error("payment faield"))
//     })
// }

// function moneyCredited(){
//     console.log(" money credited to out account ");
//     return true;
// }


