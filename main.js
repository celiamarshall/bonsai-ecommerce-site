const { inventory } = require('./data');
const products = require('./products')
const cardGenerator = require('./template');
//const scriptcheck = require('./scriptcheck)
const numberInCart = document.querySelector('.number-in-cart')
let cartCount = Number(localStorage.getItem('cartCount'))

if (cartCount) {
    numberInCart.textContent = cartCount + ' Items'
}

if (window.location.pathname === '/') {
    const homePageProducts = document.querySelector('.newArrivals')
    cardGenerator.render(homePageProducts, inventory, 3, "all");

    const cartButtons = document.querySelectorAll('.cart-button')
    for (button of cartButtons) {
        button.addEventListener('click', function (event) {
            products.newCartNumber()
            //add to checkout page
        })
    }

}
else if (window.location.pathname === '/products.html') {
    products.init()
}

else if (window.location.pathname === './checkout.html') {
    //scriptcheck.checkoutFunction()
}