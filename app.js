
/*
 adding multipple class to an elements ---> ii.classList.add("'bx','bx-cart-add','addCart'");

*/


products = [
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
const buy = document.querySelector(".buy");   //--------- buy now button 
const myorders = []

const mycart = [];
 
function renderproducts(){

    let i = 0;

    for (i in products){
        obj = products[i]
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
        button.name = ""+obj.id;
        // console.log(  "------------",button.name);
        // const ii = document.createElement("i");
        // ii.classList.add("'bx','bx-cart-add','addCart'");
        // button.appendChild(ii);
        button.style.backgroundImage = "url('./img/addtocart.svg')";
        productbuy.appendChild(np);
        productbuy.appendChild(button);
        cproduct.appendChild(cimg);
        cproduct.appendChild(productbuy);
        collection.appendChild(cproduct);

        // ------------
        // num.textContent = "0";
        // =-----------
    }
}
// const addCart = document.querySelector(".addCart");

// addCart.addEventListener("click" , increaseCart(num));


window.addEventListener("onlode" , renderproducts());

// ------------- increasing number products in the cart---------

function increaseCart(leble){
    // console.log("clicked on add to cart ");
    let num = Number(leble.textContent);
    num +=1;
    leble.textContent = num;
}

            // -------------**************---------

// -------------- Adding products to the cart ------------

const btn = document.querySelectorAll(".cartbtn");
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
        // console.log("----" + products[i].id + "-------" + uid);
        if(products[i].id == Number(uid)){
            // console.log("came3");
            addProduct(products[i]);
        }
    }
}

function addProduct(obj){
    // console.log("------ added ",mycart );
    mycart.push(obj);
    console.log(mycart);
}

// -----------------------****---------------------


//  -----------------------********** on click off buy button **********  ---------------------

buy.addEventListener("click" , createOrder(cart))
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









function creatOrder(cart){
    const pr = new Promise( function (resolve , reject){
        if(!validatecart(cart)){
            reject(new Error("validation of cart is faild"))
        }
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
            resolve(true)
        }
        reject(new Error("payment faield"))
    })
}

function moneyCredited(){
    return true;
}


// -----------------------------------*****************************--------------------------------------------------