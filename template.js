const cardTemplate = ({ id, img, title, description, price, category, stars }) => {
  return `
      <div class="card m-3 border" style="min-width: 30%; max-width: 20%;">
        <div style="height: 150px; overflow: hidden;">
          <img class="card-img-top" src="${img}" alt="${title}" style="width: 100%;">
        </div>
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p>${description}</p>
          <p><strong>$${price}</strong></p>
        </div>
        <div class="card-footer text-muted">
        <button data-id="${id}" type="button" class="btn btn-secondary cart-button">Add To Cart</button>
        </div>
        <div class="card-footer text-muted">
        <p class = "productInfo">RATED: <strong>${stars} STARS</strong></p>
        <p class = "productInfo">CATEGORY: ${category}</p>
    </div>
      </div>
    `
}

const rowTemplate = (item) => {
  return `
      <div class="row">
        <div class="col">
          <div class="card-deck justify-content-around">
            ${item}
          </div>
        </div>
      </div>
    `
}

const generateList = (arr, filter) => {
  const productList = [];
  if (filter === 'all') {
    return arr;
  } else {

    for (products of arr) {
      if (products.category === filter) {
        productList.push(products)
      }
    }
    return productList;
  }
}

const generateCards = (trees, num) => {
  let cardList = [];
  if (trees.length <= num) {
    for (let i = 0; i < trees.length; i++) {
      cardList.push(cardTemplate(trees[i]))
    }
  } else {
  for (let i = 0; i < num; i++) {
    cardList.push(cardTemplate(trees[i]))
  }
}
  return cardList
}

const render = (container, products, num, filter) => {
  const productList = generateList(products, filter);
  const cards = generateCards(productList, num);
  const cardRow = rowTemplate(cards.join('\n'));
  container.innerHTML = cardRow;
}

module.exports = {
  render
}