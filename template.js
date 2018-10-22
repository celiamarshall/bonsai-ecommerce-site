const inventory = require('./data')

const cardTemplate = ({img, title, description, stars }) => {
    return `
      <div class="card m-3 border" style="min-width: 30%; max-width: 20%;">
        <div style="height: 150px; overflow: hidden;">
          <img class="card-img-top" src="${img}" alt="${title}" style="width: 100%;">
        </div>
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p>${description}</p>
        </div>
        <div class="card-footer text-muted">
          Rated: <strong>${stars} STARS</strong>
        </div>
      </div>
    `
  }

  const rowTemplate = (item) => {
    return `
      <div class="row">
        <div class="col">
          <div class="card-group justify-content-around">
            ${item}
          </div>
        </div>
      </div>
    `
  }

  const cards = inventory.map( tree => cardTemplate(tree));
  
  const render = (container, products) => {

    const productsHTML = products.map(inventory.cardTemplate).join('')
    container.innerHTML = rowTemplate(productsHTML)
}

module.exports = {
  template,
  render,
  cards
}