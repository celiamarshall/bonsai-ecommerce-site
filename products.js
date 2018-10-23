const cardGenerator = require('./template');
const { inventory } = require('./data');

function init() {
    const products = document.querySelector('.productListings');
    cardGenerator.render(products, inventory, inventory.length);

    const categories = document.querySelectorAll('.category')
    for (category of categories) {
        category.addEventListener('click', function (event) {
            //filterFunction(event.target.textContent)
        })
    }

    const cartButtons = document.querySelectorAll('.cart-button')
    for (button of cartButtons) {
        button.addEventListener('click', function (event) {
            newCartNumber()
            //add to checkout page
        })
    }
}

function newCartNumber() {
    const numberInCart = document.querySelector('.number-in-cart')
    let cartCount = Number(localStorage.getItem('cartCount'))

    if (cartCount) {
        cartCount++
        localStorage.setItem('cartCount', cartCount)
    }
    else {
        localStorage.setItem('cartCount', 1)
    }
    numberInCart.textContent = cartCount + ' Items'
}

module.exports = { init, newCartNumber }