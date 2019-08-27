var currencyRates = require('')

module.exports = class Item {

  constructor(productId, quantity) {
    this.productId = productId,
    this.quantity = quantity,
    this.price = 0,
    this.itemVat = 0,
    this.totalPrice = 0
  }

  calculateCost(currency) {

  }
}
