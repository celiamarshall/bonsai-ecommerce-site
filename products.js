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
    const itemsInCart = document.querySelectorAll('.itemBox')
    const pricesInCart = document.querySelectorAll('.priceBox')
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || {}
    
    for (button of cartButtons) {
        button.addEventListener('click', function (event) {
            newCartNumber()
            //add to checkout page
            console.log(event.target.getAttribute('data-id'))
            if (Object.keys(cartItems)) {
                cartItems[event.target.getAttribute('data-id')] = true
            }
            else {
                cartItems[event.target.getAttribute('data-id')] = true
            }
            localStorage.setItem('cartItems', JSON.stringify(cartItems))
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