const { inventory } = require('./data');
const products = require('./products')
const cardGenerator = require('./template');
const scriptcheck = require('./scriptcheck')
const numberInCart = document.querySelector('.number-in-cart')
let cartCount = Number(localStorage.getItem('cartCount'))

if (cartCount) {
    numberInCart.textContent = cartCount + ' Items'
}

if (window.location.pathname === '/') {
    const homePageProducts = document.querySelector('.newArrivals')
    cardGenerator.render(homePageProducts, inventory, 3);
    //products on the homepage can also be added to the cart
    products.newCartItems()

}

else if (window.location.pathname === '/products.html') {
    products.init()
}

else if (window.location.pathname === '/checkout.html') {
    scriptcheck.checkoutFunction()
}