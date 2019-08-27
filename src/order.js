Item = require('./item')

module.exports = class Order {

  constructor(orderId){
    this.orderId = orderId
    this.orderItems = []
  }

  addItems(items) {
    this.orerItems = items.map(function (item) {
      new Item(item.product_id, item.quantity).calculateCost(currency)
    })
    return this.items
  }

  calculateCost(currency) {
    this.items.forEach(function (item) {
      item.calculateCost(currency)
    })
    return this.items
  }

  printOrder() {
    var orderTotal = items.map((item) => item.totalPrice)).reduce((a, b) => a + b , 0)

    var returnItems = items.map((item) => {
      product_id: item.productId,
      item_price: item.price,
      item_vat: item.itemVat,
      quantity: item.quantity,
      total_price: item.totalPrice})
    return {order_id: this.orderId, total_price: orderTotal, items: returnItems}
  }
}
