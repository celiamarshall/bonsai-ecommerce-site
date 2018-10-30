const cardGenerator = require('./template');
const { inventory } = require('./data');

function init() {
    //DOM Variables
    const showAll = document.querySelectorAll('.all');
    const products = document.querySelector('.productListings');
    const showBeginners = document.querySelector('.beginner');
    const showSpecialties = document.querySelector('.specialty');
    const showFlowering = document.querySelector('.flowering');
    const showSales = document.querySelector('.sale');
    const lessThan25 = document.querySelector('.lessthan25');
    const lessThan50 = document.querySelector('.lessThan50');
    const lessThan75 = document.querySelector('.lessThan75');
    const lessThan100 = document.querySelector('.lessThan100')


    cardGenerator.render(products, inventory, inventory.length, 'all');

    //Event Listeners
    showAll.forEach(cell => cell.addEventListener("click", () => cardGenerator.render(products, inventory, inventory.length, 'all')));
    showBeginners.addEventListener('click', () => cardGenerator.render(products, inventory, inventory.length, 'Beginner'));
    showSpecialties.addEventListener('click', () => cardGenerator.render(products, inventory, inventory.length, 'Specialty'));
    showFlowering.addEventListener('click', () => cardGenerator.render(products, inventory, inventory.length, 'Flowering'));
    showSales.addEventListener('click', () => cardGenerator.render(products, inventory, inventory.length, 'Sale'));
    lessThan25.addEventListener('click', () => cardGenerator.render(products, inventory, inventory.length, [0, 25]));
    lessThan50.addEventListener('click', () => cardGenerator.render(products, inventory, inventory.length, [25, 50]));
    lessThan75.addEventListener('click', () => cardGenerator.render(products, inventory, inventory.length, [50, 75]));
    lessThan100.addEventListener('click', () => cardGenerator.render(products, inventory, inventory.length, [75, 100]));


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