let productsInCart = localStorage.getItem("productsInCart");
let storeDom = document.querySelector(".store-container");
let totalPrice = document.querySelector(".total span");

if(productsInCart) {
    let stores = JSON.parse(productsInCart)
    drewCartProductsUI(stores);
}
// define store products 
function drewCartProductsUI(storePro) {
    let storeUI = storePro.map((store) => {
        return `
        <div class="box">
            <div class="image">
                <img src="${store.imgSto}" alt="">
            </div>
                <h3>${store.titleStore}</h3>
                <p>${store.desc} </p>
                <p>Price: $${store.price} </p>
            <div class="button">
                <p  class="btn" id="addCart" onclick="addedToCart(${store.id})">Add to cart</d>
                <p  class="btn" id="details"onclick="removeItemFromData(${store.id})" >Remove From Cart</p>
            </div>
        </div>
        `
    })
    storeDom.innerHTML = storeUI.join("");
}
// drewCartProductsUI();

function removeItemFromData(id) {
    if(productsInCart) {
        let items = JSON.parse(productsInCart);

        let filterItems = items.filter((item) => item.id !== id);
        drewStoreUI(filterItems);
        localStorage.getItem('productsInCart', JSON.stringify(filterItems))
    }
}




