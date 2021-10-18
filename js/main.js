// variables
let categoryDom = document.querySelector(".box-container");
let storeDom = document.querySelector(".store-container");
let cartsProductsMenu = document.querySelector(".carts-products");
let cartsProducts = document.querySelector(".carts-products div");
let badgeDom = document.querySelector(".badge");
let shoppingCart = document.querySelector(".shoppingCart");

// define category data 
let categoryUI = categoryPro.map((item) => {
    return ` 
    <div class="box">
    <img src="${item.imgCat}" alt="">
    <div class="content">
        <span>${item.title}</span>
        <h3>${item.type}</h3>
        <a href="#store" class="btn">shop now</a>
    </div>
</div>
    `
})
categoryDom.innerHTML = categoryUI.join("")

// define store products 
function drewStoreUI() {
    let storeUI = storePro.map((store) => {
        return `
        <div class="box">
        <div class="image">
            <img src="${store.imgSto}" alt="">
        </div>
        <h3>${store.titleStore}</h3>
        <p>${store.desc} </p>
        <div class="button">
            <p  class="btn" id="addCart" onclick="addedToCart(${store.id})">Add to cart</d>
            <p  class="btn" id="details" >View Details</p>
        </div>
    </div>
        `
    })
    storeDom.innerHTML = storeUI.join("");
}
drewStoreUI();

// function control item by id to add cart

let addedItem = localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")) : [];
// show badge with refresh 
    if(addedItem) {
    addedItem.map((item) => {
        cartsProducts.innerHTML += `<p>${item.titleStore}</p>`;
    })
    badgeDom.style.display = "block";
    badgeDom.innerHTML = addedItem.length;
}

function addedToCart(id) {
    if(localStorage.getItem("username")) {
        let choosenItem = storePro.find((store) => store.id === id)
        cartsProducts.innerHTML += `<p>${choosenItem.titleStore}</p>`;
        addedItem = [...addedItem ,choosenItem];
        localStorage.setItem("productsInCart", JSON.stringify(addedItem))
        // show icon badge 
        let cartsProductsLength = document.querySelectorAll(".carts-products div p");
        badgeDom.style.display = "block";
        badgeDom.innerHTML = cartsProductsLength.length;
        }else {
        window.location = "registar.html";
    }

}

//open cart menu
shoppingCart.addEventListener("click", openCartMenu)
function openCartMenu() {
    if(cartsProducts.innerHTML != "") {
        if (cartsProductsMenu.style.display == "block") {
            cartsProductsMenu.style.display = "none"
        } else {
            cartsProductsMenu.style.display = "block"
        }
    }
}

// check if the user is loged
function checkLogedInUser() {

}
