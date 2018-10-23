document.addEventListener("DOMContentLoaded", function(){
const cardGenerator= require('./template');
const {inventory} = require('./data');
const products = document.querySelector('.productListings');
const homePageProducts = document.querySelector('.newArrivals')

cardGenerator.render(homePageProducts, inventory, 3);
cardGenerator.render(products, inventory, inventory.length);


})