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

    newCartItems()
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

function newCartItems() {
    const cartButtons = document.querySelectorAll('.cart-button')
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || []
    let cartPrices = JSON.parse(localStorage.getItem('cartPrices')) || []
    let cartImages = JSON.parse(localStorage.getItem('cartImages')) || []

    for (button of cartButtons) {
        button.addEventListener('click', function (event) {
            newCartNumber()
            //add partciular item to local storage
            for (item of inventory) {
                if (item.id === Number(event.target.getAttribute('data-id'))) {
                    cartItems.push(item.title)
                    cartPrices.push(item.price)
                    cartImages.push(item.img)
                }
            }
            localStorage.setItem('cartItems', JSON.stringify(cartItems))
            localStorage.setItem('cartPrices', JSON.stringify(cartPrices))
            localStorage.setItem('cartImages', JSON.stringify(cartImages))
        })
    }
}

module.exports = { init, newCartNumber, newCartItems }