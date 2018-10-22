document.addEventListener("DOMContentLoaded", function(){

const cardGenerator= require('./template');
const {inventory} = require('./data');
const products = document.querySelector('.lineup');

cardGenerator.render(products, inventory);


})