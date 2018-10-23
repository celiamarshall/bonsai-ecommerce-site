const cardTemplate = ({ img, title, description, price, category, stars }) => {
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
        <button type="button" class="btn btn-secondary cart-button">Add To Cart</button>
        </div>
        <div class="card-footer text-muted">
        <p class = "productInfo">RATED: <strong>${stars} STARS</strong></p>
        <p class = "productInfo">CATEGORY: ${category}</p>
    </div>
      </div>
    `
}

const generateCards = (trees, num) => {
  let cardList = [];
  for (let i = 0; i < num; i++) {
    cardList.push(cardTemplate(trees[i]))
  }
  return cardList
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

const render = (container, products, num) => {
  const cards = generateCards(products, num);
  const cardRow = rowTemplate(cards.join('\n'));
  container.innerHTML = cardRow;
}
module.exports = {
  render
}