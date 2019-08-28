const pricing = require('../data/pricing.json')

module.exports = class Item {

  constructor(productId, quantity) {
    this.productId = productId,
    this.quantity = quantity,
    this.price = this.setPrice(),
    this.vatMultiplier = this.setVatMultiplier(),
    this.totalPrice = this.setTotalPrice(),
    this.totalVat = this.setTotalVat()
  }

  setPrice() {
    let price
    pricing.prices.forEach(product => {
      if (product.product_id === this.productId) {
        return price = product.price
      }
    })
    return price
  }

  setVatMultiplier() {
    let vatMultiplier
    pricing.prices.forEach(product => {
      if (product.product_id === this.productId) {
        return vatMultiplier = pricing.vat_bands[product.vat_band]
      }
    })
    return vatMultiplier
  }

  setTotalPrice() {
    return this.price * this.quantity
  }

  setTotalVat() {
    let totalVat
    if (this.vatMultiplier > 0) {
      totalVat = this.totalPrice * this.vatMultiplier
    } else {
      totalVat = 0
    }
    return Math.round(totalVat)
  }

}
