const cardGenerator= require('./template');
const {inventory} = require('./data');




function init(){
    const products = document.querySelector('.productListings');
    cardGenerator.render(products, inventory, inventory.length);

}



module.exports = { init }