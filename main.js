const { inventory } = require('./data');
const products = require('./products')
const cardGenerator= require('./template');
//const scriptcheck = require('./scriptcheck)


    if (window.location.pathname === '/') {
        const homePageProducts = document.querySelector('.newArrivals')
        cardGenerator.render(homePageProducts, inventory, 3);

    }
    else if (window.location.pathname === '/products.html') {
        products.init()
    }

    //else if(window.location.pathname === './checkout.html){
    //scriptcheck.checkoutFunction()
    //}